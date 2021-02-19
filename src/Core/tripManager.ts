import tripDbService from '../Infrastructure/tripDbService';
import Trip from '../Models/Trip';

// Classe permettant de faire des operations sur les voyages
export default class TripManager {
    // Permet d'ajouter un voyage
    async createTrip(trip: Trip) {
        return tripDbService.addTrip(trip);
    }

    // Permet de recuperer une liste de voyages
    async getTrips() {
        return tripDbService.getTrips();
    }

    // Permet de recuperer une liste de voyages pour un utilisateur
    async getUserTrips(userId: number) {
        return tripDbService.getUserTrips(userId);
    }

    // Permet de supprimer un voyage
    async deleteTrip(tripId: number) {
        const trip = await tripDbService.getTripById(tripId);
        return tripDbService.deleteTrip(tripId, trip.getUserId());
    }

    async updateTrip(trip: Trip) {
        return tripDbService.updateTrip(trip);
    }
}
