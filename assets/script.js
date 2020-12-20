var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft = secondsLeft - 2 ;
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


// B idea
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
else function question2(){
    alert("incorrect!")
    function question2 (){
    currentQuestion.textContent= "this is Question 2?"
    btn1.textContent = "as2a"
    btn2.textContent = "as2b"
    btn3.textContent = "as2c"
    btn4.textContent = "as2d"}
}
question2 ()



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









      // Create an initial toDoCount variable
      var highScoreCount = 0;
  
      //  On Click event associated with the add-highscore function
      $("#add-highScore").on("click", function(event) {
        event.preventDefault();
  
        // Get the highScore valuefrom the textbox and store it a variable
        var inputHighScore = $("#hightScore").val().trim();

  
        // Create a new variable that will hold a "<p>" tag.
        // Then give it an ID in the following form:
        // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
        // Then set the to-do "value" as text to this <p> element.
        var highScorerecord = $("<p>");
  
        highScorerecord.attr("id", "item-" + highScoreCount);
        highScorerecord.text(inputHighScore);
  
        // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
        // Give your button a data attribute called data-to-do and a class called "checkbox".
        // Lastly add a checkmark inside.
  
        var hsClose = $("<button>");
  
        hsClose.attr("data-to-do", highScoreCount);
        hsClose.addClass("checkbox");
        hsClose.text("x");
  
        // Append the button to the to do item
        highScorerecord = highScorerecord.prepend(hsClose);
  
        // Add the button and to do item to the to-dos div
        $("#hS").append(highScorerecord);
  
        // Clear the textbox when done
        $("#highScore").val("");
  
        // Add to the toDoCount
        highScoreCount++;
      });
  
      // When a user clicks a check box then delete the specific content
      // (NOTE: Pay attention to the unusual syntax here for the click event.
      // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
      $(document.body).on("click", ".checkbox", function() {
  
        // Get the number of the button from its data attribute and hold in a variable called  hsNumber.
        var hsNumber = $(this).attr("data-to-do");
  
        // Select and Remove the specific <p> element that previously held the to do item number.
        //https://api.jquery.com/remove/
        //the .remove() method takes elements out of the DOM. Use .remove() when you want to remove the element itself, as well as everything inside it. 
        $("#item-" + hsNumber).remove();
      });