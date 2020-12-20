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
var btnready =document.querySelector(".optionBtnRUready")

function ready() {
currentQuestion.textContent= "this is Question 1?";
}


// onclick function 
// if and else for button 1
btn1.onclick = function(){
  
    console.log('Btn 1 success!')

if(btn1= "banana"){
  // alert if answer is right 
    alert("correct!")
    currentQuestion.textContent= "this is Question 2?"
    btn1.textContent = "as2a"
    btn2.textContent = "as2b"
    btn3.textContent = "as2c"
    btn4.textContent = "as2d"
}

else {alert ("incorrect!")
currentQuestion.textContent= "this is Question 2?"
    btn1.textContent = "as2a"
    btn2.textContent = "as2b"
    btn3.textContent = "as2c"
    btn4.textContent = "as2d"}

// quesiton 2
else if(currentQuestion.innerHTML == question2.Qtitle){
    alert("incorrect!")
    currentQuestion.innerHTML = question3.Qtitle
    btn1 = question3.optionA
    btn2= question3.optionB
    btn3= question3.optionC
    btn4= question3.optionD
}


else if(currentQuestion.innerHTML == question3.Qtitle){
    alert("incorrect!")
    currentQuestion.innerHTML = question4.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question4.optionA
    document.querySelector(".optionBtn2").innerHTML = question4.optionB
    document.querySelector(".optionBtn3").innerHTML = question4.optionC
    document.querySelector(".optionBtn4").innerHTML = question4.optionD
}


else if(currentQuestion.innerHTML == question4.Qtitle){
    alert("incorrect!")
    
    window.location.href = 'practice.html'
}
}




// if and else for button 2
document.querySelector(".optionBtn2").onclick = function(){
    console.log('Btn 2 success!')
    if(currentQuestion.textContent= "this is Question 1?"){
    alert("incorrect!")
    currentQuestion.innerHTML = question2.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question2.optionA
    document.querySelector(".optionBtn2").innerHTML = question2.optionB
    document.querySelector(".optionBtn3").innerHTML = question2.optionC
    document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
    alert("correct!")
    currentQuestion.innerHTML = question3.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question3.optionA
    document.querySelector(".optionBtn2").innerHTML = question3.optionB
    document.querySelector(".optionBtn3").innerHTML = question3.optionC
    document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
    alert("incorrect!")
    currentQuestion.innerHTML = question4.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question4.optionA
    document.querySelector(".optionBtn2").innerHTML = question4.optionB
    document.querySelector(".optionBtn3").innerHTML = question4.optionC
    document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
    alert("incorrect!")
    alert("All done!")
    window.location.href = './index.html'
}
}

// if and else for button 3
document.querySelector(".optionBtn3").onclick = function(){
    console.log('Btn 3 success!')
    if(ccurrentQuestion.textContent= "this is Question 1?"){
    alert("incorrect!")
    currentQuestion.innerHTML = question2.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question2.optionA
    document.querySelector(".optionBtn2").innerHTML = question2.optionB
    document.querySelector(".optionBtn3").innerHTML = question2.optionC
    document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
    alert("incorrect!")
    currentQuestion.innerHTML = question3.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question3.optionA
    document.querySelector(".optionBtn2").innerHTML = question3.optionB
    document.querySelector(".optionBtn3").innerHTML = question3.optionC
    document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
    alert("correct!")
    currentQuestion.innerHTML = question4.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question4.optionA
    document.querySelector(".optionBtn2").innerHTML = question4.optionB
    document.querySelector(".optionBtn3").innerHTML = question4.optionC
    document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
    alert("incorrect!")
    alert("All done!")
    window.location.href = './index.html'
}
}

