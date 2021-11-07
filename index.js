const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// before using route (includes ejs views) configure layouts
app.use(expressLayouts);

// extract style and script from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// define assets
app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function (err) {
    if(err){
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is runnung at port: ${port}`);
});