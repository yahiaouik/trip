import express from "express";
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
router.post('/createTrip', async (req, res) => {
    // tslint:disable-next-line:no-console
    const trip = new Trip(null,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.createTrip(trip);
    res.send("test ok")

});
// liste des Messages - GET Routing -
router.post('/deleteTrip', async (req, res) => {
    const trip = new Trip(req.body.tripId,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.deleteTrip(trip);
    res.send("test ok")
});

router.post('/updateTrip', async (req, res) => {
    const trip = new Trip(req.body.tripId,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.updateTrip(trip);
    res.send("test ok")
});

router.post('/getTrip', async (req, res) => {
    const trip = new Trip(req.body.tripId,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.getTripInfo(trip);
    res.send("test ok")
});

router.get('/getTrips', async (req, res) => {
    const trip = new Trip(req.body.tripId,req.body.country,req.body.city,req.body.arrivalDate,req.body.departureDate,req.body.longitude,req.body.latitude,req.body.userId);
    await tripManager.getTrips();
    res.send("test ok")
});

router.get('/getUserTrips', async (req, res) => {
    const user = new User(req.body.userId,req.body.firstname,req.body.lastname,req.body.promo,req.body.email,req.body.password);
    await tripManager.getUserTrips(user);
    res.send("test ok")
});

export default router;