// if and else for button 4
document.querySelector(".optionBtn4").onclick = function(){
    console.log('Btn 4 success!')
if(currentQuestion.textContent= "this is Question 1?"){
    alert("correct!")
    currentQuestion.innerHTML = question2.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question2.optionA
    document.querySelector(".optionBtn2").innerHTML = question2.optionB
    document.querySelector(".optionBtn3").innerHTML = question2.optionC
    document.querySelector(".optionBtn4").innerHTML = question2.optionD
}
else if(currentQuestion.innerHTML == question2.Qtitle){
    alert("correct!")
    currentQuestion.innerHTML = question3.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question3.optionA
    document.querySelector(".optionBtn2").innerHTML = question3.optionB
    document.querySelector(".optionBtn3").innerHTML = question3.optionC
    document.querySelector(".optionBtn4").innerHTML = question3.optionD
}
else if(currentQuestion.innerHTML == question3.Qtitle){
    alert("correct!")
    currentQuestion.innerHTML = question4.Qtitle
    document.querySelector(".optionBtn1").innerHTML = question4.optionA
    document.querySelector(".optionBtn2").innerHTML = question4.optionB
    document.querySelector(".optionBtn3").innerHTML = question4.optionC
    document.querySelector(".optionBtn4").innerHTML = question4.optionD
}
else if(currentQuestion.innerHTML == question4.Qtitle){
    alert("correct!")
    alert("All done!")
    window.location.href = './practice.html'
}
}

// // keep score and save it 
//   // Capture Button Click
//   $("#add-user").on("click", function(event) {
//     // prevent form from trying to submit/refresh the page
//     event.preventDefault();

//     // Capture User Inputs and store them into variables
//     var name = $("#name-input").val().trim();
//     var email = $("#highScore-input").val().trim();
   

//     // Console log each of the user inputs to confirm we are receiving them
//     console.log(name);
//     console.log(email);
    

//     // Output all of the new information into the relevant HTML sections
//     $("#name-display").text(name);
//     $("#highScore-display").text(email);
    

//   });

  // // Capture Button Click to save name and high score
  // $("#add-user").on("click", function(event) {
  //   // prevent form from trying to submit/refresh the page
  //   event.preventDefault();

  //   // Capture User Inputs and store them into variables
  //   var name = $("#name-input").val().trim();
  //   var highScore = $("#highScore-input").val().trim();
   

  //   // Console log each of the user inputs to confirm we are receiving them
  //   console.log(name);
  //   console.log(highScore);
    

  //   // Output all of the new information into the relevant HTML sections
  //   $("#name-display").text(name);
  //   $("#highScore-display").text(highScore);
    

  // });


  // // Create an initial toDoCount variable
  // var highScoreCount = 0;

  // //  On Click event associated with the add-to-do function
  // $("#add-highScore").on("click", function(event) {
  //   event.preventDefault();

  //   // Get the to-do "value" from the textbox and store it a variable
  //   var highScorename = $("#highScore").val().trim();

  //   // Create a new variable that will hold a "<p>" tag.
  //   // Then give it an ID in the following form:
  //   // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
  //   // Then set the to-do "value" as text to this <p> element.
  //   var highScoreitem = $("<p>");

  //   highScoreItem.attr("id", "item-" + highScoreCount);
  //   HighScoreItem.text(highScoreName);

  //   // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
  //   // Give your button a data attribute called data-to-do and a class called "checkbox".
  //   // Lastly add a checkmark inside.

  //   var highScoreClose = $("<button>");

  //   highScoreClose.attr("data-to-do", highScoreCount);
  //   highScoreClose.addClass("checkbox");
  //   highScoreClose.text("x");

  //   // Append the button to the to do item
  //   highScoreItem = highScoreItem.prepend(highScoreClose);

  //   // Add the button and to do item to the to-dos div
  //   $("#to-dos").append(highScoreItem);

  //   // Clear the textbox when done
  //   $("#to-do").val("");

  //   // Add to the toDoCount
  //   highScoreCount++;
  // });

  // // When a user clicks a check box then delete the specific content
  // // (NOTE: Pay attention to the unusual syntax here for the click event.
  // // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
  // $(document.body).on("click", ".checkbox", function() {

  //   // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
  //   var hightScoreNumber = $(this).attr("data-to-do");

  //   // Select and Remove the specific <p> element that previously held the to do item number.
  //   //https://api.jquery.com/remove/
  //   //the .remove() method takes elements out of the DOM. Use .remove() when you want to remove the element itself, as well as everything inside it. 
  //   $("#item-" + highScoreNumber).remove();
  // });

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