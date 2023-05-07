import mongoose from "mongoose";

export interface motorista{
    id: string,
    nombre :string,
    foto :string,
    placaVehicular :string,
    numero :string,
    email: string,
    password: string
}