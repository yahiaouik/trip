import express from "express"
import User from "../Models/User"
import UserManager from "../Core/userManager";

const router = express.Router();
const userManager = new UserManager();

// Homapage - GET Routing -
router.get('/', (req, res) => {
    // console.log(req.app.test);
    res.end('HomePage');

});

// Send Message - POST Routing -
router.post('/createUser', (req, res) => {
    const user = new User(req.body.user_id,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    userManager.createUser(user);
});
// liste des Messages - GET Routing -
router.post('/deleteUser', (req, res) => {
    const user = new User(req.body.user_id,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    userManager.deleteUser(user);
});

router.post('/updateUser', (req, res) => {
    const user = new User(req.body.user_id,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    userManager.updateUser(user);
});

router.post('/getInfoUser', (req, res) => {
    const user = new User(req.body.user_id,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    userManager.getInfoUser(user);
});

router.get('/getUsers', (req, res) => {
    userManager.getUsers();
});

export default router;