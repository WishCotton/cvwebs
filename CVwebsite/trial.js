let bShade = 0;
function setup() { 
    createCanvas(1000, 700);
    background(bShade);
  }
  let xoff = 0.0;
  //switches
  let tri = true;
  let switch2 = true;
  let switch3 = true;
  let switch4 = true;
  let switch5 = true;
  let switch6 = true;
  let switch7 = true;
  let switch8 = true;
  let switch9 = true;
  let switch10 = true;

  let shade1 = 255;
  let shade2 = 0;

  function draw() {

    let elsW = 0;
    let chan = width;
    let stw = 2;
    xoff = xoff + 0.01;
    let a =0; 
    let b = 0;
    let ops = 255;
    b += random(-5,5);
    translate(width/2,height/2);
    if(switch4 === false){
      translate(-width/4,-height/4);
    }
    if(switch5 === false){
      
      translate(random(-width/2,width/2),random(-width/2,width/2));
    }
    if(switch7 === false){
      rotate(45);
    }
    if(switch9 === false){
      stw = 10
    }
    if(switch10 === false){
      ops = 50;
    }
    //Switch case 1
    if(tri === false){
      
      if(switch5 === true){
        elsW = 40;
      }else{
        elsW = 10;
      }
      ellipse(10,10,elsW);
      strokeWeight(stw);
      stroke(shade1,0,shade2,ops);
      a = noise(xoff*width);
       point(mouseX-width/2,a*random(400)); 
    }else{
      a += random(-chan,chan);
      stroke(0,0,shade1,ops);
       point(a*10,b); 
    }  
    if(switch2 === false){
      stroke(shade1,shade2,0,ops);
      point(a*random(400),mouseY-height/2);
    }
    if(switch3 === false){
      stw = 1;
      elsW = 80;
      strokeWeight(stw);
      stroke(shade1,shade2,0,ops);
      line(a*random(400),mouseY-height/2,-width/4,mouseY-height/2);
      fill(0);
      if(switch5 === false){
        elsW = 0;
      }
      ellipse(10,10,elsW);
    }
    if(switch6 === false){
      shade1=mouseX/3;
      shade2=mouseY/3;
    }
    if(switch8 === false){
      
      if(switch5 === true){
        elsW = 40;
      }else{
        elsW = 10;
      }
      ellipse(10,10,elsW);
      strokeWeight(stw);
      stroke(255-shade1,255,255-shade2,ops);
      a = noise(xoff*width);
       point(mouseX-width/2,-a*random(400)); 
    } 
    
  }   
  function trial(){
    shade1 = random(255);
    shade2 = random(255);
    
  }
  function b2(){
    noStroke();
    rectMode(CENTER);
    fill(255);
    rect(0,0,300,300);
  }
    function keyPressed(){
  switch(key)//key pressed effects stroke weight
  {
  
  case'1':
    tri = !tri;
    break;
  case'2':
    shade1 = 255;
    shade2 = 0;
    break;
  case'3':
    background(255);
    break;
  case'4':
    background(bShade);
    break;
  case'5':
    switch2 = !switch2;
    break;
  case'6':
    switch3 = !switch3;
    break;
  case'7':
    switch4 = !switch4;
    break;
  case'8':
    switch5 = !switch5;
    break;
  case'9':
    switch6 = !switch6;
    break;
  case'0':
    switch7 = !switch7;
    break;
  case'q':
    switch8 = !switch8;
    break;
  case'w':
   switch9 = !switch9;
    break;
  case'e':
    switch10 = !switch10;
     break;
  }
  
}