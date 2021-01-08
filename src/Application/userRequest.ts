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
router.post('/users', async (req, res) => {
    const user = new User(null,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.createUser(user);
    res.send("test ok")

});
// liste des Messages - GET Routing -
router.delete('/users/:id', async (req, res) => {
    await userManager.deleteUser(Number(req.params.id));
    res.send("test ok")
});

router.patch('/users', async (req, res) => {
    const user = new User(null,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await userManager.updateUser(user);
    res.send("test ok")
});

router.get('/users/:id', async (req, res) => {
  await userManager.getInfoUser(Number(req.params.id))
  .then((response) => {
     // tslint:disable-next-line:no-console
    // console.log(response);
  })
    res.send("test ok")
});

router.get('/users', async (req, res) => {
    await userManager.getUsers();
    res.send("test ok")
});

export default router;