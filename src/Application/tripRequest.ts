import express, { NextFunction } from "express";
import User from "../Models/User";
import TripManager from '../Core/tripManager';
import Trip from '../Models/Trip';

const router = express.Router();
const tripManager = new TripManager();

// Homapage - GET Routing -
router.get('/', (req, res) => {
    // console.log(req.app.test);
    res.end('HomePage');

});

// Send Message - POST Routing -
router.post('/trips', async (req, res) => {
    const trip = new Trip(null,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.createTrip(trip);
    res.send("test ok")

});

router.delete('/trips/:id', async (req, res) => {
    await tripManager.deleteTrip(Number(req.params.id));
    res.send("test ok")
});

router.patch('/trips/:id', async (req, res) => {
    await tripManager.updateTrip(Number(req.params.id));
    res.send("test ok")
});

router.post('/trips/:id', async (req, res) => {
    await tripManager.getTripInfo(Number(req.params.id));
    res.send("test ok")
});

router.get('/trips', async (req, res) => {
    await tripManager.getTrips();
    res.send("test ok")
});

router.get('/trips?userid', async (req, res) => {
    await tripManager.getUserTrips(Number(req.query.userid.toString()));
    res.send("test ok")
});

export default router;
