"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class TripDbService {
    constructor() {
        this.conn = mysql_1.default.createConnection({
            host: "localhost",
            database: "trip",
            user: "dev",
            password: "dev"
        });
        this.conn.connect((err) => {
            if (err)
                throw err;
        });
    }
    getTrip(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("SELECT * FROM Trip WHERE trip_id=?", [tripId]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result[0].firstname);
                // return new Trip(result["Trip_id"],result.firstname,result.lastname,result.promo,result.email,result.password)
            });
        });
    }
    getUserTrips(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("SELECT * FROM Trip WHERE user_id=?", [userId]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result[0].firstname);
                // return new Trip(result["Trip_id"],result.firstname,result.lastname,result.promo,result.email,result.password)
            });
        });
    }
    getTrips() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM Trip;";
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
    addTrip(trip) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("INSERT INTO Trip (country,city,arrival_date,departure_date,longitude,latitude,user_id) VALUES(?,?,?,?,?,?,?)", [trip.getCountry(), trip.getCity(), trip.getArrivalDate(), trip.getDepartureDate(), trip.getLatitude(), trip.getLatitude(), trip.getUserId()]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
    updateTrip(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const sql =
            await this.conn.query(sql, (error: any, result: string) => {
              if (error) throw error;
              // tslint:disable-next-line:no-console
              console.log(result);
            });*/
        });
    }
    delateTrip(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("DELETE FROM Trip WHERE trip_id= ?;", [tripId]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
}
exports.default = TripDbService;
//# sourceMappingURL=tripDbService.js.map