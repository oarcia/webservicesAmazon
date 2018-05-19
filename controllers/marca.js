'use strict'

var Marca = require('../models/marca')
var mongoose = require('mongoose')

function saveMarca(req,res){
    var marca = new Marca(req.body);

    //creamos la fecha
    var parts = req.body.fechaCreacion.split('-');
    marca.fechaCreacion = new Date(parts[0], parts[1]-1,parts[2])

    marca.save(function(err, marcaSaved){
        if(err){
            console.log(err)
            res.status(500).send({ message: 'Error al guardar la marca',error:err});

        } else {
            res.status(200).send({saved: marcaSaved})
        }
    });
};

module.exports={
    saveMarca
}