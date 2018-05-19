'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Auto = require('../models/auto')
//importamos express puta aprende muy bien esta madre 

//definimos que nuestro esquema se podrallamar auto


//definimos el metodo a ser condsumido
// desde el archivo de rutas
function prueba(req, res) {
    if (req.params.id) {
        var id = req.params.id

    } else {
        var id = "SIN ID DEFINIDO"
    }
    res.status(200).send(
        {
            message: "este es el id " + id
        }
    )
}

function getAuto(req, res) {
    var autoId = req.params.id;
    res.status(200).send({ data: autoId })
}

function getAutos(req, res) {
    console.log("Entre")
    res.status(200).send({ metodo: "getAutos" })
}

function saveAuto(req, res) {
    var params = req.body;
    res.status(200).send({ metodo: "updateAuto", auto: params })
}

function updateAuto(req, res) {
    var params = req.body;
    res.status(200).send({ metodo: "updateAuto", auto: params })
}

function deleteAuto(req, res) {
    var params = req.body;
    res.status(200).send({ metodo: "deleteAuto", auto: params })
}

function saveAuto(req, res) {
    //definimos el objeto que se guarda como duocumento en mongo db
    var auto = new Auto(req.body);

    auto.save(function (err, autoSaved) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'error al guardar el auto.', error: err });
        } else {
            res.status(200).send({ saved: autoSaved })
        }
    });
}

function getAutos(req, res) {
    //para ordebar demanera descendente agrega anio
    Auto.find({}).sort('anio').exec(function (err, autos) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Error al obtener los autos.', error: err });
        } else {
            res.status(200).send({ autos })
        }
    });
}

function getAuto(req, res) {
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        res.status(409).send({ message: 'Id Invalido.' });
        // si no es valido mostramos un mensaje de id invalido
    } else {
        Auto.findById(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                //res.status(404).send({ message: 'No existe el auto con el id proporcionado' });
                res.status(500).send({
                    message: 'Error interno del sistema'})
            } else {
                if(!auto){
                    res.status(404).send({
                        message: 'Auto not found'
                    })
                }else{
                    res.status(200).send({data:auto})
                }
            }
        });
    }
}

function updateAuto(req, res) {
    //obtenemos el id que llega como parametro
    var autoId = req.params.id;
    //verificamos siu el parametro enviado es un objectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        res.status(409).send({ message: 'id invalido.' });
    } else {
        Auto.findByIdAndUpdate(autoId, req.body, { new: true }, function (err, autoUpdate) {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: 'Error interno del sistema'
                })
            } else {
                if(!autoUpdate){
                    res.status(404).send({ message: 'No Exites el auto con el id proporcionado' });
                }else{
                    res.status(200).send({ data: updateAuto })
                }
                //res.status(200).send({ data: autoUpdate })
            }
        });
    }
}

function deleteAuto(req, res) {
    //obtenemos el id quye llega como parametro
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un objectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        // si no es  valido mostramos es un mensaje de id invalido
        res.status(409).send({ message: 'id invalido.' });
    } else {

        Auto.findByIdAndRemove(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'error al obtener el auto.', error: err });
            } else {
                if(!auto){
                    res.status(404).send({message:'Auto no Found'});
                }else{
                    res.status(200).send({data:updateAuto,message:'Auto eliminado correctamente'})
                }
            }
        })
    }
}
//function deleteAuto(req, res){
//obtenemos el id que llega como parametro
//  var autoId
//}
module.exports = {
    prueba,
    getAuto,
    getAutos,
    saveAuto,
    updateAuto,
    deleteAuto

}