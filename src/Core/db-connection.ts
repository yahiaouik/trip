import { getDbUri } from '../config';
import 'reflect-metadata';
import mysql, { Connection } from 'mysql';

let connection : Connection;

export async function getConnection(): Promise<Connection> {
    connection = mysql.createConnection({
        host: getDbUri(),
        user: 'tripUser',
        password: 'bNfdd6JhLuowmvGWFm9b',
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
