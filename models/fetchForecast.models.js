const fetch = require("node-fetch");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function fetchForecast(apiKey,locale){

const regex = /^[1-9]*$/gi
const regexBlank = /^[\s]*$/g

   if(regex.test(locale) ){
    return Promise.reject({status:400,msg:'location must be in text format'})
  }  

  if(regexBlank.test(locale) ){
    return Promise.reject({status:400,msg:'location cannot be blank'})
  }  

return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locale}&days=3&aqi=no&alerts=no`).then((result)=>{
    return result.json()
}).then((data)=>{

    if(!data.forecast){
       
        return Promise.reject({status:404,msg:'location does not exist, please try again'})
    }
    let newForecastArray=[];
    for(let i = 0; i<3; i++){
        let newInnerForecastArray = [];
        const dateStr =  new Date(data.forecast.forecastday[i].date);
        const day = weekday[dateStr.getDay()];
        newInnerForecastArray.push(data.forecast.forecastday[i].date)
        newInnerForecastArray.push(day)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.maxtemp_c)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.maxtemp_f)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.mintemp_c)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.mintemp_f)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.condition.text)
        newInnerForecastArray.push(data.forecast.forecastday[i].day.condition.icon)
        newForecastArray.push(newInnerForecastArray)
    }
    const forecast = {
        name:data.location.name,
        region:data.location.region,
        country:data.location.country,
        forecast:newForecastArray
        } 

    return forecast
})

}

module.exports = {fetchForecast}