import dotenv from 'dotenv';

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
