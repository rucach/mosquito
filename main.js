prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        number = document.getElementById("result");
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FPKd83hr7/model.json", modelLoaded);

//define function modelLoaded
function modelLoaded(){
    console.log("model loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

//define function check() 
function check(){
    classifier.classify(number, gotResult);
}

//define function gotResult(error, results)
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
        if(results[0].label = "OK"){
            document.getElementById("status_update").innerHTML = "<p class='btn btn-success status_update' id='status'>" + "YOU CAN GO" + "</p>";
            document.getElementById("update_emoji").innerHTML = "<p class='emoji' id='update_emoji'>" + "&#x1F637;" + "</p>";
        }
        if(results[0].label = "CANCEL"){
            document.getElementById("status_update").innerHTML = "<p class='btn btn-danger status_update' id='status'>" + "STOP" + "</p>";
            document.getElementById("update_emoji").innerHTML = "<p class='emoji' id='update_emoji'>" + "&#x26d4;" + "</p>";
        }
    }
}
