import express from "express";
import { getPedido, getPedidos, postPedidos } from "../controllers/pedidos.controller";


const router = express.Router();

router.get("/", getPedidos);
router.get("/:id", getPedido );
router.post("/", postPedidos);

export default router;