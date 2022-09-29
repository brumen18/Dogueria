const controller = {};
const operacion = require('../db/usuarios.db');

controller.eliminarCuenta = (req, res)=>{
    res.render('eliminarCuenta');
}

controller.borrarCuenta = (req, res)=>{
    operacion.borrar(req, res);
}


module.exports=controller;