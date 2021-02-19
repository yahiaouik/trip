import { JsonWebTokenError, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs-extra';
import { UnauthorizedError, ForbiddenError } from './error/http-error';
import * as cfg from '../config';

export interface DecodedJwt {
    user: TokenUser,
    iat: number,
    exp: number
}

export interface TokenUser {
    promo: string,
    firstname: string,
    lastname: string,
    email: string,
    id: string
}

export async function isAuthorized(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split('Bearer ');
    if (!token || token.length < 2) {
        throw new UnauthorizedError('Veuillez vous connecter pour accéder à cette fonctionnalité');
    }
    let decoded: DecodedJwt;
    const cert = cfg.getjwtPassword() || readFileSync('private.key');
    try {
        decoded = verify(token[1], cert) as DecodedJwt;
        next();
    } catch (err) {
        throwError(err);
    }
}

function throwError(err: any) {
    if (err instanceof JsonWebTokenError) {
        throw new UnauthorizedError('Le token est invalide, essayer de vous reconnecter');
    }
    throw new ForbiddenError('Accès non autorisé');
}
