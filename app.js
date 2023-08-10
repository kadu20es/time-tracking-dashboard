const url = './data.json';
console.log(url);

fetch(url)
    .then(response => response.json())
    .then( json => console.log(json));