var stick1,stick2,stick3,stick4,stick5,stick6,v,stick7,stick8,stick9,stick10,stick11,stick12,stick13,stick14,stick15,stick16,stick17,stick18;


function setup() {
  createCanvas(1600,500);
stick1 = createSprite(800,250,10,300);  
stick1.shapeColor = "red";

stick2 = createSprite(820,250,30,200);  
stick2.shapeColor = "green";

stick3 = createSprite(850,275,30,150);  
stick3.shapeColor = "red";

stick4 = createSprite(890,250,30,200);  
stick4.shapeColor = "green ";

stick5 = createSprite(920,250,10,150);  
stick5.shapeColor = "black";

stick6 = createSprite(950,250,10,150);  
stick6.shapeColor = "black";

stick7 = createSprite(980,250,30,200);  
stick7.shapeColor = "green";

stick8 = createSprite(1010,250,30,200);  
stick8.shapeColor = "white";


stick9 = createSprite(1030,275,30,150);  
stick9.shapeColor = "red";


stick10 = createSprite(1060,250,30,200);  
stick10.shapeColor = "green";

stick11 = createSprite(1080,250,10,300);
stick11.shapeColor = "red";

stick12 = createSprite(935,250,50,20);
stick12.shapeColor = "red";

circle(920,200);


}

function draw() {
background("white");



  drawSprites();
}