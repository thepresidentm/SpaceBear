import { request } from 'undici'

const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';
const {
  body
} = await request(cosmos);

const debris = await body.text();

console.log(debris);