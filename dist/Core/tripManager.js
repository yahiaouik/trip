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
const tripDbService_1 = __importDefault(require("../Infrastructure/db_service/tripDbService"));
class TripManager {
    createTrip(trip) {
        return __awaiter(this, void 0, void 0, function* () {
            // recuperer les coordonnées de la ville -> api service
            // ajouter un voyage dans la table trip
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.addTrip(trip);
        });
    }
    updateTrip(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            // modifier un voyage dans la table trip
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.updateTrip(tripId);
        });
    }
    deleteTrip(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            // supprime un voyage dans la table trip
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.delateTrip(tripId);
        });
    }
    getTripInfo(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            // recupere info voyage dans la table trip
            // recupere les info de l'utilisateur
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.getTrip(tripId);
        });
    }
    getTrips() {
        return __awaiter(this, void 0, void 0, function* () {
            // recupere une liste de voyage
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.getTrips();
        });
    }
    getUserTrips(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // recupere une liste de voyage pour un utilisateur
            const tripDbService = new tripDbService_1.default();
            yield tripDbService.getUserTrips(userId);
        });
    }
}
exports.default = TripManager;
//# sourceMappingURL=tripManager.js.map