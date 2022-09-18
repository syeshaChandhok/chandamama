nosex=0;
nosey=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,300,300);
//fill("red");
//stroke("red");
//circle(nosex,nosey,20);
image(mustache,nosex,nosey,45,45);
}
function take_snapshot(){
    save("mypicture.jpeg");
    
}
function modelLoaded(){
    console.log("MODEL IS LOADED FOREVER HEHEHE - WRITTEN BY ME = SYESHA CHANDHOK HEHEHEHEHEHE");
}
function gotPoses(results){
    if(results.length>0){
nosex=results[0].pose.nose.x-22;
nosey=results[0].pose.nose.y-5;
    
console.log(results);
console.log("nosex "+nosex);
console.log("nosey "+nosey);

}
}