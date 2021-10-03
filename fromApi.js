import { request } from 'undici'

const cosmos = 'https://celestrak.com/NORAD/elements/2019-006.txt';
const {
  body
} = await request(cosmos);

const debris = await body.text();

console.log(debris);