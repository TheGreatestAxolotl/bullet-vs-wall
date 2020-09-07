var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.valocityX = speed;
  wall = createSprite(1500, 200, 60, height/2)
  
  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  wall = rgb (80, 80, 80)
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - v.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
  car.shapeColor = "red";
  fixedRect.shapeColor = "red";
  if(wall.x-car.x < car.width + wall.width){
    car.valocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
   if(deformation > 180){
    car.shapeColor(255,0,0)



   }
   if(deformation < 180 && deformation > 100){
    car.shapeColor(230,230,0)





   }
   if(deformation < 100){
    car.shapeColor(0,255,0)






   }











  }




















}
}