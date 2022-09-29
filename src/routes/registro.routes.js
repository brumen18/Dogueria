const router = require('express').Router();
const controller = require('../controllers/registro.controller');

router.get('/registro', controller.registro);
router.post('/registro', controller.registrarUsuario);

module.exports=router;