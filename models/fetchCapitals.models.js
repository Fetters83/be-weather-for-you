const fetch = require("node-fetch");
const { fetchCurrent } = require("./fetchCurrent.models");
const capitals = ['London','Tokyo','Taipei','Freetown','Washington','Canberra']

function fetchCapitals(apiKey){

    let capitalsConditions = []
    for(let i=0;i<capitals.length;i++){
    let locale = capitals[i]
    fetchCurrent(apiKey,locale).then((result)=>{
        capitalsConditions.push(result)
    })
   
    }
    console.log(capitalsConditions)
    return capitalsConditions

}

module.exports = {fetchCapitals}