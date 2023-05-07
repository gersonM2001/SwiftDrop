import mongoose  from "mongoose";
import { motorista } from "./motoristaC.model";

const schema = new mongoose.Schema<motorista>({
    id: String,
    nombre :String,
    foto :String,
    placaVehicular :String,
    numero :String,
    email: String,
    password: String
})

export const motoristaSchema = mongoose.model('motoristas',schema);
