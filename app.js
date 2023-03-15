const express = require('express');
const path = require('path');
const app = express();
const errorController = require('./controller/error')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//serving static files 
app.use(express.static(path.join(__dirname, 'public')));
//setting the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//adding the routes

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
 app.use('/admin',adminRoutes);
app.use(shopRoutes);
//error 404 handler
app.use(errorController.get404);
app.listen(4300, () => {console.log("listening on port 4300")});