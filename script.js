const container = document.querySelector('#container');
const pixels = document.querySelector('#pixels');
const reset = document.querySelector('#reset');
const rainbow = document.querySelector('#rainbow');
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

