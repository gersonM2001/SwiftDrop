import express from "express";

import { getEmpresas } from "../controllers/empresas.controller";

const router = express.Router();

router.get("/", getEmpresas);

export default router;