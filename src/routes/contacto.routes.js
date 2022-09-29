const router = require('express').Router();
const controller = require('../controllers/contacto.controller');

router.get('/contacto', controller.contacto);
router.post('/contacto', controller.guardarDatos);

module.exports=router;