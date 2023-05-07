import { Request, Response } from "express";
import {motoristaSchema} from "../models/motorista.schema";
import mongoose, {ObjectId}  from "mongoose";

//obtener los motoristas
export const getMotoristas = (req: Request, res: Response) =>{
    motoristaSchema.find()
    .then((result) => {
        res.send({message: 'motoristas',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
}