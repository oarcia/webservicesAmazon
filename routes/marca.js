'use strinct'

//importamos express puta aprende muy bien esta madre 

var express = require('express')
//importamos el controllador
var marcaController = require('../controllers/marca')

//intacioamos objeto router

var api = express.Router();
//nueva variable de rutaas
//var curriencies = express.Router();
//DEFINIMOS EL RECURSP GET COPN URL: /apí/autp/:id?,recibe
//un parametro y se procesa en el metodo de prueba del controllers
//auto controller el signo de interrogacion es que puede ser requeridio o no


api.post('/marca', marcaController.saveMarca);


/*api.get('/country/', autoController.getAutos);
api.get('/country/:id?',autoController.getAuto);
api.post('/country',autoController.saveAuto);
api.put('/country/:id?',autoController.updateAuto);
api.delete('/country/:id?',autoController.deleteAuto)*/


//definimos el otro vonche de parametros


// para utilizqarlo en otros ficjheros importamos
module.exports = api;