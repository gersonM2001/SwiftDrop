import mongoose  from "mongoose";
import { empresas } from "./empresas.model";



const schema = new mongoose.Schema<empresas>({
    nombre: String,
    direccion: String,
    icono: String
})

export const empresasSchema = mongoose.model('empresas',schema);