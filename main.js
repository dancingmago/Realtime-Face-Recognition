function setup(){
    canvas = createCanvas(750, 750);
    canvas.center();

    video = createCapture(750, 750);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BH8F9aB0H/model.json", modelLoaded);
}

function draw(){
    image(video, 0, 0, 750, 750);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("member_name").innerHTML = results[0].label;
        document.getElementById("member_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}