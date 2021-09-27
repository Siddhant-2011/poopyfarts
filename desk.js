img="";
status="";
object = [];
img_detector="";
function setup(){
canvas=createCanvas(380,380);
canvas.center();
img_detector=ml5.objectDetector('cocossd',modelLoasd);
document.getElementById('status').innerHTML="Status: Detecting Ojects";

}

function draw(){
    
    
    if(status!=''){
        image(img,0,0,380,380); 
  
        for(var i=0;i<object.length; i++){
            document.getElementById('g').innerHTML="Status: Objects Detected";
            fill(56,8,9);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%",object[i].x,object[i].y);
            noFill();
            stroke(56,8,9);
            rect(object[i].x-15,object[i].y-15,object[i].width,object[i].height);
        }
    }

} 


function preload(){
img = loadImage('l41151_full.jpeg');

}

function modelLoasd(){
    status=true;
    console.log('cwgjkycqvfbjcfwwfcwqfac fsyacvjybhzdefmg');
    img_detector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
object=results;
}