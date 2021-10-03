import { dataCosmosTLE } from "./fromApi.js";
import { dataFenyunTLE } from "./fromApi.js";
import { dataIridiumTLE } from "./fromApi.js";
import { dataMicrosatTLE } from "./fromApi.js";

import { getSatelliteInfo } from "tle.js/dist/tlejs.cjs";


const dataTLE = {
    0: dataCosmosTLE,
    1: dataFenyunTLE,
    2: dataIridiumTLE,
    3: dataMicrosatTLE
};

const satellites = {
    0: "COSMOS-2251",
    1: "IRIDIUM-33",
    2: "FENGYUN-1C",
    3: "MICROSAT-R"
};

const observerLat = 0;
const observerLng = 0;

// const tle = dataTLE[0][1];

let dataCosmosJSON = [];

for (let i = 0; i < dataTLE[0].length - 916; i++) {

    dataCosmosJSON [i] = getSatelliteInfo(dataTLE[0][i], null, observerLat, observerLng, 0);
    dataCosmosJSON[i].satellite = satellites[0];
    delete dataCosmosJSON[i].elevation;
    delete dataCosmosJSON[i].azimuth;
    delete dataCosmosJSON[i].range;
    delete dataCosmosJSON[i].velocity;
    
}
    

console.log(dataTLE[0].length);
console.log(dataCosmosJSON);
console.log(dataCosmosJSON.length);


// const derbisInfo = getSatelliteInfo(tle, null, observerLat, observerLng, 0);
// derbisInfo.satellite = satellites[1];
// delete derbisInfo.elevation;
// delete derbisInfo.azimuth;
// delete derbisInfo.range;
// delete derbisInfo.velocity;

// console.log(derbisInfo);