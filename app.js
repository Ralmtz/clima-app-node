const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// argv.direccion

// lugar.getLugarLatLong(argv.direccion)
// .then(console.log);

// clima.getClima(17.379999, -93.070000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    //Salida: El clima de ${lugar} es de ${clima}
    //No se pudo determinar el clima de ${lugar}
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);