const axios = require('axios');


const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7a45763d128ac4ec83ce15b9b8e1fcba&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}