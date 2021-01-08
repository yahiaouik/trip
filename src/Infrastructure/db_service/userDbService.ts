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

  async getUser(userId: number): Promise<User> {
    const sql = mysql.format("SELECT * FROM User WHERE user_id=?", [userId])
    const result = await this.conn.query(sql, (error: any, res: any) => {
      if (error) throw error;
      return res;
    });
    return new User(result[0].user_id,result[0].firstname,result[0].lastname,result[0].promo,result[0].email,result[0].password)
  }

  async getUsers() : Promise<User[]> {
    const sql = "SELECT * FROM User;"
    return await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
      return
    });
  }

  async addUser(user: User) : Promise<void> {
    const sql = mysql.format("INSERT INTO User (firstname,lastname,promo,email,password) VALUES(?,?,?,?,?)",
    [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword()])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  async  updateUser(user: User) : Promise<void> {
    const sql = mysql.format("UPDATE User SET (firstname = ?,lastname = ?,promo = ?,email = ?,password = ?) WHERE user_id= ?;",
    [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword(), user.getUserId()])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  async delateUser(userId: number) {
    const sql = mysql.format("DELETE FROM User WHERE user_id= ?;",[userId])
    await this.conn.query(sql, (error: any, result: string) => {
      if (error) throw error;
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }



}