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


// fourth TRY T_T 
var currentQuestion = document.querySelector(".questionText");  
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 

var alltheQs = {
  question1: "this is q1",
  question2: "this is q2",
  question3: "this is q3"
}

var q1=function changeanswer1 (){
  currentQuestion= alltheQs.question1
  btn1.textContent = "as1a",
  btn2.textContent = "as1b",
  btn3.textContent = "as1c",
  btn4.textContent = "as1d"
}

var q2=function changeanswer2() {
  currentQuestion= alltheQs.question2
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"

}

var q3= function changeanswer3 (){
  currentQuestion= alltheQs.question3
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"
  
}

// // working on button 1 (answer A)
// currentQuestion= alltheQs.question1
// if (btn1.onclick === true) {
//   console.log ("this is button 1")
//   if(currentQuestion === alltheQs.question1){
//     alert("correct!")
//     currentQuestion = alltheQs.question2
//     function changeanswer2 ()
  
// }

currentQuestion= alltheQs.question1
if(btn1.onclicked === true) {
  alert("correct!")
// and the next function happen here 
function changeanswer2 ()
}

// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
  alert("incorrect!")
  function changeanswer2 ()
}

else if (btn3.onclick){
alert("incorrect!")
function changeanswer2 ()
}

else if (btn4.onclick){
alert("incorrect!")
function changeanswer2 ()
}


currentQuestion= alltheQs.question2
if(btn1.onclicked) {
  alert("incorrect!")
// and the next function happen here 
function changeanswer3 ()
}


// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
  alert("correct!")
  function changeanswer3 ()
}

else if (btn3.onclick){
alert("incorrect!")
function changeanswer3 ()
}

else if (btn4.onclick){
alert("incorrect!")
function changeanswer3 ()
}

