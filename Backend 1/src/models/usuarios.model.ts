import mongoose from "mongoose";

export interface usuarios{
    Nombre: string,
    foto: string,
    direccion: string,
    Number: string,
    email: string,
    password: string
}