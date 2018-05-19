'use strict'

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Modelo = require('./Modelo')
//reprenta el tipo de documentoas de la bd

var MarcaSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            default:'',
            required: 'Inserta un nombre de la marca por favor',
            index:{
                unique:true
            }
        },
        pais: {
            type: String,
            trim:true,
            default: '',
            required:'Inserta un pais de la marca por favor',
            index:{
                unique: false
            }

        },
        fechaCreacion:{
            type:Date,
            trim:true,
            default:'',
            required:'Inserta una fecha de creacion',
            index:{
                unique:false
            }
        },
        modelos: [Modelo.schema]
    },
    {
        timestamps:true
    }
);
var marca = mongoose.model('Marca',MarcaSchema);
module.exports = marca;