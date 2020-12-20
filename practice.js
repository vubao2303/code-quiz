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