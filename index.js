const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://172.16.10.92/info_schema';

const app = express();
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

const infoRouter = require('./routes/name');
//for all the name request, send request to infoRouter
app.use('/name', infoRouter);

app.use(express.json());

con.on('open', function(){
     console.log('db connected');
})
app.listen(7499,() =>{ 
console.log('server on 7499')})
