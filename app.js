//import { GetData } from "./fromApi.js";

const { getSatelliteInfo } = require("tle.js/dist/tlejs.cjs");

const satellites = {
    1: "COSMOS-2251",
    2: "IRIDIUM-33",
    3: "FENGYUN-1C",
    4: "MICROSAT-R"
};

const tle = `COSMOS 2251 DEB         
1 33757U 93036E   21275.09768344  .00000015  00000-0  15253-4 0  9990
2 33757  74.0356 240.0933 0016156 269.2517 170.7959 14.32058555660530`;

const observerLat = 0;
const observerLng = 0;

const derbisInfo = getSatelliteInfo(tle, null, observerLat, observerLng, 0);
derbisInfo.satellite = satellites[1];
delete derbisInfo.elevation;
delete derbisInfo.azimuth;
delete derbisInfo.range;
delete derbisInfo.velocity;

console.log(derbisInfo);

/*
const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';
GetData(cosmos).then(console.log(cosmos[0]));
*/