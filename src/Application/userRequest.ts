import express from 'express';
import User from '../Models/User';
import UserManager from '../Core/userManager';
import { isAuthorized } from '../Core/auth-middleware';

// Fichier permetant de creer les routes API relatives aux utilisateurs

const router = express.Router();
const userManager = new UserManager();

// Route permettant l'authentification d'un utilisateur
router.post('/login', async (req, res) => {
    await userManager.login(req.body.login, req.body.password)
        .then((result) => res.send(result))
        .catch((e) => res.status(403).send(e._title));
});

// Route permettant de créer un utilisateur
router.post('/users', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    const user = new User(NaN, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    await userManager.createUser(user)
        .then((result) => res.status(201).send(result))
        .catch((e) => res.status(e._status).send(e._title));
});

// Route permettant de supprimer un utilisateur
router.delete('/users/:id', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    await userManager.deleteUser(Number(req.params.id))
        .then((result) => res.send(result))
        .catch((e) => res.status(e._status).send(e._title));
});

// Route permettant de mettre a jour un utilisateur
router.patch('/users/:id', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    const user = new User(Number(req.params.id), req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    await userManager.updateUser(user)
        .then((result) => res.send(result))
        .catch((e) => res.status(e._status).send(e._title));
});

// Route permettant de recuperer un utilisateur
router.get('/users/:id', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    await userManager.getInfoUser(Number(req.params.id))
        .then((user) => res.send(user))
        .catch((e) => res.status(e._status).send(e._title));
});

// Route permettant de recuperer tous les utilisateurs
router.get('/users', async (req, res) => {
    await userManager.getUsers()
        .then((users) => res.send(users))
        .catch((e) => res.status(e._status).send(e._title));
});

export default router;
