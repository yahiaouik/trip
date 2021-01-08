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
const User_1 = __importDefault(require("../../Models/User"));
const mysql_1 = __importDefault(require("mysql"));
class UserDbService {
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
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("SELECT * FROM User WHERE user_id=?", [userId]);
            const result = yield this.conn.query(sql, (error, res) => {
                if (error)
                    throw error;
                return res;
            });
            return new User_1.default(result[0].user_id, result[0].firstname, result[0].lastname, result[0].promo, result[0].email, result[0].password);
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM User;";
            return yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
                return;
            });
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("INSERT INTO User (firstname,lastname,promo,email,password) VALUES(?,?,?,?,?)", [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword()]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("UPDATE User SET (firstname = ?,lastname = ?,promo = ?,email = ?,password = ?) WHERE user_id= ?;", [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword(), user.getUserId()]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
    delateUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = mysql_1.default.format("DELETE FROM User WHERE user_id= ?;", [userId]);
            yield this.conn.query(sql, (error, result) => {
                if (error)
                    throw error;
                // tslint:disable-next-line:no-console
                console.log(result);
            });
        });
    }
}
exports.default = UserDbService;
//# sourceMappingURL=userDbService.js.map