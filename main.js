
prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

 function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
 }

 console.log('ml5 version' ,ml5.version);

 Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p4FUq4c6T/model.json",modelLoaded);

 function modelLoaded(){
    console.log("modelLoaded");
 }

 function check(){
    img = document.getElementById("capture_image");
    Classifier.classify(img, gotResult);
 }

 function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emoji_name").innerHTML = results[0].label;
        document.getElementById("result_emoji_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if(results[0].label == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }

        if(results[0].label == "Best"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }

        
        if(results[0].label == "Victory"){
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }

        if(results[0].label == "Swag"){
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }

        if(results[1].label == "Amazing"){
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }

        if(results[1].label == "Best"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }

        
        if(results[1].label == "Victory"){
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }

        if(results[1].label == "Swag"){
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }

       

        

 }
}
