const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');
const { dirname } = require('path');
require('dotenv').config();

app.set('port', 3000);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });
app.use(express.static('../public'));
app.use(require('./routes/index.routes'));
app.use(require('./routes/bienvenido.routes'));
app.use(require('./routes/blog.routes'));
app.use(require('./routes/contacto.routes'));
app.use(require('./routes/faq.routes'));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
      saveUninitialized: false,
  }));
  


  secured = (req,res,next) =>{
        try{
          if (req.session.usuario){
            next();
          }else{
            res.redirect('/login');
          }
        }catch(error){
          console.log(error);
        }
      }


app.use(require('./routes/login.routes'));
app.use(require('./routes/registro.routes'));
app.use(require('./routes/editar.routes'), secured);
app.use(require('./routes/borrar.routes'), secured);
app.use(require('./routes/inicioAvatar.routes'), secured);
app.listen(3000, ()=> console.log("Servidor funcionando en el puerto 3000."));