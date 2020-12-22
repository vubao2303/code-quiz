// set timer here! 
// create pointer for time element 
var timeEl = document.querySelector(".time");
// asign the time limit 
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
    // provide place to put in high score 
}
setTime();


// bonusquestion (score  dont get deducted) Where are all these riddles come from? 
// a. Lord of the Ring b. the Hobbit c A Wizard of Earthsea d. Sorcerer to The Crown 

// intro div
// var intro=document.querySelector("#ready") 
// // all the questions are wrapped in card 
// var questionsInCard = document.querySelector(".wrapper");
// // when start button is clicked, then quesitions are show and intro get hidden 
// var startbtn =document.querySelector(".readdybtn")

// startbtn.addEventListener("click", function ()

// HIDE AND SEEK 
var eventType = document.querySelector("#event-type"); 
var questionsInCard = document.querySelector(".wrapper");
var intro=document.querySelector("#ready");
var startbtn =document.querySelector(".readybtn")
var introvalue = intro.style.display;
var score = document.querySelector("#score")
function show (){
  intro.style.display="none";
  questionsInCard.style.display= "block";
}
startbtn.addEventListener("click", show)

// 
function showscore (){
  questionsInCard.style.display="none";
  score.style.display= "block";
  console.log ("show score")
}





// Working with questions 
// name var for an object that has all the question value 
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



var changeq2= function changeanswer2() {
  q.innerHTML= alltheQs.question2 
  btn1.textContent = "A Clock";
  btn2.textContent = "Time";
  btn3.textContent = "A Stopwatch";
  btn4.textContent = "A Knife";
  }

  var changeq3= function changeanswer3 () {
    q.innerHTML= alltheQs.question3
    btn1.textContent = "Bear",
    btn2.textContent = "Fish",
    btn3.textContent = "Wolf",
    btn4.textContent = "Snake"
  }
  var changeq4= function changeanswer4 () {
    q.innerHTML= alltheQs.question4
    btn1.textContent = "Mountain",
    btn2.textContent = "River",
    btn3.textContent = "Ocean",
    btn4.textContent = "Sky"
  }

var changeq5 = function changeanswer5 () {
q.innerHTML= alltheQs.question5
btn1.textContent = "The Night King's Army",
  btn2.textContent = "flock of doves",
  btn3.textContent = "teeth",
  btn4.textContent = "cows"
  }



// working with button 1 
// btn1.addEventListener("click", function () {
//   changeq2();
// });

btn1.addEventListener("click", function (){
  console.log('button1 A is the correct answer')
  console.log (result)
  console.log (btn1)
  result.textContent = "Correct"
if(currentQuestion == alltheQs.question1){
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Incorrect"
  currentQuestion=  alltheQs.question4
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
    showscore ();
}
});

// working on button 2
btn2.addEventListener("click", function (){
  console.log('button2 B is the correct answer')
  
  if(currentQuestion== alltheQs.question1){
    result.textContent = "Incorrect"
  currentQuestion= alltheQs.question2
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
  result.textContent = "Correct"
  currentQuestion=  alltheQs.question4
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
    showscore ();
}
});


// working with button 3
btn3.addEventListener("click", function (){
  console.log('button3 C is the correct answer')
  if(currentQuestion== alltheQs.question1){
    result.textContent = "Incorrect"
  currentQuestion=alltheQs.question2
  changeq2 ()
  
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "Correct"
  currentQuestion =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Correct"
  currentQuestion=  alltheQs.question4
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
    showscore ();
}
});

// working with button 4
btn4.addEventListener("click", function (){
if(currentQuestion== alltheQs.question1){
  result.textContent = "Incorrect"
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "Incorrect"
  currentQuestion =  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "Correct"
  currentQuestion = alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "Correct"
  currentQuestion=  alltheQs.question4
  changeq5 ()
}
else if(currentQuestion==  alltheQs.question5){
  result.textContent = "Incorrect"
    showscore ();
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

//deduct point 
var incorrectAnswer = function() {
  if (incorrectAnswer=== "Incorrect") {
  secondsLeft = secondsLeft - 10
  }
  }

  // if ((result==="Correct")||(result==="Incorrect")) function next (){
  //   onclick="changeq2();changeq3();changeq4();changeq5();" }

  //   // hide and show divs divs in in html but hide funtion using js 

  //   // 

//   var eventType = document.querySelector("#event-type"); 
// var mouseEventsEl = document.querySelector("#click-events");
// var keyEventsEl = document.querySelector("#key-events");

// function toggleDisplay(event) {

//   console.log(event.target);
//   console.log("Value : " , event.target.value);
  
//   var value = event.target.value;
//   if(value === "keydown") {
//     mouseEventsEl.classList.add("hide");
//     keyEventsEl.classList.remove("hide");
//   }
//   else {
//     mouseEventsEl.classList.remove("hide");
//     keyEventsEl.classList.add("hide");
//   }
// }
// eventType.addEventListener("change", toggleDisplay);




// var questionsInCard = document.querySelector(".wrapper");
// function 
// // ?if start button click then show else hide 

// // // write code here 


// // var hsInput = document.querySelector("#highscoreInput")
// // function 
// // // when funtion alert "Game Over" show else hide 



// // // view High Score bar 


// // When time is up or last quesiton is answered , function high score came 