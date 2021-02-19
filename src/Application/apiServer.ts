import express from 'express';
import userRequest from './userRequest';
import tripRequest from './tripRequest';
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser';

const app = express();
const port = 8080; // default port to listen

export class ApiServer {
    public run() {
        // define a route handler for the default home page
        app.get('/', (req, res) => {
            res.send('Hello world!');
        });

        // start the Express server
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${port}`);
        });

        app.use(bodyParser.json()); // support json encoded bodies
        app.use(bodyParser.urlencoded({ extended: false }));

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
            next();
        });

        app.use('/', userRequest);
        app.use('/', tripRequest);
    }
}

export default new ApiServer();
