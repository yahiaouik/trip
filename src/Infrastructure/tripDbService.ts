import Trip from '../Models/Trip';
import mysql from 'mysql';
import { getConnection } from '../Core/db-connection';
import { async } from 'rxjs';
import { ConflictError, NotFoundError } from '../Core/error/http-error';

// Classe permetant de lire et d'ecrire dans la table Trip de la base de données
export class TripDbService {
    // Permet de recuperer les voyages d'un utilisateur
    getTripById(tripId: number): Promise<Trip> {
        const sql = mysql.format('SELECT * FROM Trip WHERE id=?', [tripId]);
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: any) => {
                resolve(new Trip(result[0].id, result[0].country, result[0].countryId,
                    result[0].city, result[0].arrivalDate, result[0].departureDate, result[0].status, result[0].userId));
            });
        });
    }

    // Permet de recuperer les voyages d'un utilisateur
    getUserTrips(userId: number) {
        const sql = mysql.format('SELECT * FROM Trip WHERE userId=?', [userId]);
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: any) => {
                const trips: Trip[] = [];
                for (let i = 0; i < result.length; i++) {
                    trips.push(new Trip(result[i].id, result[i].country, result[i].countryId,
                        result[i].city, result[i].arrivalDate, result[i].departureDate, result[i].status, result[i].userId));
                }
                resolve(trips);
            });
        });
    }

    // Permet de recuperer tous les voyages
    getTrips() {
        const sql = 'SELECT *,Trip.id FROM Trip INNER JOIN User ON Trip.userId = User.id;';
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: any) => {
                const trips: Trip[] = [];
                for (let i = 0; i < result.length; i++) {
                    trips.push(new Trip(result[i].id, result[i].country, result[i].countryId,
                        result[i].city, result[i].arrivalDate, result[i].departureDate,
                        result[i].status, result[i].userId, result[i].firstname, result[i].lastname, result[i].promo));
                }
                resolve(trips);
            });
        });
    }

    // Permet d'ajoueter un voyage
    addTrip(trip: Trip) {
        const sql = mysql.format('INSERT INTO Trip (country,countryId,city,arrivaldate,departuredate,status,userId) VALUES(?,?,?,?,?,?,?)',
            [trip.getCountry(), trip.getCountryId(), trip.getCity(), trip.getArrivalDate(), trip.getDepartureDate(),
                trip.getStatus(), trip.getUserId()]);
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: string) => {
                if (error && error.errno === 1062) {
                    reject(new ConflictError('Ce voyage existe déjà'));
                } else {
                    resolve(this.getUserTrips(trip.getUserId()));
                }
            });
        });
    }

    // Permet de supprimer un voyage
    deleteTrip(tripId: number, userId: number) {
        const sql = mysql.format('DELETE FROM Trip WHERE id= ?;', [tripId]);
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: string) => {
                if (error) {
                    reject(new NotFoundError('Le voyage a déjà été supprimé'));
                } else {
                    resolve(this.getUserTrips(userId));
                }
            });
        });
    }

    // Permet de mettre à jour un voyage
    updateTrip(trip: Trip) {
        const sql = mysql.format('UPDATE Trip SET country = ?, countryId= ?, city = ?, arrivaldate = ?, departuredate = ?, status= ? WHERE id=?',
            [trip.getCountry(), trip.getCountryId(), trip.getCity(), trip.getArrivalDate(), trip.getDepartureDate(),
                trip.getStatus(), trip.getTripId()]);
        return new Promise(async (resolve, reject) => {
            (await getConnection()).query(sql, (error: any, result: string) => {
                if (error) {
                    if (error.errno === 1062) {
                        reject(new ConflictError('Ce voyage existe déjà'));
                    } else {
                        reject(error);
                    }
                } else if (trip.userPromo !== 'ADMIN') {
                    resolve(this.getUserTrips(trip.getUserId()));
                } else {
                    resolve(this.getTrips());
                }
            });
        });
    }
}

export default new TripDbService();
