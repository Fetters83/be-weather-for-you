const express = require('express')
const cors = require('cors');
const { getCurrent, getCurrent2 } = require('./controllers/getCurrent.controllers');



const app = express();
app.use(express.json())
app.use(cors())

app.get('/api/current/:locale',getCurrent) 

//Error handling middleware

app.use((err,req,res,next)=>{
    if(err.status && err.msg){
         res.status(err.status).send({msg:err.msg})
        }
        next(err)
    })

app.all('*',(req,res)=>{
    res.status(404).send({msg:'url not valid'})
})

module.exports = app;

