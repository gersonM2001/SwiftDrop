import { Request, Response } from "express";
import { empresasSchema } from "../models/empresa.schema";


export const getEmpresas = (req: Request, res: Response) =>{
    empresasSchema.find()
    .then((result) => {
        res.send({message: 'empresas',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
}