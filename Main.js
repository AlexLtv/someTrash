// var boxes = document.getElementsByTagName("div");
// var boxes = document.getElementsByClassName("box");
// var box = document.getElementById("box1");
// console.log(box2.className);

// var boxes = document.querySelectorAll('div.box');
// var box = document.querySelector('div.box');
// console.log(box);

// box1.innerText = 'sdfsdfsfsfsdf';

// function clickHandler() {
//     alert('clickHandler');
// }



// box3.onclick = function () {
//     alert('111111');
// }
// box3.onclick = function () {
//     alert('222222');
// }


// box3.addEventListener('click', function () {
//     alert('!!!!!!!!!');
// })
// box3.addEventListener('click', function () {
//     alert('dddddd');
// })


var circ = document.querySelector('input.choise-cir');
var squ = document.querySelector('input.choise-squ');
var rec = document.querySelector('input.choise-rec');
var ell = document.querySelector('input.choise-ell');
var fig;
var q;
var s;


function checkStatus() {
    if (circ.checked) {
        q = +prompt("Diametr", "30");
        fig = 'circle';
    } else if (squ.checked) {
        q = +prompt("Size", "30");
        fig = 'square';
    } else if (rec.checked) {
        q = +prompt("width", "30");
        s = +prompt("height", "30");
        fig = 'square';
    } else if (ell.checked) {
        q = +prompt("width", "30");
        s = +prompt("height", "30");
        fig = 'circle';
    }
}

function clickHandler(e) {
    var target = e.target;
    var x = e.offsetX;
    var y = e.offsetY;
    var newElement = document.createElement('div');
    newElement.className = fig;
    newElement.style.left = x + 'px';
    newElement.style.top = y + 'px';
    newElement.style.width = q + 'px';
    if (circ.checked || squ.checked) {
        s = q;
    }
    newElement.style.height = s + 'px';
    target.appendChild(newElement);
}

// function addLis (dest) {
//     dest.addEventListener('change', checkStatus);
// }

var area = document.querySelector('#area');
area.addEventListener('click', clickHandler);
circ.addEventListener('change', checkStatus);
squ.addEventListener('change', checkStatus);
rec.addEventListener('change', checkStatus);
ell.addEventListener('change', checkStatus);