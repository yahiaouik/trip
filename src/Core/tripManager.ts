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

    async updateTrip(trip : Trip){
        // modifier un voyage dans la table trip
        const tripDbService = new TripDbService();
        await tripDbService.updateTrip(trip);
    }

    async deleteTrip(trip : Trip){
        // supprime un voyage dans la table trip
        const tripDbService = new TripDbService();
        await tripDbService.delateTrip(trip);
    }

    async getTripInfo(trip : Trip){
        // recupere info voyage dans la table trip
        // recupere les info de l'utilisateur
        const tripDbService = new TripDbService();
        await tripDbService.getTrip(trip);
    }

    async getTrips(){
        // recupere une liste de voyage
        const tripDbService = new TripDbService();
        await tripDbService.getTrips();
    }

    async getUserTrips (user: User){
        // recupere une liste de voyage pour un utilisateur
        const tripDbService = new TripDbService();
        await tripDbService.getUserTrips(user);
    }

}
