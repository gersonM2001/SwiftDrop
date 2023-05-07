"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMotoristas = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
//obtener los motoristas
const getMotoristas = (req, res) => {
    motorista_schema_1.motoristaSchema.find()
        .then((result) => {
        res.send({ message: 'motoristas', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getMotoristas = getMotoristas;
