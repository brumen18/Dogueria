const router = require('express').Router();
const controller = require('../controllers/faq.controller');

router.get('/faq', controller.faq);

module.exports=router;