# Code-Quiz

## Site Picture
![Site]()

# Table of Contents 
[Tittle](#Code-Quiz)

[Site Picutre](#Site-picture)

[Table of Contents](#Table-of-Content)

[Description of Page Building ](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Deployed Link](#Deployed-Link)

[Author](#Author)

[License](#License)


## Description of Page Building 
* Create a html file, a css file, and a javascript file
* In HTML file 
    <ol> 
    <li>Create nav bar with title and a clock on top of the page, give a timer of 100 seconds on the clock  </li>
    <li>Putting content in card using bootstraps for orgnized structures
    <li>Create a page with quiz rules and a start button. Quiz rules: Incorrect answer will deduct 10 seconds off the clock and the final score is the time left on the clock </li>
    <li>Create a page with question and answer choices</li>
    <li>Create a page that allow name and high score  input </li>
    <li>Create a page that save highscore record </li>
    </ol>
* In Javascript file 
    <ol> 
    <li> Name variables as pointer for functions. Use querySelector to traverse the Dom and apoint the elements 
    <li> Set timer for the clock countdown using setInterval function 
    <li> Use eventListener function for user input button choices
    <li> Apply conditional statements to provide result of user input choices 
    <li> Save user input and keep record 
    <li> Start the page again
    </ol>
* In Style.Css file 
    <ol>
    <li> Color buttons background 
    <li> Position clock to the left of the page 
    <li> Choose font and size for headers and body and text 
    <li> Alignt texts 
    </ol>
  




## Code Snippet

Set timer on the clock for quiz countdown 
```javascript
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
```
Name contents using variables 
```javascript
var btn1 = document.querySelector(".optionBtn1")
var btn2 =  document.querySelector(".optionBtn2")
var btn3 = document.querySelector(".optionBtn3")
var btn4 = document.querySelector(".optionBtn4") 
var currentQuestion = document.querySelector(".questionText");   
var result =document.querySelector(".card-footer")
```
Use addEventListener function to attaches on click event to button element
```javascript 
btn1.addEventListener("click", function (){
  console.log('button1 A is the correct answer')
  result.textContent = "correct"
if(currentQuestion == alltheQs.question1){
  currentQuestion= alltheQs.question2
  changeq2 ()
  ```
Create function to deduct times from incorrect answers 
```javascript 
var incorrectAnswer = function() {
  secondsLeft = secondsLeft - 10
  }
```

## Technologies Used
- HTML - used to create elements on the DOM
  * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS - styles html elements on page
  * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- Javascript - gives interacticve elements to web pages
  * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Bootstrap - design and customize responsive site
  * [Bootstrap](https://getbootstrap.com/)
- Git - version control system to track changes to source code
   * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)
  

## Deployed Link

* [See Live Site](https://vubao2303.github.io/code-quiz/)


## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://github.com/vubao2303)
- [Link to Github](https://github.com/vubao2303/code-quiz)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


