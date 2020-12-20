var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft = secondsLeft - 1 ;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
    timeEl.textContent = " Time's Up! ";
}
setTime();

// fifth try 
// pointers for question and buttons 
var currentQuestion = document.querySelector(".questionText");  
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4")
// create an objects to contain all the questions and answer values 

var allTheQs = [
  {question: "this is q1",
    as1: "as1a",
    as2: "as1b",
    as3: "as1c",
    as4: "as1d"
  }, 
{
  question: "this is q2",
    as1: "as2a",
    as2: "as2b",
    as3: "as2c",
    as4: "as2d"
},
{
  question: "this is q3",
    as1: "as3a",
    as2: "as3b",
    as3: "as3c",
    as4: "as3d"
}
]

var currentQuestion = 0

// for question 1 
allTheQs[currentQuestion].question= "this is q1"
if(btn1.onclicked === true) {
  alert("correct!")
// and the next function happen here 
function changeanswer2 ()
{
  currentQuestion= alltheQs.question2
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"

}
}

// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
  alert("incorrect!")
  function changeanswer2 ()
  {
    currentQuestion= alltheQs.question2
    btn1.textContent = "as2a",
    btn2.textContent = "as2b",
    btn3.textContent = "as2c",
    btn4.textContent = "as2d"
  
  }
}

else if (btn3.onclick){
alert("incorrect!")
function changeanswer2 ()
{
  currentQuestion= alltheQs.question2
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"

}
}

else if (btn4.onclick){
alert("incorrect!")
function changeanswer2 ()
{
  currentQuestion= alltheQs.question2
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"

}
}

// for question 2 
allTheQs[currentQuestion].question= "this is q2"
if(btn1.onclicked) {
  alert("incorrect!")
// and the next function happen here 
function changeanswer3 ()
{
  currentQuestion= alltheQs.question3
  btn1.textContent = "as3a",
  btn2.textContent = "as3b",
  btn3.textContent = "as3c",
  btn4.textContent = "as3d"
  
}
}


// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
  alert("correct!")
  function changeanswer3 ()
  {
    currentQuestion= alltheQs.question3
    btn1.textContent = "as3a",
    btn2.textContent = "as3b",
    btn3.textContent = "as3c",
    btn4.textContent = "as3d"
    
  }
}

else if (btn3.onclick){
alert("incorrect!")
function changeanswer3 ()
{
  currentQuestion= alltheQs.question3
  btn1.textContent = "as3a",
  btn2.textContent = "as3b",
  btn3.textContent = "as3c",
  btn4.textContent = "as3d"
  
}
}

else if (btn4.onclick){
alert("incorrect!")
function changeanswer3 ()
{
  currentQuestion= alltheQs.question3
  btn1.textContent = "as3a",
  btn2.textContent = "as3b",
  btn3.textContent = "as3c",
  btn4.textContent = "as3d"
  
}
}

// for question 3
allTheQs[currentQuestion].question= "this is q3"
if(btn1.onclicked) {
  alert("incorrect!")
// add the high score card 
}


// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
  alert("incorrect!")
  // add the high score card 
  }

else if (btn3.onclick){
alert("correct!")
// add the high score card 
}

else if (btn4.onclick){
  alert("incorrect!")
  // add the high score card 
  }