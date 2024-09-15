const fetch = require("node-fetch");

function fetchCurrent(apiKey, locale) {

const regex = /^[1-9]*$/gi
const regexBlank = /^[\s]*$/g

   if(regex.test(locale) ){
    return Promise.reject({status:400,msg:'location must be in text format'})
  }  

  if(regexBlank.test(locale) ){
    return Promise.reject({status:400,msg:'location cannot be blank'})
  }  

  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locale}&aqi=no`
  )
    .then((result) => {
             return result.json();
    })
    .then((data) => {
       
        if(!data.location){
       
            return Promise.reject({status:404,msg:'location does not exist, please try again'})
        }
      let currentWeather = {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        last_updated: data.current.last_updated,
        celcius: data.current.temp_c,
        farenheit: data.current.temp_f,
        description: data.current.condition.text,
        icon: data.current.condition.icon,
        wind: data.current.wind_mph,
        humidity: data.current.humidity,
      };
    
      return currentWeather;
    })
    
}

module.exports = { fetchCurrent };
