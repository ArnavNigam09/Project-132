function setup()
{
    canvas  = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

img = "";
status = "";

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function preload()
{
    img = loadImage('Trya_Storage_Bed_Finish_Californian_Walnut_LP.jpg');

}

function draw()
{
    image(img, 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(20, 60, 597, 275);
}