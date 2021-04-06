
var canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
player_width=150;
player_height=140;
player_image_object = "";
function player_object(){
    fabric.Image.fromURL("supererb.jpeg",function(Img){
       player_image_object = Img;
       player_image_object.scaleToWidth(150);
       player_image_object.scaleToHeight(140); 
       player_image_object.set({top:player_y,left:player_x});
    canvas.add(player_image_object);
    });
    } 

window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == "80"){
            console.log("shift & P pressed together");
            player_height = player_height + 10;
            player_width = player_width + 10;
            document.getElementById("Current_width").innerHTML = player_width;
            document.getElementById("Current_height").innerHTML = player_height;
        }
        if(e.shiftKey == true && keyPressed == "77"){
            console.log("shift & M pressed together");
            player_height = player_height - 10;
            player_width = player_width - 10;
            document.getElementById("Current_width").innerHTML = player_width;
            document.getElementById("Current_height").innerHTML = player_height;
        }
        if(keyPressed == "38"){
            up();
            console.log("up is pressed");
            
        }
        if(keyPressed == "40"){
            down();
            console.log("down is pressed");
        }
        if(keyPressed == "37"){
            left();
            console.log("left is pressed");
        }
        if(keyPressed == "39"){
            right();
            console.log("right is pressed");
        }
    }
    function up(){
        
    if(player_y>=0){
        player_y = player_y - 10;
        console.log("X =  " + player_x + "Y =  " + player_y);
    }
    function down(){
        if(player_y>=500){
            player_y = player_y + 10;
            console.log("X =  " + player_x + "Y =  " + player_y);
    }
}
    function left(){
        if(player_x>=0){
            player_x = player_x - 10
            console.log("X =  " + player_x + "Y =  " + player_y);
        }
    }
    function right(){
        if(player_x>=900){
            player_x = player_x + 10
            console.log("X =  " + player_x + "Y =  " + player_y)
        }
    }