"use strict"
    
//Get our canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

//Set a  time variable
let time = 0;
let rTime = 0;
let shrink = false;

Draw(time);

//Update star every second
setInterval(Draw, 10)

//Draws shape 
function Draw(){
    //Hardcoded size
    let size = 400

    let cx = canvas.width/2;
    let cy = canvas.height/2;

    //Important to begin path each time*
    ctx.beginPath();

    //Clear old star
    Clear();

    //Draw Star using altered n-gon formula
    for(let i = 0; i <= 5; i++){

        let radius = rTime/1000;

        ctx.arc(cx, cy, (size*(0.45 - radius)), (i*4/5 * Math.PI)+(time/100), (i*4/5 * Math.PI)+(time/100));
        ctx.stroke();
    }

    RadiusTime(rTime);
    time++;
}  

//Clears old star
function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Make sure the star switches betwwen growing and shrinking
//Hardcoded times, can be adjusted to change star radius more or less frequently
function RadiusTime(){
    if(shrink == true){
        rTime--;
        if(rTime <= 0){
            shrink = false;
        }
    }

    if(shrink == false){
        rTime++;
        if(rTime >= 200){
            shrink = true;
        }
    }

}
