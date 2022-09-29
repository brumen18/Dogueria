const router = require('express').Router();
const controller = require('../controllers/inicioAvatar.controller');

router.get('/inicioAvatar', controller.inicio);

module.exports=router;