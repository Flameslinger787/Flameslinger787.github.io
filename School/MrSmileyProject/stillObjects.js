"use strict"

//This file builds our school, house, and fences

class Building {
    translateX;
    translateY;
    fillColor;


    constructor() {
        this.translateX = 0;
        this.translateY = 0;
        this.fillColor = "red";

    }


    Translate(tx, ty) {
        this.translateX = tx;
        this.translateY = ty;
    }

    DrawObject(ctx) {

      ctx.fillStyle = "green";

      //Awning (both sides so I didn't need another class or transformation)
      ctx.beginPath();
      ctx.moveTo(0, -50);
      ctx.lineTo(-350,0);
      ctx.lineTo(-175,150);
      ctx.lineTo(0,-50);
      ctx.fill();
      ctx.stroke();
      

      //Building
      ctx.fillStyle = this.fillColor;
      ctx.fillRect(-300, -200, 250, 300);

      //Chimney
      ctx.fillRect(-125, 75, 50, 100);

      //Roof
      ctx.beginPath();
      ctx.moveTo(0, 100);
      ctx.lineTo(-350,100);
      ctx.lineTo(-175,150);
      ctx.lineTo(0,100);
      ctx.fill();
      ctx.stroke();

      //Window
      ctx.fillStyle = "gray";
      ctx.fillRect(-200, -100, 100, 100);

   }

    Display(ctx) {
       ctx.save();

       //Move with arrow keys
       ctx.translate(this.translateX + worldX, this.translateY);
 
       this.DrawObject(ctx);

       ctx.restore();
    }
}


class Fence{

   translateX;
   translateY;
   fillColor;


   constructor() {
      this.translateX = 0;
      this.translateY = 0;
      this.fillColor = "#694b00";

   }


   Translate(tx, ty) {
      this.translateX = tx;
      this.translateY = ty;
    }

   DrawObject(ctx) {

   //Vertical post
   ctx.fillStyle = this.fillColor;
   ctx.fillRect(0, 0, 20, 75);

   //Horizontal posts
   ctx.fillRect(0, 60, 200, 10);
   ctx.fillRect(0, 30, 200, 10);

   }

    Display(ctx) {
       ctx.save();

       //Move with arrow keys
       ctx.translate(this.translateX + worldX, this.translateY);
 
       this.DrawObject(ctx);

       ctx.restore();
    }

}


