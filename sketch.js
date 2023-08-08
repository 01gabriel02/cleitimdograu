function setup() {
  createCanvas(400, 400);
    background("red");

}

function draw() {
fill("blue");
stroke("white");
  
  //console.log(mouseIsPressed);
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 15, 15);
  }
  




}