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


B idea number 1 
var currentQuestion = document.querySelector(".questionText");  
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 

        
  // question 1 change the question text to question1 

currentQuestion.textContent= "this is Question 1?"

  // alert if answer is right right answer was A, button 1

  if(btn1.onclicked === true) {
    alert("correct!")
// and the next function happen here 
function question2 (){
  currentQuestion.textContent= "this is Question 2?"
  btn1.textContent = "as2a"
  btn2.textContent = "as2b"
  btn3.textContent = "as2c"
  btn4.textContent = "as2d"}
}

// if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
else if (btn2.onclick){
    alert("incorrect!")
    function question2 (){
    currentQuestion.textContent= "this is Question 2?"
    btn1.textContent = "as2a"
    btn2.textContent = "as2b"
    btn3.textContent = "as2c"
    btn4.textContent = "as2d"}
}
else if (btn3.onclick){
  alert("incorrect!")
  function question2 (){
  currentQuestion.textContent= "this is Question 2?"
  btn1.textContent = "as2a"
  btn2.textContent = "as2b"
  btn3.textContent = "as2c"
  btn4.textContent = "as2d"}
}
else if (btn4.onclick){
  alert("incorrect!")
  function question2 (){
  currentQuestion.textContent= "this is Question 2?"
  btn1.textContent = "as2a"
  btn2.textContent = "as2b"
  btn3.textContent = "as2c"
  btn4.textContent = "as2d"}
}
var Qs = function question2 (){
  currentQuestion.textContent= "this is Question 2?"
  btn1.textContent = "as2a"
  btn2.textContent = "as2b"
  btn3.textContent = "as2c"
  btn4.textContent = "as2d"}



// question 2 
currentQuestion.textContent= "this is Question 2?"
// the right answer is B, so if btn2 is clicked, then alert correct
  if(btn2.onclicked === true) {
    alert("correct!")
// and the next function happen here 
function question3 (){
  currentQuestion.textContent= "this is Question 3?"
  btn1.textContent = "as3a"
  btn2.textContent = "as3b"
  btn3.textContent = "as3c"
  btn4.textContent = "as3d"}
}

// if any button other than btn2 was clicked, then its incorrect
else function question3(){
    alert("incorrect!")

    function question3 (){
    currentQuestion.textContent= "this is Question 3?"
    btn1.textContent = "as3a"
    btn2.textContent = "as3b"
    btn3.textContent = "as3c"
    btn4.textContent = "as3d"}
}
question3 ()


// question 3
currentQuestion.textContent= "this is Question 3?"
// the right answer is B, so if btn2 is clicked, then alert correct
  if(btn3.onclicked === true) {
    alert("correct!")
  }

// if any button other than btn2 was clicked, then its incorrect
else function question3(){
    alert("incorrect!")
}

// B Idead number 2 

btn1.addEventListener("click", function(event) {
  event.preventDefault();
  alert ("correct")
  currentQuestion.textContent= "this is Question 2?"
  btn1.textContent = "as2a"
  btn2.textContent = "as2b"
  btn3.textContent = "as2c"
  btn4.textContent = "as2d"
});




// splitEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   var total = document.querySelector("#new-total").textContent;
//   var numPeople = document.querySelector("#num-people").value;
  
