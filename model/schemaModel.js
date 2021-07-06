'use strict';


const mongoose = require('mongoose')

const dataSchema=mongoose.Schema({

    name:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    img:String,
    level:String
})

const modelSchema=mongoose.model('digimon_pecies',dataSchema)

module.exports=modelSchema;