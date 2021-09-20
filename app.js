const fs = require('fs');
const moment = require('moment');
const nameJson = 'teste.json';

let data = fs.readFileSync(__dirname + '/data.json', 'utf8');
// console.log(data);

let newJson = [
    {
        sample: "teste",
        number: 10
    },
    {
        sample: "teste 2",
        number: 20
    }
];

let newItem = {
    sample: "teste 2",
    number: 20
}

createJsonFile(newJson);
appendNewItemJsonFile(newItem, nameJson);

function createJsonFile(arq) {
    let textJson = JSON.stringify(arq);
    fs.writeFileSync(nameJson, textJson, 'utf8')
    console.log(`Arquivo ${nameJson} criado`);
}

function appendNewItemJsonFile(item, json) {
    let data = fs.readFileSync(json, 'utf8');
    let obj = JSON.parse(data);
    obj.push(item);
    createJsonFile(obj)
}

function viewMoment() {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // September 19th 2021, 10:36:29 pm
    console.log(moment().format('dddd'));                    // Sunday
    console.log(moment().format("MMM Do YY"));               // Sep 19th 21
    console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021
    console.log(moment().format());                         
}



