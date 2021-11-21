//exercise #1
const bodyElement = document.body;
const arr = [];

for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    bodyElement.append(div);
    arr.push(div);
}
console.log(arr);

function blueBlocks() {
    arr.forEach(function (div) {
        div.style.background = "blue";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.margin = "10px";
    });
}
setTimeout(blueBlocks, 3000);

function greenBlocks() {
    arr.forEach(function (div) {
        div.style.background = "green";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.margin = "20px";
    });
}
setTimeout(greenBlocks, 6000);

function redYellowBlocks() {
    arr.forEach(function (div, i) {
        if ((i + 1) % 3 === 0) {
            div.style.background = "red";
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.margin = "20px";
        } else {
            div.style.background = "yellow";
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.margin = "20px";
        }
    })
}
setTimeout(redYellowBlocks, 9000);

function totalBlack() {
    arr.forEach(function (div) {
        div.remove();
    })
    bodyElement.style.background = "black";
}
setTimeout(totalBlack, 12000);

//exercise #2
// let bodyElement = document.body;

// let div = document.createElement('div');
// bodyElement.append(div);

// div.style.width = "200px";
// div.style.height = "100px";
// div.style.background = "blue";
// div.style.margin = "20px";
// div.onclick = function() {
//     alert('Цвет: голубой');
//     }
// div.onmouseover = function() {
//     console.log('Ширина: ' + div.style.width + 'Высота: ' + div.style.height);
// }

// let div2 = document.createElement('div');
// bodyElement.append(div2);

// div2.style.width = "200px";
// div2.style.height = "100px";
// div2.style.background = "yellow";
// div2.style.margin = "20px";
// div2.onclick = function() {
//     alert('Цвет: жёлтый');
//     }
//     div2.onmouseover = function() {
//         console.log('Ширина: ' + div2.style.width + 'Высота: ' + div2.style.height);
//     }





