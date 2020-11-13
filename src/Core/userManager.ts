import User from "../Models/User";

export default class UserManager {

    createUser (user : User){
        // ajouter l'utilisateur dans la table user
    }

    updateUser (user : User){

        // modifier l'utilisateur dans la table user
    }

    deleteUser (user : User){
        // supprimer l'utilisateur de la table user
        // supprimer les voyages relié a cet utilisateur
    }

    getInfoUser (user : User){
        // recuperer info de la table utilisateur
        // recuperer liste des voyage associés
    }

    getUsers (){
        // recupere toutes les utilisateurs de la table user
    }

}
