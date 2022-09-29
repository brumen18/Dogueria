const router = require('express').Router();
const controller = require('../controllers/login.controller');

router.get('/login', controller.login);
router.post('/login', controller.loguearse);

module.exports=router;