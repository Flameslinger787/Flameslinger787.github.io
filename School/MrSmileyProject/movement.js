"use strict"

//This is the file for movement keys
//I couldve used a switch statement,
//but since it was only 4 keys, I opted to do it the lazy way.

function MyHandler(evnt){
    let key = evnt.key;

    if (key == 'a'){

        worldX = worldX + 20;
    
        if(worldX >= 0){
            worldX = 0;
        }
        DrawScene();
    } 

    if (key == 'd'){

        worldX = worldX - 20;

        if(worldX <= -4120){
            worldX = -4140;
        }
        DrawScene();
    } 

    if (key == 'g'){
        if (timer == null) {
            StartTicks();
         } 
    }

    if (key == 'h'){
        StopTicks();
    } 

}