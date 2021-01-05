var box
var f1,f2,f3,f4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(400,20,20,20);
    box.velocityX=random(-6,6);
    box.velocityY=random(2,6);

    f1 = createSprite(100,580,175,20);
    f1.shapeColor="red"
    f2 = createSprite(300,580,175,20);
    f2.shapeColor="green"
    f3 = createSprite(500,580,175,20);
    f3.shapeColor="blue"
    f4 = createSprite(700,580,175,20);
    f4.shapeColor="pink"
    


    //create box sprite and give velocity
}

function draw() {
    background(0);
    //create edgeSprite


    //add condition to check if box touching surface and make it box
    if(box.isTouching(f1)){
        box.shapeColor="red"
        box.velocityY=box.velocityY*(-1)
        music.play();
    }
    if(box.isTouching(f2)){
        box.shapeColor="green"
        box.velocityY=box.velocityY*(-1)
        music.play();

    }

    if(box.isTouching(f3)){
        box.shapeColor="blue"
        box.velocityY=box.velocityY*(-1)
        music.play();

    }

    if(box.isTouching(f4)){
        box.shapeColor="pink"
        box.velocityY=box.velocityY*(-1)
        music.play();
    }
    if(box.x<0){
        box.velocityX=box.velocityX*(-1);
    }
    if(box.x>800){
        box.velocityX=box.velocityX*(-1);
    }
    if(box.y<0){
        box.velocityY=box.velocityY*(-1);
    }
    drawSprites();
}
