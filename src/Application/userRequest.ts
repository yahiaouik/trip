import express from "express"
import User from "../Models/User"
import UserManager from "../Core/userManager";

const router = express.Router();
const userManager = new UserManager();

// Homapage - GET Routing -
router.get('/', (req, res) => {
    res.end('HomePage');

});

// Send Message - POST Routing -
router.post('/createUser', async (req, res) => {
    // tslint:disable-next-line:no-console
    const user = new User(null,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.createUser(user);
    res.send("test ok")

});
// liste des Messages - GET Routing -
router.post('/deleteUser', async (req, res) => {
    const user = new User(req.body.userId,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.deleteUser(user);
    res.send("test ok")
});

router.post('/updateUser', async (req, res) => {
    const user = new User(req.body.userId,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.updateUser(user);
    res.send("test ok")
});

router.post('/getInfoUser', async (req, res) => {
    const user = new User(req.body.userId,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.getInfoUser(user);
    res.send("test ok")
});

router.get('/getUsers', async (req, res) => {
    await userManager.getUsers();
    res.send("test ok")
});

export default router;