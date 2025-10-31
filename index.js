const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute=require('./routes/post');
app.use('/servicios', postRoute);

mongoose.connect ('mongodb+srv://gomeyedu_db_user:ejemplo123@cluster0.tgnqwqg.mongodb.net/prueba2?retryWrites=true&w=majority&appName=Cluster0',
{
    


});

const connection = mongoose.connection // Creo una conexion a la base de datos.
connection.once('open', () => {

    console.log('Mongodb conectado');
    
});
app.listen(10000);// Puerto por donde escucha el servidor.