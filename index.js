const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passport = require('passport');
const passportSetup = require('./config/passport-setup')

const app = express();
app.use(passport.initialize());

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth',authRoutes);

// create home route
app.get('/', (req, res)=>{
    res.render('home');
});

// listen to requests
app.listen(3000, ()=> {
    console.log('app now listening for requests on port 3000');
});