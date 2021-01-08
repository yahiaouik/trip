import User from "../Models/User";
import UserDbService from "../Infrastructure/db_service/userDbService";

export default class UserManager {

    async createUser (user : User){
        // ajouter l'utilisateur dans la table user
        const userDbService = new UserDbService();
        await userDbService.addUser(user);

    }

    async updateUser (user : User){

        // modifier l'utilisateur dans la table user
        const userDbService = new UserDbService();
        await userDbService.updateUser(user);
    }

    async deleteUser (userId : number){
        // supprimer l'utilisateur de la table user
        // supprimer les voyages relié a cet utilisateur
        const userDbService = new UserDbService();
        await userDbService.delateUser(userId);
    }

    async getInfoUser (userId : number) : Promise<User> {
        // recuperer info de la table utilisateur
        // recuperer liste des voyage associés
        const userDbService = new UserDbService();
        const res = await userDbService.getUser(userId);
        // tslint:disable-next-line:no-console
        console.log(res);
        return res;
    }

    async getUsers (){
        // recupere toutes les utilisateurs de la table user
        const userDbService = new UserDbService();
        await userDbService.getUsers();
    }

}
