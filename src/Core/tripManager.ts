import User from "../Models/User";
import TripDbService from "../Infrastructure/db_service/tripDbService";
import Trip from "../Models/Trip";

export default class TripManager {

    async createTrip(trip : Trip){
        // recuperer les coordonnées de la ville -> api service
        // ajouter un voyage dans la table trip
        const tripDbService = new TripDbService();
        await tripDbService.addTrip(trip);
    }

    async updateTrip(tripId : number){
        // modifier un voyage dans la table trip
        const tripDbService = new TripDbService();
        await tripDbService.updateTrip(tripId);
    }

    async deleteTrip(tripId : number){
        // supprime un voyage dans la table trip
        const tripDbService = new TripDbService();
        await tripDbService.delateTrip(tripId);
    }

    async getTripInfo(tripId : number){
        // recupere info voyage dans la table trip
        // recupere les info de l'utilisateur
        const tripDbService = new TripDbService();
        await tripDbService.getTrip(tripId);
    }

    async getTrips(){
        // recupere une liste de voyage
        const tripDbService = new TripDbService();
        await tripDbService.getTrips();
    }

    async getUserTrips (userId: number){
        // recupere une liste de voyage pour un utilisateur
        const tripDbService = new TripDbService();
        await tripDbService.getUserTrips(userId);
    }

}
