const display = document.getElementById("display");
var timer = null;
var startTime = 0;
var elapsedTime = 0;
var isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function Stop(){
    if(isRunning){
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
        isRunning = false;
    }

}

function reset(){
    elapsedTime = 0;
    startTime = 0;
    clearInterval(timer);
    isRunning = false;
    display.textContent = "00:00:00:00";

    
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}

function toggleLight(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}
