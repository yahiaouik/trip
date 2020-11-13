"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRequest_1 = __importDefault(require("./Application/userRequest"));
const tripRequest_1 = __importDefault(require("./Application/tripRequest"));
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
app.use('/user', userRequest_1.default);
app.use('/trip', tripRequest_1.default);
/*var conn = mysql.createConnection({
  host: "localhost:3306",
  user: "dev",
  password: "dev"
});

conn.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
})*/ 
//# sourceMappingURL=index.js.map