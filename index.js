// Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

//Generamos los partials
hbs.registerPartials(__dirname + '/views/partials');

//vamos a especificar un deirectorio publico para el sitio estatico
app.use(express.static(__dirname + '/public'));


//configurar mis rutas:
        //Raiz
app.get('/', (req, res)=>{
    res.render('index', {
        nombre : 'Emiliano Loya Flores 4°E',
        year : new Date().getFullYear(),
        title : 'Inicio',
        header : 'PINTORES'
    });
});
        //Vincent
app.get('/vincent', (req, res)=>{
    res.render('vincent', {
        nombre : 'Emiliano Loya Flores 4°E',
        year : new Date().getFullYear(),
        title : 'Vincent van Gogh',
        header : 'VINCENT VAN GOGH'
    });
});
        //Dali
app.get('/davinci', (req, res)=>{
    res.render('davinci', {
        nombre : 'Emiliano Loya Flores 4°E',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci',
        header : 'LEONARDO DA VINCI'
    });
});

app.get('/claude', (req, res)=>{
    res.render('claude', {
        nombre : 'Emiliano Loya Flores 4°E',
        year : new Date().getFullYear(),
        title : 'Claude Monet',
        header : 'CLAUDE MONET'
    });
});

app.get('/john', (req, res)=>{
    res.render('john', {
        nombre : 'Emiliano Loya Flores 4°E',
        year : new Date().getFullYear(),
        title : 'John William Waterhouse',
        header : 'JOHN WILLIAM WATERHOUSE'
    });
});



//vamos a arrancar el servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});