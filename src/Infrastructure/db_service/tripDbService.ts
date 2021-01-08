import Trip from "../../Models/Trip";
import mysql from "mysql";
import User from "../../Models/User";

export default class TripDbService {

  conn: any;
  constructor() {
    this.conn = mysql.createConnection({
      host: "localhost",
      database: "trip",
      user: "dev",
      password: "dev"
    });

    this.conn.connect((err: any) => {
      if (err) throw err;
    })
  }

  async getTrip(tripId: number) {
    const sql = mysql.format("SELECT * FROM Trip WHERE trip_id=?", [tripId])
    await this.conn.query(sql, (error: any, result: any) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result[0].firstname);
      // return new Trip(result["Trip_id"],result.firstname,result.lastname,result.promo,result.email,result.password)
    });
  }

  async getUserTrips(userId: number) {
    const sql = mysql.format("SELECT * FROM Trip WHERE user_id=?", [userId])
    await this.conn.query(sql, (error: any, result: any) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result[0].firstname);
      // return new Trip(result["Trip_id"],result.firstname,result.lastname,result.promo,result.email,result.password)
    });
  }

  async getTrips() {
    const sql = "SELECT * FROM Trip;"
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  async addTrip(trip: Trip) {
    const sql = mysql.format("INSERT INTO Trip (country,city,arrival_date,departure_date,longitude,latitude,user_id) VALUES(?,?,?,?,?,?,?)", [trip.getCountry(), trip.getCity(), trip.getArrivalDate(), trip.getDepartureDate(), trip.getLatitude(), trip.getLatitude(),trip.getUserId()])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  async updateTrip(tripId: number) {
    /*const sql =
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });*/
  }

  async delateTrip(tripId: number) {
    const sql = mysql.format("DELETE FROM Trip WHERE trip_id= ?;",[tripId])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }



}