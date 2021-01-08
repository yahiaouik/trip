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
const userDbService_1 = __importDefault(require("../Infrastructure/db_service/userDbService"));
class UserManager {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // ajouter l'utilisateur dans la table user
            const userDbService = new userDbService_1.default();
            yield userDbService.addUser(user);
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // modifier l'utilisateur dans la table user
            const userDbService = new userDbService_1.default();
            yield userDbService.updateUser(user);
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // supprimer l'utilisateur de la table user
            // supprimer les voyages relié a cet utilisateur
            const userDbService = new userDbService_1.default();
            yield userDbService.delateUser(userId);
        });
    }
    getInfoUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // recuperer info de la table utilisateur
            // recuperer liste des voyage associés
            const userDbService = new userDbService_1.default();
            const res = yield userDbService.getUser(userId);
            // tslint:disable-next-line:no-console
            console.log(res);
            return res;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // recupere toutes les utilisateurs de la table user
            const userDbService = new userDbService_1.default();
            yield userDbService.getUsers();
        });
    }
}
exports.default = UserManager;
//# sourceMappingURL=userManager.js.map