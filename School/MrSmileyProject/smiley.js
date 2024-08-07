"use strict"

//This is the file containing all our smiley classes and behaviors

class Smiley {
    translateX;
    translateY;
    rotate;
    scaleX;
    scaleY;
    fillColor;

    //These variables should be in the subclasses, but I could not get them to move
    //without completely breaking my project
    //So every instance of Smiley got them
    //I know it's bad class management and I will try to fix it

    //Needed for couples
    //After testing, not sure if moveX or moveY are necessary,
    //But I used them to make sure it doesnt mess up global translations
    moveX;
    moveY;
    moveUp;
    moveDown;
    moveLeft;
    moveRight;


    constructor() {
        this.Reset();
    }


    set fillColor(value) {
        this.fillColor = value;
    }

    get fillColor() {
        return this.fillColor;
    }

    Reset() {
        this.translateX = 0;
        this.translateY = 0;
        this.rotate = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.fillColor = "yellow";
        this.moveX = 0;
        this.moveY = 0;
        this.moveUp = true;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;

    }

    Tick() {
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
        ctx.fillStyle = this.fillColor;
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


    Display(ctx) {
        ctx.save();

        ctx.translate(this.translateX + worldX, this.translateY);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotate);


        this.DrawObject(ctx);

        ctx.restore();
    }
}

class Couple extends Smiley {

    constructor() {
       super();
       
    }


    Tick() {


        //Moves couples up
        if(this.moveUp == true){

            this.moveY = this.moveY + 2;
            this.translateY = this.translateY + 2;

            if(this.moveY >= 50){

                this.moveUp = false;
                this.moveLeft = true;
            }
        }

        //Moves couple left
        if(this.moveLeft == true){

            this.moveX = this.moveX - 2;
            this.translateX = this.translateX - 2;

            if(this.moveX <= -50){

                this.moveLeft = false;
                this.moveDown = true;
            }

        }

        //Moves couple Down
        if(this.moveDown == true){

            this.moveY = this.moveY - 2;
            this.translateY = this.translateY - 2;

            if(this.moveY <= 0){

                this.moveDown = false;
                this.moveRight = true;
            }
        }

        //Moves couple Down
        if(this.moveRight == true){
        
            this.moveX = this.moveX + 2;
            this.translateX = this.translateX + 2;
        
            if(this.moveX >= 0){
        
                this.moveRight = false;
                this.moveUp = true;
            }
        }
    }
}

class SmileySee extends Smiley {

    constructor() {
       super();
       
    }


    Tick() {

        //Up
        if(this.moveUp == true){
            this.translateX = this.translateX + 0.05;
            this.moveX++;
            this.translateY = this.translateY + 1.4;
            this.rotate = this.rotate + 0.001;

            if(this.moveX >= 11){
                this.moveUp = false;
            }
        }

        //Down
        if(this.moveUp == false){
            this.translateX = this.translateX - 0.05;
            this.moveX--;
            this.translateY = this.translateY - 1.4;
            this.rotate = this.rotate - 0.001;

            if(this.moveX <= -11){
                this.moveUp = true;
            }
        }

    }
}

class SmileySaw extends Smiley {

    constructor() {
       super();
       
    }


    Tick() {

        //Up
        if(this.moveUp == true){
            this.translateX = this.translateX - 0.05;
            this.moveX--;
            this.translateY = this.translateY - 1.4;
            this.rotate = this.rotate - 0.001;

            if(this.moveX <= -11){
                this.moveUp = false;
            }
        }

        //Down
        if(this.moveUp == false){
            this.translateX = this.translateX + 0.05;
            this.moveX++;
            this.translateY = this.translateY + 1.4;
            this.rotate = this.rotate + 0.001;

            if(this.moveX >= 11){
                this.moveUp = true;
            }
        }

    }
}

class MrSwing extends Smiley {

    constructor() {
       super();
       
    }


    Tick() {

        //Left
        if(this.moveLeft == false){

            this.rotate = this.rotate - 0.04;
            this.translateX = this.translateX - 4.5;

            if(this.rotate <= -0.2){
                this.moveLeft = true;
            }

        }

        //Right
        if(this.moveLeft == true){

            this.rotate = this.rotate + 0.04;
            this.translateX = this.translateX + 4.5;

            if(this.rotate >= 0.2){
                this.moveLeft = false;
            }

        }

        
    }


}