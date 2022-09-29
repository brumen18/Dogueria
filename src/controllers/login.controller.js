const controller = {};
const operacion = require('../db/usuarios.db');

controller.login = (req, res) =>{
    res.render('login');
}

controller.loguearse =  (req, res)=>{
    operacion.iniciarSesion(req, res);
}

module.exports=controller;