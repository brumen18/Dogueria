const controller = {};
const operacion = require('../db/usuarios.db');

controller.editar = (req, res)=>{
    res.render('editar');
}

controller.cambiarPassword = (req, res)=>{
    operacion.actualizar(req, res);
}


module.exports = controller;