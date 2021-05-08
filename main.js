var carx = 20;
var cary = 100;
var car2x = 20;
var car2y = 250;
var width = 100;
var height = 120;
var carimage = "ferrari.png";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasimage = "track.jpg";
var won=0;

function add(){
    backgroundimg = new Image();
    backgroundimg.src = canvasimage;
    backgroundimg.onload = uploadcanvas;

    carimg = new Image();
    carimg.src = carimage;
    carimg.onload = uploadcar;

    car2img = new Image();
    car2img.src = carimage;
    car2img.onload = uploadcar2;

}

function uploadcanvas(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(carimg,carx,cary,width,height);
}
function uploadcar2(){
    ctx.drawImage(carimg,car2x,car2y,width,height);
}
function up(){
    if(cary >= -30){
        cary = cary-10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}
function down(){
    if(cary <= 360){
        cary = cary+10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}
function right(){
    if(carx <= 690){
        carx = carx+10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
    if(carx == 620 && won == 0){
    document.getElementById("win").innerHTML = "Player 1 Won!" ;
    won =1;
    }
}
function left(){
    if(carx >= 10){
        carx = carx-10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}
function w(){
    if(car2y >= -30){
        car2y = car2y-10;
        console.log("X : "+car2x+" Y : "+car2y);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}
function s(){
    if(car2y <= 360){
        cary = car2y+10;
        console.log("X : "+car2x+" Y : "+car2y);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}
function d(){
    if(car2x <= 690){
        car2x = car2x+10;
        console.log("X : "+car2x+" Y : "+car2y);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
    if(car2x == 620 && won == 0){
    document.getElementById("win").innerHTML = "Player 2 Won!" ;
    won =1;
    }
}
function a(){
    if(car2x >= 10){
        car2x = car2x-10;
        console.log("X : "+car2x+" Y : "+car2y);
        uploadcanvas();
        uploadcar2();
        uploadcar();
    }
}

addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
        up();
    }
    if(keypressed == '40'){
        console.log("down");
        down();
    }
    if(keypressed == '39'){
        console.log("right");
        right();
    }
    if(keypressed == '37'){
        console.log("left");
        left();
    }
    if(keypressed == '87'){
        console.log("w");
        w();
    }
    if(keypressed == '83'){
        console.log("s");
        s();
    }
    if(keypressed == '68'){
        console.log("d");
        d();
    }
    if(keypressed == '65'){
        console.log("a");
        a();
    }
}