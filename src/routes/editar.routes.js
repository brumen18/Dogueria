const router = require('express').Router();
const controller = require('../controllers/editar.controller');
router.get('/editar', controller.editar);
router.post('/editar', controller.cambiarPassword)

module.exports=router;