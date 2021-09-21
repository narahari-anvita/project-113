function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video, 80,100,250,200)

    fill(0,130,0);
    rect(70,50,260,30);
    rect(70,340,260,30);
    rect(30,60,30,300);
    rect(345,60,30,300);
    
    
    fill(0,0,128);
    circle(45,60,70);
    circle(360,60,70);
    circle(360,350,70);
    circle(45,350,70);
}

function take_snapshot(){
    save('picture_frame.png');
}