"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../Models/User"));
const userManager_1 = __importDefault(require("../Core/userManager"));
const router = express_1.default.Router();
const userManager = new userManager_1.default();
// Homapage - GET Routing -
router.get('/', (req, res) => {
    // console.log(req.app.test);
    res.end('HomePage');
});
// Send Message - POST Routing -
router.post('/createUser', (req, res) => {
    const user = new User_1.default(req.body.user_id, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    userManager.createUser(user);
});
// liste des Messages - GET Routing -
router.post('/deleteUser', (req, res) => {
    const user = new User_1.default(req.body.user_id, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    userManager.deleteUser(user);
});
router.post('/updateUser', (req, res) => {
    const user = new User_1.default(req.body.user_id, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    userManager.updateUser(user);
});
router.post('/getInfoUser', (req, res) => {
    const user = new User_1.default(req.body.user_id, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    userManager.getInfoUser(user);
});
router.get('/getUsers', (req, res) => {
    userManager.getUsers();
});
exports.default = router;
//# sourceMappingURL=userRequest.js.map