canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car1Width=100;
var car1Height=90;
var car1img="car2.png";
var car1X=10;
var car1Y=10;

var car2Width=100;
var car2Height=90;
var car2img="car2.jpg";
var car2X=10;
var car2Y=100;

var background_image="road.jpg";

function add(){
     bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;
     

     car_img=new Image();
    car_img.onload=uploadcar1;
    car_img.src=car1img;

    car_img2=new Image();
    car_img2.onload=uploadcar2;
    car_img2.src=car2img;
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car_img,car1X,car1Y,car1Width,car1Height);
}

function uploadcar2(){
    ctx.drawImage(car_img2,car2X,car2Y,car2Width,car2Height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keyPress=e.keyCode;
    console.log (keyPress);

    if(keyPress=='37'){
        left();
        console.log ("left key is pressed");
    }

    if(keyPress=='38'){
        up();
        console.log ("up key is pressed");
    }

    if(keyPress=='39'){
        right();
        console.log ("right key is pressed");
    }

    if(keyPress=='40'){
        down();
        console.log ("down key is pressed");
    }

    if(keyPress=='87'){
        car2_up();
        console.log ("w is pressed");
    }

    if(keyPress=='83'){
        car2_down();
        console.log ("s is pressed");
    }

    if(keyPress=='65'){
        car2_left();
        console.log ("a is pressed");
    }

    if(keyPress=='68'){
        car2_right();
        console.log ("d is pressed");
    }
}