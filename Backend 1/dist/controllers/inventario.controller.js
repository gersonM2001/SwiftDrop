"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInventario = void 0;
const inventraio_schema_1 = require("../models/inventraio.schema");
const getInventario = (req, res) => {
    inventraio_schema_1.inventarioSchema.find()
        .then((result) => {
        res.send({ message: 'inventario', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getInventario = getInventario;
