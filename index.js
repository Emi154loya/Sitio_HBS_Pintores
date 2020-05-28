// Importamos la libreria express
const express = require('express');
//generar un objeto con express
const app = express();
//vamos a especificar un deirectorio publico
app.use(express.static(__dirname + '/public'));
//vamos a arrancar el servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});