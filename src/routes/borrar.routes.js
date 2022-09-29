const router = require('express').Router();
const controller = require('../controllers/borrar.controller');

router.get('/eliminar', controller.eliminarCuenta);
router.post('/eliminar', controller.borrarCuenta);

module.exports=router;