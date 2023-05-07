import mongoose from "mongoose";
import { usuarios } from "./usuarios.model";

const schema = new mongoose.Schema<usuarios>({
    Nombre: String,
    foto: String,
    direccion: String,
    Number: String,
    email: String,
    password: String

});

export const usuariosSchema = mongoose.model('usuarios',schema);