const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '448f600146mshc4f78411e8a4391p167c51jsn6756e6c8386b' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    //API Open Weather 7a45763d128ac4ec83ce15b9b8e1fcba
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}