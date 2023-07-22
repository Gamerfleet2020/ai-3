video = "";
Status = "";







function setup(){
canvas = createCanvas(480, 380)
canvas.center();
video = createCapture(VIDEO);
video.hide()

}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Dectecting Objects";
object_name = document.getElementById("input1").value

}


function modelLoaded(){
    console.log("Model Loaded!")
    Status = true;
    
    
}

function gotResult(error, results){
if (error){
console.log(error);



}
console.log(results);
objects = results;




}
function draw(){
if(Status !="")
    {
      



      objectDetector.detect(video, gotResult);

      for (i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Objects detected";
        document.getElementById("number_of_objects").innerHTML = "Number of the objects detected are : "+ objects.length;
        fill('#FF0000');
         percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill(),
        stroke('#FF0000')
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        

        

      }
       
    }

    
    
}