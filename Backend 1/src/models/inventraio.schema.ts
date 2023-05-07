import mongoose  from "mongoose";
import { inventario } from "./inventario.model";


const schema = new mongoose.Schema<inventario>({
    id: Number,
    nombre: String,
    imagen: String,
    precio: Number
})

export const inventarioSchema = mongoose.model('inventario',schema);