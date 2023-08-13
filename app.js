const url = './data.json';
const content = document.querySelectorAll(".content");
const selected = document.querySelectorAll('li');

fetch(url)
    .then(response => response.json())
    .then( json => startFunction('Daily', json));

function startFunction(timeframe, data){
    workingData('daily', data);

    selected.forEach(element => {
        element.addEventListener('click', e => {
            workingData(element.innerText, data);
        })
    });
}

function workingData(timeframe, data){
    for (let i = 0; i < data.length; i++){

        let title = data[i].title;
        let current = data[i].timeframes[timeframe.toLowerCase()].current;
        let previous = data[i].timeframes[timeframe.toLowerCase()].previous;
        content[i].children[0].innerText = title;
        content[i].children[1].innerText = "...";
        content[i].children[2].innerText = current < 2 ? `${current}hr` : `${current}hrs`;
        content[i].children[3].innerText = previous < 2 ? `Previous - ${previous}hr` : `Previous - ${previous}hrs`;
    }
}

function printElements(title, list){
    for (item of content) {
        console.log(list);
    }
}
