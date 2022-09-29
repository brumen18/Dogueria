const controller = {};
const mongo = require('mongoose');
const url = 'mongodb://localhost:27017/dogueria';


controller.contacto = (req, res) =>{
    res.render('contacto');
}


controller.guardarDatos = async (req, res)=>{
    try{
await mongo.connect(url);
const esquema = new mongo.Schema({
nombre: String,
correo: String,
mensaje: String
});
const peticiones = mongo.model('peticiones', esquema);
const peticion = new peticiones({
    name: req.body.nombre,
    correo: req.body.correo,
    mensaje: req.body.mensaje
});
await peticion.save();
res.render('contacto',{
    message: 'Su mensaje se envió correctamente.'
})

    } catch(err){
        console.log(err);
        res.render('contacto', {
            message: 'Ocurrió un error.'
        })
    }

}
module.exports=controller;