import { Request, Response } from "express";
import { usuariosSchema } from "../models/usuarios.schema";

export const getUsuarios = (req: Request, res: Response) =>{
    usuariosSchema.find()
    .then((result) => {
        res.send({message: 'motoristas',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
}

export const postUsuarios = (req: Request, res: Response) =>{
    usuariosSchema.find()
    .then((result) => {
        res.send({message: 'motoristas',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
}