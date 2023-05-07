import { Request, Response } from "express";
import { inventarioSchema } from "../models/inventraio.schema";

export const getInventario = (req: Request, res: Response) =>{
    inventarioSchema.find()
    .then((result) => {
        res.send({message: 'inventario',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
}