import dotenv from 'dotenv';
import { isPropertyAccessExpression } from 'typescript';

dotenv.config();

export function getDbUri(): string {
    return process.env.DATABASE_URI || '';
}

export function getServerPort(): string {
    return process.env.PORT || '8090';
}

export function getjwtPassword(): string {
    return process.env.JWT_PASSWORD || '';
}

export function getDbPassword(): string {
    return process.env.DATABASE_PASSWORD || '';
}

export function getDbLogin(): string {
    return process.env.DATABASE_LOGIN || '';
}
