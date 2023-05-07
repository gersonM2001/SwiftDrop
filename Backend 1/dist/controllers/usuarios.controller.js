"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsuarios = exports.getUsuarios = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const getUsuarios = (req, res) => {
    usuarios_schema_1.usuariosSchema.find()
        .then((result) => {
        res.send({ message: 'motoristas', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getUsuarios = getUsuarios;
const postUsuarios = (req, res) => {
    usuarios_schema_1.usuariosSchema.find()
        .then((result) => {
        res.send({ message: 'motoristas', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.postUsuarios = postUsuarios;
