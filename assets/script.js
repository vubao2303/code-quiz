// set timer here! 
// create pointer for time element 
var timeEl = document.querySelector(".time");
var interval;
// asign the time limit 
var secondsLeft = 100;
// run the function setTime to countdown 
function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft = secondsLeft - 1 ;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
// send a message when time is zero 
function sendMessage() {
    timeEl.textContent = " Time's Up! ";
    // provide place to put in high score 
}


// deduct point if get the wrong answer 
function deduct (){
  secondsLeft = secondsLeft - 10;
    timeEl.textContent = "Time: " + secondsLeft;
}
console.log (secondsLeft)

// when the last question is ansered time stop and score record 
function pauseTimer() {
  clearInterval(timerInterval);
}

// HIDE AND SEEK 
var eventType = document.querySelector("#event-type"); 
var questionsInCard = document.querySelector("#qincard");
var intro=document.querySelector("#ready");
var startbtn =document.querySelector(".readybtn")
var introvalue = intro.style.display;
var score = document.querySelector("#scoreincard")
var intpage = document.querySelector("#intpage")
var announce = document.querySelector(".announce")
var submitbtn=document.querySelector(".scorebutton")
var recordpage= document.querySelector("#record-page")
var takeint= document.querySelector("#takeinitials")


// hide the intro page and show the questions page 
function show (){
  setTime();
  intro.style.display="none";
  questionsInCard.style.display= "block";
}
startbtn.addEventListener("click", show)

// hide the question page and show the input score page when the last question is ansered 
function showscore(){
  questionsInCard.style.display="none";
  score.style.display= "block";
  announce.textContent= "Your score is " + secondsLeft
  console.log ("show score") 
}

// hide the score input page and show the highscore page 
var recordlist = document.createElement('ol')
var intInputEl = document.querySelector("#initials")
var record = intInputEl.value.trim()
  
function showRecord () {
  score.style.display = "none";
  recordpage.style.display = "block";
  console.log(recordpage)
  console.log(score)
  var record = intInputEl.value.trim()
  console.log(record)
  recordlist.textContent =record + " - " + secondsLeft
  console.log ("takeint: " + takeint + secondsLeft)
  takeint.appendChild(recordlist)
  window.localStorage.setItem("record",secondsLeft);
}
submitbtn.addEventListener("click", showRecord)



// clear button and go back button 
var gobackbtn = document.querySelector(".goback")
var clearbtn = document.querySelector(".clearHs")
clearbtn.addEventListener("click", function (){
recordlist.innerHTML="";
console.log ("working")
});

function storeinitials() {
  // Stringify and set "initials" key in localStorage to todos array
  window.localStorage.setItem(recordlistsecondsLeft);
}
var highscorelist = JSON.parse(localStorage.getItem("record"));







// Working with questions 
// create a variable name alltheQs that is an object of all the questions
var alltheQs = {
  question1: "A box without hinges, key, or lid, yet golden treasure inside is hid.",
  question2: "This thing all things devours.Birds, beasts, trees, flowers.Gnaws iron, bites steel; Grinds hard stones to meal;Slays king, ruins town,And beats high mountain down.",
  question3: "Alive without breath.As cold as death.Never thirsty, ever drinking.All in mail never clinking.",
  question4: "What has roots as nobody sees.Is taller than trees. Up, up it goes.And yet never grows?",
  question5: "Thirty white horses on a red hill, First they champ,Then they stamp,Then they stand still"
  }  

// name var that point to answer input 
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 
var currentQuestion = document.querySelector(".questionText");   
var result =document.querySelector(".card-footer")

var currentQuestion= alltheQs.question1
var q = document.getElementById("question_title")
q.innerHTML = currentQuestion
console.log(q)


// change answers for 2nd question
var changeq2= function changeanswer2() {
  q.innerHTML= alltheQs.question2 
  btn1.textContent = "A Clock";
  btn2.textContent = "Time";
  btn3.textContent = "A Stopwatch";
  btn4.textContent = "A Knife";
  }
// change answers for 3rd question
  var changeq3= function changeanswer3 () {
    q.innerHTML= alltheQs.question3
    btn1.textContent = "Bear",
    btn2.textContent = "Fish",
    btn3.textContent = "Wolf",
    btn4.textContent = "Snake"
  }
// // change answers for 4th question
  var changeq4= function changeanswer4 () {
    q.innerHTML= alltheQs.question4
    btn1.textContent = "Mountain",
    btn2.textContent = "River",
    btn3.textContent = "Ocean",
    btn4.textContent = "Sky"
  }

// change answers for 5th question
  var changeq5 = function changeanswer5 () {
  q.innerHTML= alltheQs.question5
  btn1.textContent = "The Night King's Army",
  btn2.textContent = "flock of doves",
  btn3.textContent = "teeth",
  btn4.textContent = "cows"
  }

// working with button 1 

btn1.addEventListener("click", function (){
  console.log('button1 is the correct answer for question 1 and 4')
  console.log (result)
  console.log (btn1)
  // 1 is the correct answer for question 1 
  result.textContent = "Correct"
if(currentQuestion == alltheQs.question1){
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question3
  deduct ()
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question4
  deduct ()
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "correct"
  currentQuestion=  alltheQs.question5

  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
  deduct ()
  showscore ()
  pauseTimer()
}
});

// working on button 2
btn2.addEventListener("click", function (){
  console.log('button2 is the correct answer for question 2 and 3')
  
  if(currentQuestion== alltheQs.question1){
    result.textContent = "Incorrect"
  currentQuestion= alltheQs.question2
  deduct ()
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  result.textContent = "Correct"
  currentQuestion=  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  result.textContent = "Correct"
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question5
  deduct ()
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
  deduct ()
  showscore ()
  pauseTimer()
}
});

// working with button 3
btn3.addEventListener("click", function (){
  console.log('button3 is the correct answer for question 5')
  if(currentQuestion== alltheQs.question1){
    result.textContent = "Incorrect"
  currentQuestion=alltheQs.question2
  deduct ()
  changeq2 ()
  
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question3
  deduct ()
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "Incorrect"
  currentQuestion =  alltheQs.question4
  deduct ()
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question5
  deduct ()
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "correct"
  deduct ()
  showscore ()
  pauseTimer()
}
});

// working with button 4
btn4.addEventListener("click", function (){
  console.log ("button 4 is not the correct answer for any question")
if(currentQuestion== alltheQs.question1){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question2
  deduct ()
  changeq2 ()
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion =  alltheQs.question3
  deduct ()
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "Incorrect"
  currentQuestion = alltheQs.question4
  deduct ()
  changeq4 ()
}
// 4 is the correct answer for question 4
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question5
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
  deduct ()
  showscore ()
  pauseTimer()
  // announceScore ()
}
});


// function storeinitials() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem(, JSON.stringify(todos));
// }



// localStorage.setItem("score", JSON.stringify(score));
    
// // get most recent submission
// var highscorelist = JSON.parse(localStorage.getItem("score"));


// // add event listener to go back and clear button 
// var gobackbtn = document.querySelector(".goback")
// var clearbtn = document.querySelector(".clearHs")

// gobackbtn.addEventListener("click", function (){

// })

// clearbtn.addEventListener("click", function (){
//   input.value= ""
// })