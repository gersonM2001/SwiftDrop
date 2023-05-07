import { Request, Response } from "express";
import { pedidosSchema } from "../models/pedidos.schema";

//obtener todos los pedidos
export const getPedidos = (req: Request, res: Response) =>{
    pedidosSchema.find()
    .then((result) => {
        res.send({message: 'inventario',result});
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
});
};

//obtener un pedido
export const getPedido = (req: Request, res: Response) => {
    pedidosSchema.findById({_id:req.params.id}).then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
};

//Crear un pedido
export const postPedidos = (req: Request,res: Response) =>{
    const u = new pedidosSchema(
        {
            id: req.body.id,
            nombre:req.body.nombre,
            portada: req.body.portada,
            precio: req.body.precio,
            cantidad: req.body.precio
        
        });
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
};

