import express from "express";

import { getInventario } from "../controllers/inventario.controller";

const router = express.Router();

router.get("/", getInventario);

export default router;