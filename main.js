function preload(){}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log("PoseNet is Loaded!")
}

function draw(){
    image(video,0,0,450,450);
}

function takeSnapshot(){
    save("mustachefilter.jpg")
}