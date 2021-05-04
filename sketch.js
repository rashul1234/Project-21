var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(490,580,200,30)
    block3.shapeColor = "green";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.velocityX = 8;
    ball.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    ball.bounceOff(block1);
    if(block1.isTouching(ball) &&  ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
        music.play();
    }


     ball.bounceOff(block2);
    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        
    }

    ball.bounceOff(block3);
    if(ball.isTouching(block3)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }


   ball.bounceOff(block4);
    if(ball.isTouching(block4)){
        ball.shapeColor = "pink";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    drawSprites();
}
