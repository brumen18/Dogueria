const router = require ('express').Router();
const controller = require('../controllers/bienvenido.controller');

router.get('/bienvenido', controller.bienvenido);
module.exports = router;