//   var newTotal = (total / numPeople).toFixed(2);
//   document.querySelector("#split-total").textContent = newTotal;
// });








      // // Create an initial toDoCount variable
      // var highScoreCount = 0;
  
      // //  On Click event associated with the add-highscore function
      // $("#add-highScore").on("click", function(event) {
      //   event.preventDefault();
  
      //   // Get the highScore valuefrom the textbox and store it a variable
      //   var inputHighScore = $("#hightScore").val().trim();

  
      //   // Create a new variable that will hold a "<p>" tag.
      //   // Then give it an ID in the following form:
      //   // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
      //   // Then set the to-do "value" as text to this <p> element.
      //   var highScorerecord = $("<p>");
  
      //   highScorerecord.attr("id", "item-" + highScoreCount);
      //   highScorerecord.text(inputHighScore);
  
      //   // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      //   // Give your button a data attribute called data-to-do and a class called "checkbox".
      //   // Lastly add a checkmark inside.
  
      //   var hsClose = $("<button>");
  
      //   hsClose.attr("data-to-do", highScoreCount);
      //   hsClose.addClass("checkbox");
      //   hsClose.text("x");
  
      //   // Append the button to the to do item
      //   highScorerecord = highScorerecord.prepend(hsClose);
  
      //   // Add the button and to do item to the to-dos div
      //   $("#hS").append(highScorerecord);
  
      //   // Clear the textbox when done
      //   $("#highScore").val("");
  
      //   // Add to the toDoCount
      //   highScoreCount++;
      // });
  
      // // When a user clicks a check box then delete the specific content
      // // (NOTE: Pay attention to the unusual syntax here for the click event.
      // // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
      // $(document.body).on("click", ".checkbox", function() {
  
      //   // Get the number of the button from its data attribute and hold in a variable called  hsNumber.
      //   var hsNumber = $(this).attr("data-to-do");
  
      //   // Select and Remove the specific <p> element that previously held the to do item number.
      //   //https://api.jquery.com/remove/
      //   //the .remove() method takes elements out of the DOM. Use .remove() when you want to remove the element itself, as well as everything inside it. 
      //   $("#item-" + hsNumber).remove();
      // })

      

    //  THIRD TRY
var currentQuestion = document.querySelector(".questionText");  
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 

var questions = 
  {question1=[
    currentQuestion.textContent= "this is Question 1?",
    btn1.textContent = "as1a",
    btn2.textContent = "as2b",
    btn3.textContent = "as3c",
    btn4.textContent = "as4d",
  ]},
  {question2 =[
    currentQuestion.textContent= "this is Question 2?",
    btn1.textContent = "as2a",
    btn2.textContent = "as2b",
    btn3.textContent = "as2c",
    btn4.textContent = "as2d",
  ]},
  {question2 =[
    currentQuestion.textContent= "this is Question 1?",
  btn1.textContent = "as1a",
  btn2.textContent = "as2b",
  btn3.textContent = "as3c",
  btn4.textContent = "as4d",
  ]}

  if (currrentQuestion= questions.question1) {
    document.querySelector(".optionBtn1").onclick = function(){
    console.log('Btn 1 success!')
    alert("correct!")
    currentQuestion= questions.question2
  }
}

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

if (currentQuestion= alltheQs.question1) {
  btn1.textContent = "as1a",
  btn2.textContent = "as1b",
  btn3.textContent = "as1c",
  btn4.textContent = "as1d"
}

if (currentQuestion= alltheQs.question2) {
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"
}

if (currentQuestion= alltheQs.question3) {
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"
}

