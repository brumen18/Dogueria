const mongo = require('mongoose');
const operaciones = {};
const url = 'mongodb://localhost:27017/dogueria';

//definimos las operaciones que se van a realizar para los usuarios.

const esquema = new mongo.Schema({
    usuario: String,
    password: String,
    rol: String,
    descripcion: String,
    tipo: String
});
const cuentas = new mongo.model('cuentas', esquema);
operaciones.iniciarSesion =  (req, res) =>{
    try{
         mongo.connect(url);
        const resultado = cuentas.find({usuario: req.body.username});
console.log(resultado);       
        if (resultado != undefined){
            const usuario = req.body.username;
            const passw = req.body.password;
            req.session.usuario = usuario;
            res.redirect('/inicioAvatar')
        }else{
            res.render('login', {
                message: 'Usuario o contraseña no válidos. Inténtelo otra vez.'
            })
        }
    }catch(err){
        console.log(err);
        res.render('login', {
            message: 'Ocurrió un error.'
        })
    }

}

operaciones.registrarse =  (req, res) =>{
         mongo.connect(url);
const nuevousuario = new cuentas({
    usuario: req.body.username,
    password: req.body.password,
    rol: req.body.rol,
    descripcion: req.body.descripcion,
    tipo: req.body.tipo
});
 nuevousuario.save();
res.render('registro', {
    message: 'Usuario creado con exito'
})
    }

operaciones.actualizar =  (req, res)=>{
    try{
        mongo.connect(url);
        const actualiza = cuentas.update({usuario: req.body.username}, {password: req.body.password2})
        res.render('editar', {
            message: 'Contraseña cambiada exitosamente.'
        })
    }catch(err){
        console.log(err);
    }
}

operaciones.borrar=(req, res) =>{
         mongo.connect(url);
         const resultado = cuentas.find({usuario: req.body.username, password: req.body.password});
    if (resultado != undefined) {
        const borrarcuenta = cuentas.deleteOne({usuario: req.body.username});
        res.render('eliminarCuenta', {
            message: 'Tu cuenta se ha borrado con éxito. ¡Esperamos que algún día vuelvas a visitarnos!'
        })
    }

}
module.exports=operaciones;