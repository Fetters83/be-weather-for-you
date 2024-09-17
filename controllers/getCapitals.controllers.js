const { fetchCurrent } = require("../models/fetchCurrent.models");
require('dotenv').config();
const apiKey = process.env.API_KEY;
const capitals = ['London','Tokyo','Taipei','Freetown','Washington','Canberra']


function getCapitals(req,res,next){

    const capitalPromises = capitals.map((locale)=>fetchCurrent(apiKey,locale))

    Promise.all(capitalPromises).then((capitalsConditions)=>{
        res.status(200).send({capitalsConditions})
    }).catch((error)=>{
        next(error)
    })
   
}

module.exports = {getCapitals}