"use strict"

//This is the file that builds all our objects from the Smileys to the school.

function BuildObjects() {

    //Create many fences
    let fences = new Fence();

    //It's a bit of a silly looking range, but it's about the big picture here
    for(let i=-1; i <= 22; i++){
        fences = new Fence();
        fences.Translate((i*200),0);
        fence.push(fences);
    }

        
    //House
    let item0 = new Building();
    item0.Translate(0,0);
    items.push(item0);

    //School
    let item1 = new Building();
    item1.Translate(4550,0);
    item1.fillColor = "blue";
    items.push(item1);

    //Create couple 1
    let coupleA = new Couple();
    coupleA.Translate(200,50);
    coupleA.Scale(0.5,0.5)
    coupleA.fillColor = "darkGreen";
    people.push(coupleA);

    let coupleB = new Couple();
    coupleB.Translate(230,50);
    coupleB.Scale(0.5,0.5)
    coupleB.fillColor = "pink";
    people.push(coupleB);

    //Create couple 2
    let coupleC = new Couple();
    coupleC.Translate(3000,0);
    coupleC.Scale(0.5,0.5)
    coupleC.fillColor = "blue";
    people.push(coupleC);
    
    let coupleD = new Couple();
    coupleD.Translate(3030,0);
    coupleD.Scale(0.5,0.5)
    coupleD.fillColor = "purple";
    people.push(coupleD);

    //Create couple 3
    let coupleE = new Couple();
    coupleE.Translate(1000,-50);
    coupleE.Scale(0.5,0.5)
    coupleE.fillColor = "pink";
    people.push(coupleE);
        
    let coupleF = new Couple();
    coupleF.Translate(1030,-50);
    coupleF.Scale(0.5,0.5)
    coupleF.fillColor = "purple";
    people.push(coupleF);
    
    let seesaw0 = new Seesaws();
    seesaw0.Translate(1600,-50);
    seesaw.push(seesaw0);

    let seesaw1 = new Seesaws();
    seesaw1.Translate(2600,-150);
    seesaw.push(seesaw1);

    let see0 = new SmileySee();
    see0.Translate(1530,20);
    see0.Scale(0.4,0.4)
    people.push(see0);

    let saw0 = new SmileySaw();
    saw0.Translate(1670,20);
    saw0.Scale(0.4,0.4)
    people.push(saw0);

    let see1 = new SmileySee();
    see1.Translate(2530,-80);
    see1.Scale(0.4,0.4)
    people.push(see1);

    let saw1 = new SmileySaw();
    saw1.Translate(2670,-80);
    saw1.Scale(0.4,0.4)
    people.push(saw1);

    let swing0 = new Swings();
    swing0.Translate(600,150);
    swing.push(swing0);

    let swing1 = new Swings();
    swing1.Translate(2200,50);
    swing.push(swing1);

    let mrSwing0 = new MrSwing();
    mrSwing0.Translate(600,40);
    mrSwing0.Scale(0.4,0.4)
    people.push(mrSwing0);

    let mrSwing1 = new MrSwing();
    mrSwing1.Translate(2200,-60);
    mrSwing1.Scale(0.4,0.4)
    people.push(mrSwing1);

    let swing2 = new Swings();
    swing2.Translate(3900,150);
    swing.push(swing2);


    let mrSwing2 = new MrSwing();
    mrSwing2.Translate(3900,40);
    mrSwing2.Scale(0.4,0.4)
    people.push(mrSwing2);
}