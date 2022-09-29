const controller = {};
const operacion = require('../db/usuarios.db');


controller.registro= (req, res)=>{
    res.render('registro');
}

controller.registrarUsuario=(req, res)=>{
    operacion.registrarse(req, res);
}

module.exports=controller;