const express = require('express');
const app = express();
const path = require('path');

app.set('port',3000);
app.set('view engine','ejs'); 
app.set('views',path.resolve('src/views'));

app.use(express.static(path.resolve('src/public')));
app.use(require('./routes/index')); 
app.use('/directorio', require('./routes/directorio'));

app.listen(app.get('port'),() =>{
    console.log("El servidor esta funcionando!");
})