const domino = document.querySelector('.domino');
const btn = document.querySelector('#roll')
const listes = document.querySelector('.listes');

let timer = null;
let resultRoll;

let arrayRoll;
if(localStorage.getItem('item')) {
    arrayRoll = JSON.parse(localStorage.getItem('item'))
} else {
    arrayRoll = [];
}

if(localStorage.getItem('switch')) {
    domino.innerHTML = localStorage.getItem('switch');
}

btn.addEventListener('click', () => {
    domino.classList.add('animate_domino')
    timer = setTimeout(() => {
        domino.classList.remove('animate_domino')
    }, 1000)

    getRull()
})

function getRull() {
    let randomRoll = Math.floor(Math.random() * 6) +1
    // console.log(randomRoll);
    resultRoll = switchRoll(randomRoll)
    localStorage.setItem('switch', resultRoll);
    // console.log(resultRoll);
    domino.innerHTML = resultRoll;
    arrayRoll.push(resultRoll);
    localStorage.setItem('item', JSON.stringify(arrayRoll));
    // console.log(arrayRoll);
    getItem(arrayRoll)
}

function switchRoll(roll) {
    switch(roll) {
        case 1:
           return "&#9856;";
        case 2:
           return "&#9857;";
        case 3:
           return "&#9858;";
        case 4:
           return "&#9859;";
        case 5:
           return "&#9860;";
        case 6:
           return "&#9861;";
        default:
            return "&#9856;";
    }
}

function getItem(arrayRoll) {
    let items = "";
    for(let i = 0; i < arrayRoll.length; i++) {
        items += `<li class="item">Roll ${i+1} : <span class="rolling">${arrayRoll[i]}</span></li>`
    }

    // console.log(items);
    listes.innerHTML = items;
}

getItem(arrayRoll);
