const express= require('express');
const mongoose= require('mongoose');


const url = 'mongodb://localhost/test';

const app = express();
const mst = require('./routes/master')
app.use(express.json())
app.use('/masrtpg',mst);


mongoose.connect(url)
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })


  app.listen(3200,()=>{
    console.log('listening');
  });

