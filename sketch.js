// Harry Potter running away from Dementors to a Portkey
var harryImg, harryImg
var dementorImg, dementorImg
var portal, portalImg
var gameState = "play"
var backgroundImg, grass
var grass1
var coinImg, coin
var birdImg, bird
var cloud, cloudImg
var potterSound
var coinG
var birdG
var score = 0
var coin1, coin1Img
var happyImg

function preload(){
harryImg = loadImage("harry.png")
dementorImg = loadImage("dementor.png")
portalImg = loadImage("portal.png")
grassImg = loadImage("grass.png")
coinImg = loadImage("coin.png")
backgroundImg = loadImage("pic.png")
birdImg = loadImage("owl.png")
cloudImg = loadImage("cloud.png")

coin1Img = loadImage("coin.png")
potterSound = loadSound("Harry Potter - Main Theme.mp3")
sadBg = loadImage("backie.jpg")
happyImg = loadImage("hogwarts-cheer.jpg")
coinG=new Group();
birdG=new Group();
coin1G=new Group();
}

function setup() {
 createCanvas(800, 400)
 harry = createSprite(200, 200)
 harry.addImage("harry", harryImg)
 harry.scale = 0.25
dementor = createSprite(-250,230)
dementor.addImage("dementor", dementorImg)
dementor.scale = 0.15
grass = createSprite(0,220)
grass.addImage("grass", grassImg)
grass.scale = 1
grass1 = createSprite(300,220)
grass1.addImage("grass", grassImg)
grass1.scale = 1
potterSound.loop()
}

function draw() {
 background(backgroundImg)
 fill("black")
 textSize(24);
 textFont('Georgia')
 text("Score: "+ score, 20,50);
 drawSprites()
 if(frameCount%140 === 0){
    coin = createSprite(900,random(100,300))
coin.addImage("coin", coinImg)
coin.scale = 0.03
coin.velocityX = -4
coinG.add(coin)
coin.lifetime = 200
}
console.log(harry.x)
if(score > 200){
    portal = createSprite(785, 200)
    portal.addImage("portal", portalImg)
    harry.velocityX = 6
    birdG.destroyEach()
    birdG.x = 100000
}

if(frameCount%210 === 0){
    coin1 = createSprite(900,random(100,300))
coin1.addImage("coin", coin1Img)
coin1.scale = 0.03
coin1.velocityX = -4
coin1G.add(coin1)
coin1.lifetime = 200
}
if(dementor.x > 200){
    coinG.setVelocityXEach(0)
        birdG.setVelocityXEach(0)
        cloud.velocityX = 0
        coinG.destroyEach();
        birdG.destroyEach();
        coin1G.destroyEach()
        coin1G.setVelocityXEach(0)
        dementor.velocityX = 7
        harry.y = 200
        background(sadBg)
        fill("white")
        textSize(60);
        textFont('Georgia')
        text("GAME OVER ", 220, 200);
        potterSound.stop()
}
 if(frameCount%190 == 0){
    bird = createSprite(900,random(100,300))
bird.addImage("bird", birdImg)
bird.scale = 0.08
bird.velocityX = -6
birdG.add(bird)
bird.lifetime = 200
 }
 if (harry.x > 720){
    coinG.setVelocityXEach(0)
        birdG.setVelocityXEach(0)
        cloud.velocityX = 0
        coinG.destroyEach();
        birdG.destroyEach();
        coin1G.destroyEach()
        coin1G.setVelocityXEach(0)
        background(happyImg)
        fill("white")
        textSize(54);
        textFont('Georgia')
        text("YOU WON - well done!!! ", 100, 150);
}
if(frameCount%190 == 0){
    cloud = createSprite(900,random(10,40))
cloud.addImage("cloud", cloudImg)
cloud.scale = 0.08
cloud.velocityX = -2
}
edges= createEdgeSprites();
  harry.collide(edges);

  if (coinG.isTouching(harry)) {
    coinG.destroyEach();
    score=score + 50;
  }else{
    if(birdG.isTouching(harry)) {
    gameState="END";
    coinG.setVelocityXEach(0)
        birdG.setVelocityXEach(0)
        cloud.velocityX = 0
        coinG.destroyEach();
        birdG.destroyEach();
        coin1G.destroyEach()
        coin1G.setVelocityXEach(0)
        dementor.velocityX = 7
        birdG.lifetime = -10
        coin1.lifetime = -10
        cloud.lifetime = -10
        harry.y = 200
}
  }
  if (coin1G.isTouching(harry)) {
    coin1G.destroyEach();
    score=score + 15;}
}


function keyPressed(){
    if(keyCode == UP_ARROW){
        harry.y += -15
     }
     if(keyCode == DOWN_ARROW){
        harry.y += 15
     }
}





//portal after score
//score

