var canvas = new fabric.Canvas('myCanvas');

block_image_width= 50;
block_image_height= 50;

playerX = 7;
PlayerY = 7;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:PlayerY,left:playerX
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:PlayerY,left:playerX
    });
    canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        block_image_width = block_image_width +10;
        block_image_height = block_image_height +10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey==true && keypress=='77'){
        block_image_width = block_image_width -10;
        block_image_height = block_image_height -10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
        
    }

    if(keypress == '38'){
        up();
        console.log("up");
    }
    if(keypress == '40'){
        down();
        console.log("down");
    }
    if(keypress == '37'){
        left();
        console.log("left");
    }
    if(keypress == '39'){
        right();
        console.log("right");
    }
    if(keypress == '87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypress == '71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypress == '76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypress == '84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypress == '82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypress == '89'){
        new_image('yelllow_wall.png');
        console.log("y");
    }
    if(keypress == '68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypress == '85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keypress == '67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keypress == '75'){
        new_image('k.png');
        console.log("k");
    }
    if(keypress == '69'){
        new_image('e.png');
        console.log("e");
    }
    if(keypress == '78'){
        new_image('n.png');
        console.log("n");
    }
    if(keypress == '73'){
        new_image('l.png');
        console.log("l");
    }
}
function up(){
    if(PlayerY >=0){
        PlayerY= PlayerY - block_image_height;
        console.log(PlayerY)
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(PlayerY <=500){
        PlayerY= PlayerY + block_image_height;
        console.log(PlayerY)
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(playerX >=0){
        playerX= playerX - block_image_width;
        console.log(playerX)
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(playerX <=1000){
        playerX= playerX + block_image_width;
        console.log(playerX)
        canvas.remove(player_object);
        player_update();
    }
}