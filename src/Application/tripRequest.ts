import express, { NextFunction } from 'express';
import TripManager from '../Core/tripManager';
import Trip from '../Models/Trip';
import { isAuthorized } from '../Core/auth-middleware';

const router = express.Router();
const tripManager = new TripManager();

// Permet de creer un voyage
router.post('/trips', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    const trip = new Trip(NaN, req.body.country, req.body.countryId, req.body.city, req.body.arrivalDate,
        req.body.departureDate, req.body.status, req.body.userId);
    await tripManager.createTrip(trip)
        .then((trips) => res.send(trips))
        .catch((e) => res.status(e._status).send(e._title));
});

// Permet de supprimer un voyage
router.delete('/trips/:id', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    await tripManager.deleteTrip(Number(req.params.id))
        .then((result) => res.send(result))
        .catch((e) => res.status(e._status).send(e._title));
});

// Permet de mettre à jour un voyage
router.patch('/trips/:id', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    const trip = new Trip(Number(req.params.id), req.body.country, req.body.countryId, req.body.city,
        req.body.arrivalDate, req.body.departureDate, req.body.status, req.body.userId, req.body.userFirstname,
        req.body.userLastname, req.body.userPromo);
    await tripManager.updateTrip(trip)
        .then((result) => { res.send(result); })
        .catch((e) => res.status(e._status).send(e._title));
});

// Permet de recuperer tous les voyages
router.get('/trips', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    await tripManager.getTrips()
        .then((trips) => res.send(trips))
        .catch((e) => res.status(e._status).send(e._title));
});

// Permet de recuperer tous les voyages d'un utilisateur
router.get('/trips/:userid', (req, res, next) => isAuthorized(req, res, next).catch(next), async (req, res) => {
    await tripManager.getUserTrips(Number(req.params.userid.toString()))
        .then((trips) => {
            res.send(trips);
        })
        .catch((e) => res.status(e._status).send(e._title));
});

export default router;
