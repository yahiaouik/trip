"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tripManager_1 = __importDefault(require("../Core/tripManager"));
const Trip_1 = __importDefault(require("../Models/Trip"));
const router = express_1.default.Router();
const tripManager = new tripManager_1.default();
// Homapage - GET Routing -
router.get('/', (req, res) => {
    // console.log(req.app.test);
    res.end('HomePage');
});
// Send Message - POST Routing -
router.post('/trips', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trip = new Trip_1.default(null, req.body.country, req.body.city, req.body.arrivalDate, req.body.departureDate, req.body.longitude, req.body.latitude, req.body.userId);
    yield tripManager.createTrip(trip);
    res.send("test ok");
}));
router.delete('/trips/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tripManager.deleteTrip(Number(req.params.id));
    res.send("test ok");
}));
router.patch('/trips/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tripManager.updateTrip(Number(req.params.id));
    res.send("test ok");
}));
router.post('/trips/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tripManager.getTripInfo(Number(req.params.id));
    res.send("test ok");
}));
router.get('/trips', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tripManager.getTrips();
    res.send("test ok");
}));
router.get('/trips?userid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tripManager.getUserTrips(Number(req.query.userid.toString()));
    res.send("test ok");
}));
exports.default = router;
//# sourceMappingURL=tripRequest.js.map