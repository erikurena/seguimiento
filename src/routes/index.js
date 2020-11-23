const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res) => {
  //  res.sendFile(path.resolve('src/views/hola.html'));
  res.render('pagina');
}); 

router.get('/otra',(req,res) => {
    res.render('vacio');
}); 

router.get('/dos',(req,res) => {
    res.send('Esta es la segunda solicitud de /');
});

module.exports = router;