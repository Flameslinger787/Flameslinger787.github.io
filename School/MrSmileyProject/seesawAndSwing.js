"use strict"

//The file for SEESAW AND MR SWING

//Seesaw
class Seesaws {
    translateX;
    translateY;
    rotate;
    scaleX;
    scaleY;
    rotateTF;

    constructor() {
        this.Reset();
    }


    Reset() {
        this.translateX = 0;
        this.translateY = 0;
        this.rotate = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotateTF = true;
    }

    Tick() {

        //Rotate back and forth slowly
        if(this.rotateTF == true){

            this.rotate = this.rotate - 0.02;

            if(this.rotate <= -0.2){
                this.rotateTF = false;
            }
        }

        if(this.rotateTF == false){

            this.rotate = this.rotate + 0.02;

            if(this.rotate >= 0.2){
                this.rotateTF = true;
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

        ctx.strokeStyle = "brown";
        ctx.beginPath();
        ctx.moveTo(80,0);
        ctx.lineTo(-80,0);
        ctx.stroke();
        
    }

    //Needs a redraw to contain the non-moving part
    DrawInPlace(ctx) {

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(30,-20);
        ctx.lineTo(-30,-20);
        ctx.lineTo(0,0)
        ctx.lineTo(30,-20)
        ctx.fill();
        ctx.stroke();
        
    }

    Display(ctx) {
        ctx.save();

        //Translate, draw the nonmoving part
        ctx.translate(this.translateX + worldX, this.translateY);
        this.DrawInPlace(ctx);
        //Then rotate the seats
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotate);

        this.DrawObject(ctx);

        ctx.restore();
    }
}

//Swing
class Swings {
    translateX;
    translateY;
    rotate;
    scaleX;
    scaleY;
    rotateTF;

    constructor() {
        this.Reset();
    }


    Reset() {
        this.translateX = 0;
        this.translateY = 0;
        this.rotate = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotateTF = true;
    }

    Tick() {

        //Rotate back and forth slowly
        if(this.rotateTF == true){

            this.rotate = this.rotate - 0.04;

            if(this.rotate <= -0.2){
                this.rotateTF = false;
            }
        }

        if(this.rotateTF == false){

            this.rotate = this.rotate + 0.04;

            if(this.rotate >= 0.2){
                this.rotateTF = true;
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

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0,-180);
        ctx.moveTo(10,-180);
        ctx.lineTo(-10,-180);

        ctx.stroke();
        
    }

    //Needs a redraw to contain the non-moving part
    DrawInPlace(ctx) {

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(50,-200);
        ctx.stroke();

        ctx.moveTo(0,0);
        ctx.lineTo(-50,-200);
        ctx.stroke();
        
    }

    Display(ctx) {
        ctx.save();

        //Translate, draw the nonmoving part
        ctx.translate(this.translateX + worldX, this.translateY);
        this.DrawInPlace(ctx);
        //Then rotate the seats
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotate);

        this.DrawObject(ctx);

        ctx.restore();
    }
}