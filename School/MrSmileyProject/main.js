"use strict"
//Its main

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.tabIndex = 0;
canvas.addEventListener("keydown", MyHandler);


//I didn't think about how I could probably put everything into one or two arrays until
//I was about 70% done with the project, so I continuted to put everything in it's own array
//For consistency
let items = [];
let fence = [];
let stars = [];
let people = [];
let seesaw = [];
let swing = [];
let worldX = 0;
let create = false;
let timer = null;


DrawScene();

function DrawScene(){
   
    ctx.clearRect(0,0, canvas.height, canvas.width);
    ctx.save();

    //Fix coords and add grass/sky
    Setup();

    //School, House, and Fence (buildObjects.js)
    if(create == false){
    BuildObjects();

    //Build stars (found in stars.js)
    BuildStars();

    create = true;
    }

    //Display my objects!
    Display();

    //Display MrSmiley
    DrawMrSmiley();
}

//Display every array of objects
function Display() {

    for (let i=0; i < stars.length; i++ ) {
        stars[i].Display(ctx);
    }

    for (let i=0; i < fence.length; i++ ) {
        fence[i].Display(ctx);
    }

    for (let i=0; i < seesaw.length; i++ ) {
        seesaw[i].Display(ctx);
    }

    for (let i=0; i < swing.length; i++ ) {
        swing[i].Display(ctx);
    }

    for (let i=0; i < people.length; i++ ) {
        people[i].Display(ctx);
    }
    
    for (let i=0; i < items.length; i++ ) {
        items[i].Display(ctx);
    }


    
}

function Setup() {
    ctx.setTransform(1, 0, 0, -1, canvas.width/2, canvas.height/2);

    DrawGround();
    DrawSky();

}

//The timer
function StartTicks() {
    timer = setInterval(Tick, 100);    
}

function StopTicks() {
    if (timer != null) {
       clearInterval(timer);
       timer = null
    }
}

function Tick(){

    //Do things
    for (let i=0; i < stars.length; ++i ) {
        stars[i].Tick(ctx);
    }

    for (let i=0; i < people.length; ++i ) {
        people[i].Tick(ctx);
    }

    for (let i=0; i < seesaw.length; ++i ) {
        seesaw[i].Tick(ctx);
    }

    for (let i=0; i < swing.length; ++i ) {
        swing[i].Tick(ctx);
    }

    DrawScene();

}

//The easy ones
function DrawGround(){

    ctx.fillStyle = "lime";
    ctx.fillRect(-250, -250, 500, 300);
}

function DrawSky(){

    ctx.fillStyle = "grey";
    ctx.fillRect(-250, 50, 500, 200);
}

//This is my original Mr Smiley. I know I should convert him to a smiley class,
//But I am too emotionally attached to remake him.
function DrawMrSmiley(){
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(0,-175);
    ctx.lineTo(0,-100);
    ctx.moveTo(30,-125);
    ctx.lineTo(-30,-125);
    ctx.moveTo(0,-175);
    ctx.lineTo(25,-200);
    ctx.moveTo(0,-175);
    ctx.lineTo(-25,-200);
    ctx.stroke();

    //face
    ctx.beginPath();
    ctx.arc(0, -80, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.stroke();
    ctx.fill();

    //eye
    ctx.beginPath();
    ctx.arc(10, -75, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
    //eye
    ctx.beginPath();
    ctx.arc(-10, -75, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

    //smile

    ctx.beginPath();
    ctx.arc(0, -85, 10, Math.PI, 0);
    ctx.fillStyle = 'black';
    ctx.stroke();
}