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
  question1: "A box without hinges, key, or lid, yet golden treasure inside is hid.",
  question2: "This thing all things devours.Birds, beasts, trees, flowers.Gnaws iron, bites steel; Grinds hard stones to meal;Slays king, ruins town,And beats high mountain down.",
  question3: "Alive without breath.As cold as death.Never thirsty, ever drinking.All in mail never clinking.",
  question4: "What has roots as nobody sees.Is taller than trees. Up, up it goes.And yet never grows?"
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
    btn1.textContent = "Mountain",
    btn2.textContent = "River",
    btn3.textContent = "Ocean",
    btn4.textContent = "Fish"
  }

var changeq4 = function changeanswer4 () {
q.innerHTML= alltheQs.question4
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
  result.textContent = "correct"
if(currentQuestion == alltheQs.question1){
  currentQuestion= alltheQs.question2
  changeq2 ()
  
}
else if(currentQuestion== alltheQs.question2){
  result.textContent = "incorrect"
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  result.textContent = "correct"
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "incorrect"
  // alert("All done!")
  window.location.href = './index.html'
}
});

// working on button 2
btn2.addEventListener("click", function (){
  console.log('button2 B is the correct answer')
  
  if(currentQuestion== alltheQs.question1){
    result.textContent = "incorrect"
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion== alltheQs.question2){
  result.textContent = "correct"
  currentQuestion=  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion==  alltheQs.question3){
  result.textContent = "incorrect"
  currentQuestion=  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion== alltheQs.question4){
  result.textContent = "incorrect"
  // alert("All done!")
  window.location.href = './index.html'
}
});


// working with button 3
btn3.addEventListener("click", function (){
  console.log('button3 C is the correct answer')
  if(currentQuestion== alltheQs.question1){
    result.textContent = "incorrect"
  currentQuestion=alltheQs.question2
  changeq2 ()
  
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "incorrect"
  currentQuestion= alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "correct"
  currentQuestion =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion ==  alltheQs.question4){
  result.textContent = "incorrect"
  // alert("All done!")
  window.location.href = './index.html'
}
});

// working with button 4
btn4.addEventListener("click", function (){
  console.log('btn 4 D is the correct answer')
if(currentQuestion== alltheQs.question1){
  result.textContent = "incorrect"
  currentQuestion= alltheQs.question2
  changeq2 ()
}
else if(currentQuestion == alltheQs.question2){
  result.textContent = "incorrect"
  currentQuestion =  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion ==  alltheQs.question3){
  result.textContent = "correct"
  currentQuestion = alltheQs.question4
  changeq4 ()
}
else if(currentQuestion==  alltheQs.question4){
  result.textContent = "incorrect"
  // alert("All done!")
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

//deduct point 
var incorrectAnswer = function() {
  secondsLeft = secondsLeft - 10
  }