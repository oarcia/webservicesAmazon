//importamos body-parse y express
var bodyParser = require('body-parser')
var express = require('express')

// declaramos la variable app como instancia de express
var app = express()

//importamos las rutas del recurso para autos
var auto = require('./routes/auto')

var country = require('./routes/country')

var currency = require('./routes/currency')

var marca = require('./routes/marca')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allo-Headers', 'X-API-KEY,Origin,X-Requested-With');
    res.header('Access-Control-Allow-Methods','GET,POS,PUT,DELETE');
    res.header('Allow','Get,POST,PUT,DELETE')
    next()
})
//url de la api
app.use('/api',auto),
app.use('/api', country),
app.use('/api', currency),
app.use('/api',marca);


//app.use('/api',country);

//para utilizarlo ebn otyros ficheros e importar
module.exports = app;
