import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import motoristaRouter from "./src/routers/motorista.router";
import usuariosRouter from "./src/routers/usuarios.router";
import inventarioRouter from "./src/routers/inventario.router"
import empresasRouter from "./src/routers/empresas.router"
import pedidosRouter from "./src/routers/pedidos.router"
import { Database } from "./src/utils/database";
import cors from 'cors';


dotenv.config();
const database:Database = new Database(); //Se conecta a mongo
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/motoristas', motoristaRouter);
app.use('/usuarios', usuariosRouter);
app.use('/inventario', inventarioRouter);
app.use('/empresas', empresasRouter);
app.use("/pedidos", pedidosRouter);

app.listen(port, () =>
console.log(`Servidor modificado https://localhost:${port}`));