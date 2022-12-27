x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
fruit = "";
speak_data = "";
to_number = "";

draw_fruit = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started Drawing fruit"; 
      draw_fruit = "yes";
      
    }
    else{
        document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
    }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width,screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if(draw_fruit == "yes"){
    document.getElementById("status").innerHTML = to_number + " fruits drawn";
    draw_fruit = "";
    speak_data = to_number + "fruits Drawn";
    speak();
    updateCanvas();
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(fruit , x, y, 100, 100);
    }
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
function preload(){
  fruit = loadImage("apple.png");
}
function updateCanvas(){
  c=color( random(255), random(255), random(255) );
  background(c);
  
}
function changefruit(){
  fruit = loadImage("My project.png");
}
function changefruit2(){
  fruit = loadImage("apple.png");
}
function changefruit3(){
  fruit = loadImage("My project (1).png");
}
function d(){
  to_number="0";
  draw_fruit="yes";
}
