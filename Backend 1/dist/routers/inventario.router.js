"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventario_controller_1 = require("../controllers/inventario.controller");
const router = express_1.default.Router();
router.get("/", inventario_controller_1.getInventario);
exports.default = router;
