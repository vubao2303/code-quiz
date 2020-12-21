// set timer here! 
var timeEl = document.querySelector(".time");
var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft = secondsLeft - 1 ;
    timeEl.textContent = "Time: " + secondsLeft;

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


// bonusquestion (score  dont get deducted) Where are all these riddles come from? 
// a. Lord of the Ring b. the Hobbit c A Wizard of Earthsea d. Sorcerer to The Crown 


// Working with questions 
// name var for an object that has all the question value 
var alltheQs = {
  question1: "this is q1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
  question2: "this is q2",
  question3: "this is q3",
  question4: "this is q4"
  }

// name var that point to answer input 
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 
var currentQuestion = document.querySelector(".questionText");   
var result =document.querySelector(".card-footer")

var changeq2= function changeanswer2() {
  btn1.textContent = "as2a";
btn2.textContent = "as2b";
btn3.textContent = "as2c";
btn4.textContent = "as2d";
}
  var changeq3= function changeanswer3 () {
    btn1.textContent = "as3a",
    btn2.textContent = "as3b",
    btn3.textContent = "as3c",
    btn4.textContent = "as3d"
  }

var changeq4 = function changeanswer4 () {
btn1.textContent = "as4a",
btn2.textContent = "as4b",
btn3.textContent = "as4c",
btn4.textContent = "as4d"

}

var currentQuestion= alltheQs.question1
var q = document.getElementById("question-title")
q.innerHTML = currentQuestion
console.log(q)
// working with button 1 
// btn1.addEventListener("click", function () {
//   changeq2();
// });

btn1.addEventListener("click", function (){
  console.log('button1 A is the correct answer')
if(currentQuestion == alltheQs.question1){
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  alert("incorrect!")
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
});

// working on button 2
btn2.addEventListener("click", function (){
  console.log('button2 B is the correct answer')
  
  if(currentQuestion== alltheQs.question1){
  alert("incorrect!")
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  alert("correct!")
  currentQuestion=  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  alert("incorrect!")
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion== alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
});


// working with button 3
btn3.addEventListener("click", function (){
  console.log('button3 C is the correct answer')
  if(currentQuestion== alltheQs.question1){
  alert("incorrect!")
  currentQuestion=alltheQs.question2
  changeq2 ()
  
}
else if(currentQuestion == alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  alert("correct!")
  currentQuestion =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion ==  alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
});

// working with button 4
btn4.addEventListener("click", function (){
  console.log('btn 4 D is the correct answer')
if(currentQuestion== alltheQs.question1){
  alert('button4 D is the correct answer')
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion == alltheQs.question2){
  alert("correct!")
  currentQuestion =  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  alert("correct!")
  currentQuestion = alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  alert("correct!")
  alert("All done!")
  window.location.href = './index.html'
}
});

// save name and new high score

function othername() {
  var input = document.getElementById("userInput").value;
  alert(input);
}

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#score");
var savescore = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var savescoresss = nameInput.value + " "+ emailInput.value;
  savescore = savescoresss;
});