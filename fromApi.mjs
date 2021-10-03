import { request } from 'undici'

const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';

export async function GetData(url){
    
    const {
    body
    } = await request(url);

    const debris = await body.text();
    const lines = debris.split(/\r\n|\r|\n/).length;

    const myArr = debris.split('\n');

    let debrisTLE = [];
    for (let i = 0; i < lines; i+=3) {
        debrisTLE[i] = `${myArr[i]}\n${myArr[i+1]}\n${myArr[i+2]}`;
    }

    const debrisTLE_Filtered = debrisTLE.filter(el => {
        return el != null;
    });

    return debrisTLE_Filtered;
};

//console.log(GetData(cosmos));

GetData(cosmos).then(val => console.log(val))