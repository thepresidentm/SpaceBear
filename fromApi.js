const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';

fetch(cosmos)
    .then((resp) => resp.text())
    .catch((e) => console.log(e));