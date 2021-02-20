import User from '../Models/User';
import userDbService from '../Infrastructure/userDbService';
import crypto from 'crypto';
import * as cfg from '../config';
import { Secret, sign, SignOptions } from 'jsonwebtoken';
import { ForbiddenError, UnauthorizedError } from './error/http-error';

// Classe permettant de faire des operations sur les données utilisateurs
export default class UserManager {
    // Permet de verifier si l'utilisateur existe et si le mot de passe de l'utilisateur est correct
    async login(email: string, password: string): Promise<Object> {
        const user = await userDbService.getUserByEmail(email);
        if (!user) { throw new UnauthorizedError(); }
        if (!(await this.verify(password, user.password))) throw new ForbiddenError('Utilisateur ou mot de passe incorrect');
        const token = await this.createJwt(user);
        return { user: { ...user }, token };
    }

    // Permet d'insstancier le generateur de token
    private signJwt(payload: object, secret: Secret, options: SignOptions): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            sign(payload, secret, options, (err: Error | null, encoded: string | undefined) => {
                if (err || !encoded) {
                    reject(err);
                } else {
                    resolve(encoded);
                }
            });
        });
    }

    // Permet de creer un token à partir des données de l'utilisateur
    private createJwt(user: User): Promise<string> {
        return this.signJwt(
            {
                user: {
                    promo: user.promo,
                    email: user.email,
                    id: user.userId,
                },
                date: Date.now(),
            },
            cfg.getjwtPassword(),
            {
                expiresIn: '2h',
            },
        );
    }

    // Permet de verifier si le mot de passe est correct
    private async verify(password: string, hash: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(password === hash);
        });
    }

    // Permet de creer un nouvel utilisateur
    async createUser(user: User): Promise<String> {
        return userDbService.addUser(user);
    }

    // Permet de mettre à jour un utilisateur
    async updateUser(user: User): Promise<String> {
        return userDbService.updateUser(user);
    }

    // Permet de supprimer un utilisateur
    async deleteUser(userId: number): Promise<String> {
        return userDbService.deleteUser(userId);
    }

    // Permet de recuperer un utilisateur depuis son identifiant unique
    async getInfoUser(userId: number): Promise<User> {
        return userDbService.getUser(userId);
    }

    // Permet de recuperer tous les utilisateurs existants
    async getUsers(): Promise<User[]> {
        // recupere toutes les utilisateurs de la table user
        return userDbService.getUsers();
    }
}
