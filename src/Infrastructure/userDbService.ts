import User from "../Models/User";
import mysql from "mysql";
import { getConnection } from "../Core/db-connection";
import { ConflictError, NotFoundError } from "../Core/error/http-error";

// Classe permetant de lire et d'ecrire dans la table User de la base de données
export class UserDbService {

  // Permet de recuperer un utilisateur depuis son adresse e-mail
  getUserByEmail(email: string): Promise<any> {
    const sql = mysql.format("SELECT * FROM User WHERE email=?", [email])
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, function (error: any, res: any) {
        if (!res[0]) {
          reject(new NotFoundError('Aucun utilisateur avec l\'email fournit'));
        } else {
          resolve(new User(res[0].id, res[0].firstname, res[0].lastname, res[0].promo, res[0].email, res[0].password));
        }
      });
    });
  }

  // Permet de recuperer un utilisateur depuis son identifiant unique
  getUser(userId: number): Promise<any> {
    const sql = mysql.format("SELECT * FROM User WHERE id=?", [userId])
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, function (error: any, res: any) {
        if (!res[0]) {
          reject(new NotFoundError('Aucun utilisateur avec l\'ID fournit'));
        } else {
          resolve(new User(res[0].id, res[0].firstname, res[0].lastname, res[0].promo, res[0].email, res[0].password));
        }
      })
    });
  }

  // Permet de recuperer tous les utilisateurs existants
  getUsers(): Promise<User[]> {
    const sql = "SELECT * FROM User;";
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, function (error: any, res: any) {
        if (!res[0]) {
          reject(new NotFoundError('Aucun utilisateur n\'a été crée'));
        } else {
          let users: User[] = [];
          for (let i = 0; i < res.length; i++) {
            users.push(new User(res[i].id, res[i].firstname, res[i].lastname, res[i].promo, res[i].email, res[i].password));
          }
          resolve(users);
        }
      });
    });
  }

  // Permet de creer un nouvel utilisateur
  addUser(user: User): Promise<void> {
    const sql = mysql.format("INSERT INTO User (firstname,lastname,promo,email,password) VALUES(?,?,?,?,?)",
      [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword()]);
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, (error: any, result: string) => {
        if (error.errno === 1062) {
        reject(new ConflictError('Email déjà utilisé'));
        }
      });
    });
  }

  // Permet de mettre à jour un utilisateur
  updateUser(user: User): Promise<void> {
    const sql = mysql.format("UPDATE User SET (firstname = ?,lastname = ?,promo = ?,email = ?,password = ?) WHERE id= ?;",
      [user.getFirstname(), user.getLastname(), user.getPromo(), user.getEmail(), user.getPassword(), user.getUserId()])
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, (error: any, result: string) => {
        if (error) throw error;
      });
    });
  }

  //Permet de supprimer un utilisateur
  deleteUser(userId: number) {
    const sql = mysql.format("DELETE FROM User WHERE id= ?;", [userId]);
    return new Promise(async (resolve, reject) => {
      (await getConnection()).query(sql, (error: any, result: string) => {
        if (error) {
          reject(new NotFoundError("L'utilisateur a déjà été supprimé"));
        } 
      });
    });
  }
}

export default new UserDbService();