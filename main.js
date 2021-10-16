function preload(){

}

function setup(){
   canvas = createCanvas(640, 480);
   canvas.position(310, 270);
   video = createCapture(VIDEO);
   video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function applyFilter(){
    tint_color = document.getElementById("tnit").value;
}

function take_snapshot(){
    save('ur_mom.png');
}