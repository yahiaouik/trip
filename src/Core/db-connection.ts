import { getDbUri, getDbPassword, getDbLogin } from '../config';
import 'reflect-metadata';
import mysql, { Connection } from 'mysql';

let connection : Connection;

export async function getConnection(): Promise<Connection> {
    connection = mysql.createConnection({
        host: getDbUri(),
        user: getDbLogin(),
        password: getDbPassword(),
        database: 'trips',
    });

    connection.connect((err: any) => {
        if (err) throw err;
    });
    return connection;
}

export async function close() {
    if (connection) {
        try {
            connection.destroy();
        } catch (err) { console.log(err); }
    }
}
