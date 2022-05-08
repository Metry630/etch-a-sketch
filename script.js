const myColors = ['red', 'blue', 'yellow', 'purple', 'fuchsia', 'green', 'lime', 'aqua', 'teal', 'hotpink', 'coral', 'cornflowerblue', 'cadetblue', 'greenyellow'];
function random_color(){return myColors[Math.floor(Math.random() * myColors.length)]}
const container = document.querySelector('#container');
const pixels = document.querySelector('#pixels');
const reset = document.querySelector('#reset');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');
const color = document.querySelector('#color');
pixels.addEventListener('click', repixel)
reset.addEventListener('click', resetting)
container.addEventListener('mousedown', downed)
container.addEventListener('mouseup', upped)
erase.addEventListener('click', erasing)
color.addEventListener('click', black)
rainbow.addEventListener('click', colorful)

let mouseStatus;
let mode = 'black';

function colorful(){
    mode = 'rainbow';
}

function erasing(){
    mode = 'erase'; 
}

function black(){
    mode = 'black';
}

function downed(){
    mouseStatus = 'down'
}

function upped(){
    mouseStatus = 'up'
}


function coloring(){
    if(mouseStatus === 'down' && mode === 'black'){
        this.style.backgroundColor = 'black';
    } else if(mouseStatus === 'down' && mode === 'erase'){
        this.style.backgroundColor = 'white';
    } else if(mouseStatus === 'down' && mode === 'rainbow'){
        console.log(random_color);
        this.style.background = random_color()
        random_color;
    }else{
        return
    }
}

function grid(x){
    for(let i = 1; i<= x; i++){
        const square = document.createElement('div');
        square.addEventListener('mouseenter', coloring);
        square.class = "square";
        container.append(square);
    }
}
grid(256)

function boxSize(x){
    return Math.floor(240/x);
}

function numColumn(x){
    let sentence = "";
    for(let i = 1; i<= x; i++){
        sentence += " auto"
    }
    return sentence;
}

function repixel(){
    let detailLevel = prompt('Please enter amount of pixels per side up to 100',"16")
    if(detailLevel <= 100 && detailLevel >= 1){
        container.innerHTML = "";

        document.getElementById("container").style.gridTemplateColumns = numColumn(detailLevel);
        document.getElementById("container").style.gridTemplateRows = numColumn(detailLevel);
        grid(detailLevel*detailLevel);
    } else{
        alert('Please enter a number from 1 to 100')
    }

}

function resetting(){
    container.innerHTML = ""
    document.getElementById("container").style.gridTemplateRows = numColumn(16);
    document.getElementById("container").style.gridTemplateColumns = numColumn(16);
    grid(256);
}