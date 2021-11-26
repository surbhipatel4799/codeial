const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

// MiddleWare

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

// before using route (includes ejs views) configure layouts
app.use(expressLayouts);

// for getting post data
app.use(express.urlencoded());

// setting up cookie parser
app.use(cookieParser())

// extract style and script from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// define assets
app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views','./views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/codeial_development',
        autoRemove: 'disabled'
    }, function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
    if(err){
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is runnung at port: ${port}`);
});