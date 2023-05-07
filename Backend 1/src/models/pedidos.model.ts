import mongoose from "mongoose";

export interface pedidos
    {
        "id": String,
        "nombre":String,
        "portada": String,
        "precio": String,
        "cantidad":String
    }