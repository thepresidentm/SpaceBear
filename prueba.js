import { GetData } from "./fromApi.js";

const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';
const iridium = 'https://celestrak.com/NORAD/elements/iridium-33-debris.txt';
const fenyun = 'https://celestrak.com/NORAD/elements/1999-025.txt';
const microsat = 'https://celestrak.com/NORAD/elements/2019-006.txt';

const satellites = {
    1: "COSMOS-2251",
    2: "IRIDIUM-33",
    3: "FENGYUN-1C",
    4: "MICROSAT-R"
};

export const dataCosmosTLE = await GetData(cosmos);
export const dataIridiumTLE = await GetData(iridium);
export const dataFenyunTLE = await GetData(fenyun);
export const dataMicrosatTLE = await GetData(microsat);


console.log(dataCosmosTLE[2]);
console.log(dataIridiumTLE[3]);
console.log(dataFenyunTLE[2]);
console.log(dataMicrosatTLE[4]);