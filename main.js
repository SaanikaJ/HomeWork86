var canvas = new fabric.Canvas("myCanvas"); 

var block_image_height = 30; 
var block_image_width = 30;

var player_x = 10;
var player_y = 10; 

var player_object = ""; 
var block_image_object = ""; 

function player_update(){
    fabric.Image.fromURL("Background.jgp", function(Img){
        player_object = Img; 
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140); 
        player_object.set({
            Top: player_y, 
            Left: player_x
        });
        canvas.add(player_object);
    });
} 

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img; 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({
            Top: player_y,
            Left: player_x
        }); 
        canvas.add(block_image_object); 
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log("Key pressed is " + keyPressed); 

    if (keyPressed == "37"){
        left();
        console.log("Left"); 
    } 

    if (keyPressed == "38"){
        up();
        console.log("Up"); 
    }

    if (keyPressed == "39"){
        right();
        console.log("Right"); 
    }
    
    if (keyPressed == "66"){
        new_image("Batman.png");
        console.log("B - Batman"); 
    }
    
    if (keyPressed == "73"){
        new_image("Ironman.png");
        console.log("I - Ironman"); 
    }
    
    if (keyPressed == "83"){
        new_image("Spiderman.png");
        console.log("S - Spiderman"); 
    }

    if (keyPressed == "84"){
        new_image("Thor.png");
        console.log("T - Thor"); 
    }

    if (keyPressed == "87"){
        new_image("WonderWoman.png");
        console.log("W - Wonder Woman"); 
    }
}