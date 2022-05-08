const container = document.querySelector('#container');
const pixels = document.querySelector('#pixels');
const reset = document.querySelector('#reset');
pixels.addEventListener('click', repixel)
reset.addEventListener('click', resetting)
function color(){
    this.classList.add('black'); 
}

function grid(x){
    for(let i = 1; i<= x; i++){
        const square = document.createElement('div');
        square.addEventListener('mouseenter', color);
        square.class = "square";
        container.append(square);
    }
}
grid(256)

function boxSize(x){
    return Math.floor(240/x);
}

function repixel(){
    let detailLevel = prompt('Please enter amount of pixels per side up to 100',"16")
    if(detailLevel <= 100){
        container.innerHTML = "";
        document.getElementById("container").style.gridTemplateColumns = 'repeat(boxSize(detailLevel), 1fr)';
        document.getElementById("container").style.gridTemplateRows = 'repeat(boxSize(detailLevel), 1fr)';
        grid(detailLevel*detailLevel);
    } else{
        alert('Please enter a number not larger than 100')
    }
    
}

function resetting(){
    container.innerHTML="";
    grid(256);
}