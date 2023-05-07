import express from "express";
import { getMotoristas } from "../controllers/motorista.controller";

const router = express.Router();

router.get("/", getMotoristas);

export default router;