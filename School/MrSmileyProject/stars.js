"use strict"

//This file creates our star class

class Star {
    translateX;
    translateY;
    rotate;
    scaleX;
    scaleY;
    scaleTF;

constructor() {
    this.Reset();
}


Reset() {
    this.translateX = 0;
    this.translateY = 0;
    this.rotate = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleTF = false;
}

Tick() {

    //Simply rotates
    this.rotate = this.rotate + 0.1;

    //Makes stars pulse with a true or false on should it get bigger or smaller
    if (this.scaleTF == true){
        this.scaleX = this.scaleX + 0.05;
        this.scaleY = this.scaleY + 0.05;
        //Toggles star to shrink
        if (this.scaleX >= 1){

            this.scaleTF = false;
        }
    }
    if (this.scaleTF == false){
        this.scaleX = this.scaleX - 0.05;
        this.scaleY = this.scaleY - 0.05;
        //Toggles star to grow
        if (this.scaleX <= 0){
            this.scaleTF = true;
        }
    }

}

Scale(sx,sy) {
    this.scaleX = sx;
    this.scaleY = sy;
}

Rotate(theta) {
    this.rotate = theta;
}

Translate(tx, ty) {
    this.translateX = tx;
    this.translateY = ty;
}

DrawObject(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";

    for(let i = 0; i <= 5; i++){

        ctx.arc(0, 0, (20*(0.45)), (i*4/5 * Math.PI), (i*4/5 * Math.PI));
        ctx.stroke();

    }
}

Display(ctx) {
   ctx.save();

   ctx.translate(this.translateX + worldX, this.translateY);
   ctx.scale(this.scaleX, this.scaleY);
   ctx.rotate(this.rotate);


   this.DrawObject(ctx);

   ctx.restore();
}
}



//Stolen from my HW3
function DrawStar(){

    ctx.beginPath();
    ctx.strokeStyle = "yellow";

    for(let i = 0; i <= 5; i++){

        ctx.arc(0, 0, (20*(0.45)), (i*4/5 * Math.PI), (i*4/5 * Math.PI));
        ctx.stroke();

    }

}


function BuildStars(){

    //Star test
    let star = new Star();
    let x = 0;
    let y = 0;
    let r = 0;
    let s = 0;


    for(let i=0; i <= 100; i++){
        //Creates four random numbers between 0-100
        x = Math.random()*100;
        y = Math.random()*100;
        r = Math.random()*100;
        s = Math.random();

        //x contained between 0-5000
        //the -500 allows stars to spawn behind the origin
        x = (x*50) - 500;
        //y must be contained between 80 and 280
        y= (y*2) + 80;

        //Rotation between 0-360
        r = r*3;

        //Scaling between 0-1

        star = new Star();
        star.Translate(x,y);
        star.Rotate(r)
        star.Scale(s,s)
        stars.push(star);
    }

}