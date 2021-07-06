'use strict';

const digimonModel=require('../model/schemaModel');

const createNewItems=async(req,res)=>{
const{
    name,
    img,
    level
}=req.body
digimonModel.find({name:name},(error,data)=>{

    if (data.length>0){
        res.send("we have it")
    }else{
        const newdigimonModel=new digimonModel({
            name:name,
            img:img,
            level:level
        })
        newdigimonModel.save();
        res.send('done')
    }
})
}

const getNewItems=async(req,res)=>{
    digimonModel.find({},(error,data)=>{
        res.send(data)
    })
}

const deleteNewItems=async(req,res)=>{
    const name=req.params.name;
    digimonModel.deleteOne({name:name},(error,data)=>{
        if(error){
            res.send(error)
        }else{
            digimonModel.find({},(error,data)=>{
                res.send(data)
            })
        }
    })
}

const updateNewItems=async(req,res)=>{
    const name=req.params.name;
    const{level}=req.body;
    digimonModel.findOne({name:name},(error,data)=>{
        if (error){
            res.send(error)
        }else{
            data.level=level,
            data.save().then(()=>{
                digimonModel.find({},(error,data)=>{
                    res.send(data)
                }) 
            })
        }
    })
}


module.exports={
    createNewItems,
    getNewItems,
    deleteNewItems,
    updateNewItems
}