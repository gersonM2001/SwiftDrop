"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpresas = void 0;
const empresa_schema_1 = require("../models/empresa.schema");
const getEmpresas = (req, res) => {
    empresa_schema_1.empresasSchema.find()
        .then((result) => {
        res.send({ message: 'empresas', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getEmpresas = getEmpresas;
