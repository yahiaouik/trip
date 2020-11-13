import express from "express";
// import mysql from 'mysql';
import bodyParser from 'body-parser';
import userRequest from "./Application/userRequest"
import tripRequest from "./Application/tripRequest"
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

app.use('/user', userRequest);
app.use('/trip', tripRequest);


/*var conn = mysql.createConnection({
  host: "localhost:3306",
  user: "dev",
  password: "dev"
});

conn.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
})*/