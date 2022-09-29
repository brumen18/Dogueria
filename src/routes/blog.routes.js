const router = require('express').Router();
const controller = require('../controllers/blog.controller');

router.get('/blog', controller.blog);

module.exports=router;