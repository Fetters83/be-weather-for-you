const { fetchCurrent } = require('../models/fetchCurrent.models');
const { fetchForecast } = require('../models/fetchForecast.models');
require('dotenv').config();
const apiKey = process.env.API_KEY;

function getForecast(req,res,next){
    const { locale } = req.params;
    fetchForecast(apiKey,locale).then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        next(err)
    })
}

module.exports = {getForecast}