"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Homapage - GET Routing -
router.get('/trip', (req, res) => {
    // console.log(req.app.test);
    res.end('HomePage');
});
exports.default = router;
//# sourceMappingURL=tripRequest.js.map