var canvas = new fabric.Canvas('myCanvas');

blockImageHeight = 30
blockImageWidth = 30

playerX = 10
playerY = 10

playerObject = "";
blockObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerY, 
            left:playerX
            
        });
canvas.add(playerObject);
    })
}
function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
   blockObject = Img
   blockObject.scaleToWidth(blockImageWidth);
   blockObject.scaleToHeight(blockImageHeight);
blockObject.set({
    top:playerY,
    left:playerX
});
canvas.add(blockObject) 
})
}

window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
if(e.shiftKey == true && keypressed == '80'){
    console.log("Keys P and shift pressed together")
    blockImageHeight +=10;
    blockImageWidth +=10;
    document.getElementById("currentHeight").innerHTML= blockImageHeight;
    document.getElementById("currentWidth").innerHTML = blockImageWidth;
}
if(e.shiftKey == true && keypressed == '77'){
    console.log("Shift and M pressed together")
    blockImageHeight -=10;
    blockImageWidth -=10;
    document.getElementById("currentHeight").innerHTML = blockImageHeight;
    document.getElementById("currentWidth").innerHTML = blockImageWidth;
}
if(keypressed == '38'){
    up()
    console.log("Up") 
}
if(keypressed == '40'){
    down()
    console.log("Down")
}
if(keypressed == '37'){
    left()
    console.log("Left")
}
if(keypressed == '39'){
    right()
    console.log("Right")
}
if(keypressed == '84'){
    console.log("T was pressed")
newImage("trunk.jpg");
}
if(keypressed == '68'){
    console.log("D was pressed")
    newImage("dark_green.png");
}
if(keypressed == '76'){
    console.log("L was pressed")
    newImage("light_green.png");
}
if(keypressed == '71'){
    console.log("G was pressed")
    newImage("ground.png");
}
if(keypressed == '87'){
    console.log("W was pressed")
    newImage("wall.jpg");
}
if(keypressed == '89'){
    console.log("Y was pressed")
    newImage("yellow_wall.png");
}
if(keypressed == '82'){
    console.log("R was pressed")
    newImage("roof.jpg");
}
if(keypressed == '67'){
    console.log("C was pressed")
    newImage("cloud.jpg");
}
if(keypressed == '85'){
    console.log("U was pressed")
    newImage("unique.png");
}
}
function up(){
if (playerY >0){
 playerY -= blockImageHeight
console.log("Block Image height = " + blockImageHeight)
console.log("Up arrow is pressed! X position = " + playerX + " and Y =" + playerY)
canvas.remove(playerObject)
playerUpdate()
}
}

function down(){
if (playerY <=500){
    playerY += blockImageHeight
    console.log("new Blockimageheight = " + blockImageHeight)
    console.log("Down was pressed, X = " + playerX + " and Y = " + playerY)
    canvas.remove(playerObject)
playerUpdate()
}
}
function left(){
if (playerX >0){
    playerX -= blockImageWidth
    console.log("New blockimagewidth = " + blockImageWidth)
    console.log("Left was pressed! X = " + playerX + "and Y = " + playerY)
canvas.remove(playerObject)
playerUpdate()
}
}
function right(){
if(playerX <=900){
    playerX += blockImageWidth
    console.log("New blockimagewidth = " + blockImageWidth)
    console.log("Right was pressed! X = " + playerX + "and Y = " + playerY)
    canvas.remove(playerObject)
    playerUpdate()
}
}