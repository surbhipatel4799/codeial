const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
    if(err){
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is runnung at port: ${port}`);
});