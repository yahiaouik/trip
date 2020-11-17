import User from "../../Models/User";
import mysql from "mysql";

export default class UserDbService {

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

  async getUser(user: User) {
    const sql = mysql.format("SELECT * FROM User WHERE user_id=?", [user.getUserId()])
    await this.conn.query(sql, (error: any, result: any) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result[0].firstname);
      // return new User(result["user_id"],result.firstname,result.lastname,result.promo,result.email,result.password)
    });
  }

  async getUsers() {
    const sql = "SELECT * FROM User;"
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  async addUser(user: User) {
    const sql = mysql.format("INSERT INTO User (firstname,lastname,promo,email,password) VALUES(?,?,?,?,?)", [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword()])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  /*async  updateUser(user: User) {
    const sql =
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  } */

  async delateUser(user: User) {
    const sql = mysql.format("DELETE FROM User WHERE user_id= ?;",[user.getUserId()])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }



}