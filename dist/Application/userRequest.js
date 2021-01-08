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
const User_1 = __importDefault(require("../Models/User"));
const userManager_1 = __importDefault(require("../Core/userManager"));
const router = express_1.default.Router();
const userManager = new userManager_1.default();
// Homapage - GET Routing -
router.get('/', (req, res) => {
    res.end('HomePage');
});
// Send Message - POST Routing -
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.default(null, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    yield userManager.createUser(user);
    res.send("test ok");
}));
// liste des Messages - GET Routing -
router.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userManager.deleteUser(Number(req.params.id));
    res.send("test ok");
}));
router.patch('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.default(null, req.body.firstname, req.body.lastname, req.body.promo, req.body.email, req.body.password);
    yield userManager.updateUser(user);
    res.send("test ok");
}));
router.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userManager.getInfoUser(Number(req.params.id))
        .then((response) => {
        // tslint:disable-next-line:no-console
        // console.log(response);
    });
    res.send("test ok");
}));
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userManager.getUsers();
    res.send("test ok");
}));
exports.default = router;
//# sourceMappingURL=userRequest.js.map