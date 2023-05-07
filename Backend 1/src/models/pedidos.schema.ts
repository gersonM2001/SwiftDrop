import mongoose from "mongoose";
import { pedidos } from "./pedidos.model";

const schema = new mongoose.Schema<pedidos>(
    {
        "id": String,
        "nombre":String,
        "portada": String,
        "precio": String,
        "cantidad":String
    }
);


export const pedidosSchema = mongoose.model('pedidos',schema);