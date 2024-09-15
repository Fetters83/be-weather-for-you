const { fetchCurrent } = require('../models/fetchCurrent.models');
require('dotenv').config();
const apiKey = process.env.API_KEY;

function getCurrent(req, res, next) {
    const { locale } = req.params;
    
    fetchCurrent(apiKey, locale)  // Pass both apiKey and locale
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
           next(err)
           
        });
}

module.exports = { getCurrent };

