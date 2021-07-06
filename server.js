'use strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const dataDigimon = require('./controllers/digimonController')
const crudDATA=require('./controllers/digimonCrudController')



app.use(express.json());


app.use(cors()) // after you initialize your express app instance

app.get('/digimon', dataDigimon.getDataDigimon)
// a server endpoint 
app.post('/digimon/favorite',crudDATA.createNewItems)
app.get('/digimon/favorite',crudDATA.getNewItems)
app.delete('/digimon/favorite/:name',crudDATA.deleteNewItems)
app.put('/digimon/favorite/:name',crudDATA.updateNewItems)

app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('hello ahmad') // our endpoint function response
    })

app.listen(PORT) // kick start the express server to work