// working on button 1 (answer A)
currentQuestion= alltheQs.question1
btn1.onclick = function() {
  console.log ("this is button 1")
  if(currentQuestion === alltheQs.question1){
    alert("correct!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// working on button 2 (answer B)
currentQuestion= alltheQs.question2
// correct answer B 
btn2.onclick = function() {
  console.log ("this is button 2")
  if(currentQuestion === alltheQs.question1){
    alert("incorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("correct!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// working on button 3 (answer C)
currentQuestion= alltheQs.question3
// correct answer C
btn3.onclick = function() {
  console.log ("this is button 3")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("correct!")
  // pop out a card for high score here 
}
}

// working on button 4 (answer D)

btn1.onclick = function() {
  console.log ("this is button 4")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

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

if (currentQuestion= alltheQs.question1) {
  function changeanswer1 (){
  btn1.textContent = "as1a",
  btn2.textContent = "as1b",
  btn3.textContent = "as1c",
  btn4.textContent = "as1d"
  }
}

if (currentQuestion= alltheQs.question2) {
  function changeanswer2() {
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"
  }
}

if (currentQuestion= alltheQs.question3) {
  function changeanswer3 (){
  btn1.textContent = "as2a",
  btn2.textContent = "as2b",
  btn3.textContent = "as2c",
  btn4.textContent = "as2d"
  }
}

// working on button 1 (answer A)
currentQuestion= alltheQs.question1
btn1.onclick = function() {
  console.log ("this is button 1")
  if(currentQuestion === alltheQs.question1){
    alert("correct!")
    currentQuestion = alltheQs.question2;
    function changeanswer2 ()
  }
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
  function changeanswer3 ()
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// working on button 2 (answer B)
currentQuestion= alltheQs.question2
// correct answer B 
btn2.onclick = function() {
  console.log ("this is button 2")
  if(currentQuestion === alltheQs.question1){
    alert("incorrect!")
    currentQuestion = alltheQs.question2
    function changeanswer2 ()
}
else if(currentQuestion === alltheQs.question2){
  alert("correct!")
  currentQuestion= alltheQs.question3
  function changeanswer3 ()
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// working on button 3 (answer C)
currentQuestion= alltheQs.question3
// correct answer C
btn3.onclick = function() {
  console.log ("this is button 3")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
    function changeanswer2 ()
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
  function changeanswer3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("correct!")
  // pop out a card for high score here 
}
}

// working on button 4 (answer D)

btn1.onclick = function() {
  console.log ("this is button 4")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
    function changeanswer2 ()
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
  function changeanswer3 ()
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// questions to fill in 
// question 1  correct 1
// "A box without hinges, key, or lid, yet golden treasure inside is hid."
    a. an egg 
// b. the Sun 
// c. the Moon
// d. a treasure box 


Quesion2  answer b
// This thing all things devours:
// Birds, beasts, trees, flowers;
// Gnaws iron, bites steel;
// Grinds hard stones to meal;
// Slays king, ruins town,
// And beats high mountain down.
a. a clock  b. time c. a stopwatch d. tree 


question3 answer C
Alive without breath,
As cold as death;
Never thirsty, ever drinking,
All in mail never clinking.
a.Leaves b. wind c. Fish d. water 

// question4 answer a 
What has roots as nobody sees,
Is taller than trees,
Up, up it goes,
And yet never grows?
a. A mountain b. a river c.an ocean d. a rock 

// question 5 anwer c
Thirty white horses on a red hill,
First they champ,
Then they stamp,
Then they stand still.
a. aspen trees b. herd of horses c. teeth d. cows 



bonusquestion (score  dont get deducted) Where are all these riddles come from? 
a. Lord of the Ring b. the Hobbit c A Wizard of Earthsea d. Sorcerer to The Crown 


// FOURTH TRY 

// working on button 2 (answer B)
currentQuestion= alltheQs.question2
// correct answer B 
btn2.onclick = function() {
  console.log ("this is button 2")
  if(currentQuestion === alltheQs.question1){
    alert("incorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("correct!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// working on button 3 (answer C)
currentQuestion= alltheQs.question3
// correct answer C
btn3.onclick = function() {
  console.log ("this is button 3")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("correct!")
  // pop out a card for high score here 
}
}

// working on button 4 (answer D)

btn4.onclick = function() {
  console.log ("this is button 4")
  if(currentQuestion === alltheQs.question1){
    alert("icorrect!")
    currentQuestion = alltheQs.question2
}
else if(currentQuestion === alltheQs.question2){
  alert("incorrect!")
  currentQuestion= alltheQs.question3
}
else if (currentQuestion === alltheQs.question3){ 
  alert ("incorrect!")
  // pop out a card for high score here 
}
}

// allow user to add input and save that input 



// fourth TRY T_T 
var currentQuestion = document.querySelector(".questionText");  
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 

var allTheQs = [
  questionOne: {
    question: "This is the question?",
    choiceOne: "This is a choice",
    choiceTwo: "This is another choice",
    choiceThree: "And another choice",
    answer: "This is another choice"
 },
   questionTwo: {
    question: "This is the question?",
    choiceOne: "This is a choice",
    choiceTwo: "This is another choice",
    choiceThree: "And another choice",
    answer: "This is a choice"
  }
]

var currentQuestion = 0;

allTheQs[currentQuestion].question

var questionOne =function changeanswer1 (){
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
  btn1.textContent = "as3a",
  btn2.textContent = "as3b",
  btn3.textContent = "as3c",
  btn4.textContent = "as3d"
  
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
btn1.addEventListener("click", function changeanswer3 () {
  currentQuestion= alltheQs.question3
  btn1.textContent = "as3a",
  btn2.textContent = "as3b",
  btn3.textContent = "as3c",
  btn4.textContent = "as3d"
alert("incorrect!")
});


// // if any other buttons that wasn't btn 1 was clicked, alert incorrect and go on with question 2
// else if (btn2.onclick){
//   alert("correct!")
//   function changeanswer3 ()
//   {
//     currentQuestion= alltheQs.question3
//     btn1.textContent = "as3a",
//     btn2.textContent = "as3b",
//     btn3.textContent = "as3c",
//     btn4.textContent = "as3d"
    
//   }
// }


var changeq2= function changeanswer2() {
  btn1.textContent = "as2a";
  btn2.textContent = "as2b";
  btn3.textContent = "as2c";
  btn4.textContent = "as2d";
}

btn1.addEventListener("click", function () {
  changeanswer2();
});
btn2.addEventListener("click", function () {
  changeanswer2();
});





btn1.addEventListener("click", function () {

  changeanswer2();
});

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


// try 20000000000000000000000k-----------------------------------000000000000000000
var alltheQs = {
  question1: "this is q1",
  question2: "this is q2",
  question3: "this is q3",
  question4: "this is question4"
  }

var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 
var currentQuestion = document.querySelector(".questionText");   

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

document.querySelector(".questionText").innerHTML = alltheQs.question1

// working with button 1 
document.querySelector(".optionBtn1").onclick = function(){
  console.log('Btn 1 success!')
if(currentQuestion.innerHTML == alltheQs.question1){
  alert("correct!")
  currentQuestion.innerHTML = alltheQs.question2
  changeq2 ()
}
else if(currentQuestion.innerHTML == alltheQs.question2){
  alert("incorrect!")
  currentQuestion.innerHTML = alltheQs.question3
  changeq3 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question3){
  alert("incorrect!")
  currentQuestion.innerHTML =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
}

// working on button 2
document.querySelector(".optionBtn2").onclick = function(){
  console.log('Btn 2 success!')
  if(currentQuestion.innerHTML == alltheQs.question1){
  alert("incorrect!")
  currentQuestion.innerHTML = alltheQs.question2
  changeq2 ()
}
else if(currentQuestion.innerHTML == alltheQs.question2){
  alert("correct!")
  currentQuestion.innerHTML =  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question3){
  alert("incorrect!")
  currentQuestion.innerHTML =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion.innerHTML == alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
}


// working with button 3
document.querySelector(".optionBtn3").onclick = function(){
  console.log('Btn 3 success!')
  if(currentQuestion.innerHTML == alltheQs.question1){
  alert("incorrect!")
  currentQuestion.innerHTML =alltheQs.question2
  changeq2 ()
  
}
else if(currentQuestion.innerHTML == alltheQs.question2){
  alert("incorrect!")
  currentQuestion.innerHTML = alltheQs.question3
  changeq3 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question3){
  alert("correct!")
  currentQuestion.innerHTML =  alltheQs.question4
  changeq4 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question4){
  alert("incorrect!")
  alert("All done!")
  window.location.href = './index.html'
}
}

// working with button 4
document.querySelector(".optionBtn4").onclick = function(){
  console.log('Btn 4 success!')
if(currentQuestion.innerHTML == alltheQs.question1){
  alert("correct!")
  currentQuestion.innerHTML = alltheQs.question2
  changeq2 ()
}
else if(currentQuestion.innerHTML == alltheQs.question2){
  alert("correct!")
  currentQuestion.innerHTML =  alltheQs.question3
  changeq3 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question3){
  alert("correct!")
  currentQuestion.innerHTML = alltheQs.question4
  changeq4 ()
}
else if(currentQuestion.innerHTML ==  alltheQs.question4){
  alert("correct!")
  alert("All done!")
  window.location.href = './index.html'
}


//  // set timer here! 
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

// questions to fill in 
// // question 1  correct 1
// // "A box without hinges, key, or lid, yet golden treasure inside is hid."
//     a. an egg 
// // b. the Sun 
// // c. the Moon
// // d. a treasure box 


// Quesion2  answer b
// // This thing all things devours:
// // Birds, beasts, trees, flowers;
// // Gnaws iron, bites steel;
// // Grinds hard stones to meal;
// // Slays king, ruins town,
// // And beats high mountain down.
// a. a clock  b. time c. a stopwatch d. tree 


// question3 answer C
// Alive without breath,
// As cold as death;
// Never thirsty, ever drinking,
// All in mail never clinking.
// a.Leaves b. wind c. Fish d. water 

// // question4 answer a 
// What has roots as nobody sees,
// Is taller than trees,
// Up, up it goes,
// And yet never grows?
// a. A mountain b. a river c.an ocean d. a rock 

// // question 5 anwer c
// Thirty white horses on a red hill,
// First they champ,
// Then they stamp,
// Then they stand still.
// a. aspen trees b. herd of horses c. teeth d. cows 



// bonusquestion (score  dont get deducted) Where are all these riddles come from? 
// a. Lord of the Ring b. the Hobbit c A Wizard of Earthsea d. Sorcerer to The Crown 


// trying eventlisterner //////////EVENT LISTENERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
// EVENT LISTEENER RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// Working with questions 
// name var for an object that has all the question value 
var alltheQs = {
  question1: "this is q1",
  question2: "this is q2",
  question3: "this is q3",
  question4: "this is question4"
  }

// name var that point to answer input 
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 
var currentQuestion = document.querySelector(".questionText");   

var changeq2= function changeanswer2() {
  currentQuestion.textContent= "this is def q2"
  btn1.textContent = "as2a";
btn2.textContent = "as2b";
btn3.textContent = "as2c";
btn4.textContent = "as2d";
}
  var changeq3= function changeanswer3 () {
    currentQuestion.textContent= "this is def q3"
    btn1.textContent = "as3a",
    btn2.textContent = "as3b",
    btn3.textContent = "as3c",
    btn4.textContent = "as3d"
  }

var changeq4 = function changeanswer4 () {
  currentQuestion.textContent= "this is def q4"
  btn1.textContent = "as4a",
btn2.textContent = "as4b",
btn3.textContent = "as4c",
btn4.textContent = "as4d"

}

document.querySelector(".questionText").innerHTML = alltheQs.question1

// working with question 1 
btn1.addEventListener("click", function () {
  changeq2();
});
btn2.addEventListener("click", function () {
  changeq2();
});
btn3.addEventListener("click", function () {
  changeq2();
});
btn4.addEventListener("click", function () {
  changeq2();
});

// working with question 2 
document.querySelector(".questionText") = alltheQs.question2

btn1.addEventListener("click", function () {
  changeq3();
});
btn2.addEventListener("click", function () {
  changeq3();
});
btn3.addEventListener("click", function () {
  changeq3();
});
btn4.addEventListener("click", function () {
  changeq3();
});

// working with question 3 
btn1.addEventListener("click", function () {
  changeq4();
});
btn2.addEventListener("click", function () {
  changeq4();
});
btn3.addEventListener("click", function () {
  changeq4();
});
btn4.addEventListener("click", function () {
  changeq4();
});

// working with question 4 
btn1.addEventListener("click", function () {
  // highscore 
});
btn2.addEventListener("click", function () {
  // highscore 
});
btn3.addEventListener("click", function () {
  // highscore 
});
btn4.addEventListener("click", function () {
  //  highscore 
});



// btn1.onclick = function(){
//   console.log('button1 A is the correct answer')
// if(currentQuestion.innerHTML == alltheQs.question1){
//   alert("correct!")
//   currentQuestion.innerHTML = alltheQs.question2
//   changeq2 ()
// }
// else if(currentQuestion.innerHTML == alltheQs.question2){
//   alert("incorrect!")
//   currentQuestion.innerHTML = alltheQs.question3
//   changeq3 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question3){
//   alert("incorrect!")
//   currentQuestion.innerHTML =  alltheQs.question4
//   changeq4 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question4){
//   alert("incorrect!")
//   alert("All done!")
//   window.location.href = './index.html'
// }
// }

// // working on button 2
// btn2.onclick = function(){
//   console.log('button2 B is the correct answer')
//   if(currentQuestion.innerHTML == alltheQs.question1){
//   alert("incorrect!")
//   currentQuestion.innerHTML = alltheQs.question2
//   changeq2 ()
// }
// else if(currentQuestion.innerHTML == alltheQs.question2){
//   alert("correct!")
//   currentQuestion.innerHTML =  alltheQs.question3
//   changeq3 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question3){
//   alert("incorrect!")
//   currentQuestion.innerHTML =  alltheQs.question4
//   changeq4 ()
// }
// else if(currentQuestion.innerHTML == alltheQs.question4){
//   alert("incorrect!")
//   alert("All done!")
//   window.location.href = './index.html'
// }
// }


// // working with button 3
// bt3.onclick = function(){
//   console.log('button3 C is the correct answer')
//   if(currentQuestion.innerHTML == alltheQs.question1){
//   alert("incorrect!")
//   currentQuestion.innerHTML =alltheQs.question2
//   changeq2 ()
  
// }
// else if(currentQuestion.innerHTML == alltheQs.question2){
//   alert("incorrect!")
//   currentQuestion.innerHTML = alltheQs.question3
//   changeq3 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question3){
//   alert("correct!")
//   currentQuestion.innerHTML =  alltheQs.question4
//   changeq4 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question4){
//   alert("incorrect!")
//   alert("All done!")
//   window.location.href = './index.html'
// }
// }

// // working with button 4
// btn4.onclick = function(){
//   console.log('btn 4 D is the correct answer')
// if(currentQuestion.innerHTML == alltheQs.question1){
//   alert('button4 D is the correct answer')
//   currentQuestion.innerHTML = alltheQs.question2
//   changeq2 ()
// }
// else if(currentQuestion.innerHTML == alltheQs.question2){
//   alert("correct!")
//   currentQuestion.innerHTML =  alltheQs.question3
//   changeq3 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question3){
//   alert("correct!")
//   currentQuestion.innerHTML = alltheQs.question4
//   changeq4 ()
// }
// else if(currentQuestion.innerHTML ==  alltheQs.question4){
//   alert("correct!")
//   alert("All done!")
//   window.location.href = './index.html'
// }
// }

// questions to fill in 
// // question 1  correct 1
// // "A box without hinges, key, or lid, yet golden treasure inside is hid."
//     a. an egg 
// // b. the Sun 
// // c. the Moon
// // d. a treasure box 


// Quesion2  answer b
// // This thing all things devours:
// // Birds, beasts, trees, flowers;
// // Gnaws iron, bites steel;
// // Grinds hard stones to meal;
// // Slays king, ruins town,
// // And beats high mountain down.
// a. a clock  b. time c. a stopwatch d. tree 


// question3 answer C
// Alive without breath,
// As cold as death;
// Never thirsty, ever drinking,
// All in mail never clinking.
// a.Leaves b. wind c. Fish d. water 

// // question4 answer a 
// What has roots as nobody sees,
// Is taller than trees,
// Up, up it goes,
// And yet never grows?
// a. A mountain b. a river c.an ocean d. a rock 

// // question 5 anwer c
// Thirty white horses on a red hill,
// First they champ,
// Then they stamp,
// Then they stand still.
// 



// TO USEEEEEEEEEE FOOOOOORRRRRRRRRRRR QQQQQQQEUUUUUUSSSSSTTTTTTTIOOOOOOOOOOOONNNNNNNNNNN
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
var currentQuestion = document.querySelector(".questionText")
var feedback =document.querySelector(".card-footer")

var changeq1 = function changeanswer1 () {
  btn1.textContent = "An Egg";
  btn2.textContent = "The Sun";
  btn3.textContent = "The Moon";
  btn4.textContent = "A Tresure Box";
  }

  var changeq2= function changeanswer2() {
  btn1.textContent = "A Clock";
  btn2.textContent = "Time";
  btn3.textContent = "A Stopwatch";
  btn4.textContent = "A Knife";
  }
  var changeq3= function changeanswer3 () {
    btn1.textContent = "Mountain",
    btn2.textContent = "River",
    btn3.textContent = "Ocean",
    btn4.textContent = "Rock"
  }

  var changeq4 = function changeanswer4 () {
  btn1.textContent = "The Night King's Army",
  btn2.textContent = "flock of doves",
  btn3.textContent = "teeth",
  btn4.textContent = "cows"
  }

  if result = incorrect) function nextquestion () {
    changeq2 (), 
  
  )
  var nextquestion = function next () {
    changeq2 ();
    changeq3 ();
  }
  onclick="changeq2();changeq3();changeq4();changeq5()" 

//   <p>Click the "Try it" button to toggle between hiding and showing the DIV element:</p>

// <button onclick="myFunction()">Try it</button>

// <div id="myDIV">
// This is my DIV element.
// </div>

// <p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>

// <script>
// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// </script>

var eventType = document.querySelector("#event-type"); 
var questionsInCard = document.querySelector(".wrapper");
var intro=document.querySelector("#ready");
var startbtn =document.querySelector(".readdybtn")
var introvalue = intro.style.display;
function show (){
if (introvalue=='block') {
  intro.style.display='none';
  starbtn.innerHTML="show card";
  
}

else {
  into.style.dislay="block";
  startbtn.innerHTML ='hide card';}
}

  }
if (intro=='ready')


else 

var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {

  console.log(event.target);
  console.log("Value : " , event.target.value);
  
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}
eventType.addEventListener("change", toggleDisplay);




startbtn.addEventListener("click", function () {

  console.log(event.target);
  console.log("Value : " , event.target.value);
  
  var value = event.target.value;
  if(value === "keydown") {
    questionsInCard.classList.add("hide");
    intro.classList.remove("hide");
  }
  else {
    questionsInCard.classList.remove("hide");
    intro.classList.add("hide");
  }
}
eventType.addEventListener("change", toggleDisplay);



var intro=document.querySelector("#ready") 

var questionsInCard = document.querySelector(".wrapper");
var startbtn =document.querySelector(".readdybtn")
startbtn.addEventListener("click", function ()



<button class="readybtn" > START </button>



<div class="todos">
  <form id="todo-form" method="POST">
    <label for="todo-text">Add a Todo:</label>
    <input type="text" placeholder="What needs to be done?" name="todo-text" id="todo-text" />
  </form>

  <ul id="todo-list"> push it in here </ul>
</div>

<form>
  <span id="highScore">Enter Initials <input id="highScore" type="text" ><input id="add-highScore" value="submit" type="submit"></span>
</form>

<ul id="highscorelist"> push it in here </ul>
var initials= document.query

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Re-render the list
    renderTodos();
  }