import { hipHopQuestions } from './hiphopQuestions.js';
import { popQuestions } from './popQuestions.js';
import { countryQuestions } from './countryQuestions.js';

let questions = []
let questionIndex = 0;
let score = 0;

let nextButton = document.querySelector(".next");
let checkButton = document.querySelector(".check");
let restartButton = document.querySelector(".restart");
let hhButton = document.querySelector(".hh1");
let popButton = document.querySelector(".pop");
let countryButton = document.querySelector(".country");
let scoreBox = document.querySelector(".score")
let title = document.querySelector(".frontText")

function startGame(e) {
  let selection = e.target.innerText
  
  title.classList.add("hide")
  if (selection === "Hip-Hop") {
    questions = hipHopQuestions;
  } else if (selection === "Pop") {
    questions = popQuestions;
  } else if (selection === "Country") {
    questions = countryQuestions;
  } else {
    questions = hipHopQuestions;l
  }

  shuffleQuestion();
  displayQuestion();
  questionIndex = 0;
  restartButton.classList.remove("hide");
  nextButton.classList.remove("hide");
  checkButton.classList.remove("hide");
  hhButton.classList.toggle("hide");
  popButton.classList.toggle("hide");
  countryButton.classList.toggle("hide");
}

// // shuffle questions
function shuffleQuestion() {
  let newQuestions = [];
  newQuestions = questions.sort((a, b) => 0.5 - Math.random());
}

function handleNextQuestion() {
  questionIndex++;
  displayQuestion();
  // Clears the displayed answer and returns it back to default
  let clearDiv = document.querySelector(".check");
  clearDiv.innerHTML = "Check Answer";
}

function displayQuestion() {
  let questionDiv = document.querySelector(".question");
  questionDiv.innerHTML = "";

  // declare a variable to set the index to zero
  let question = questions[questionIndex].question;
  let choices = questions[questionIndex].answers.choices;

  let questionText = `
    <div class="content">
        <h1>${question}</h1>
        <h3>Click One</h3>
        <ul>
        <input type="radio" name="choice" value="${choices[0]}"> ${choices[0]} <br>
        <input type="radio" name="choice" value="${choices[1]}"> ${choices[1]} <br>
        <input type="radio" name="choice" value="${choices[2]}"> ${choices[2]} <br>
        <input type="radio" name="choice" value="${choices[3]}"> ${choices[3]} <br>
        </ul>
    </div>
   `;
  questionDiv.insertAdjacentHTML("beforeend", questionText);
}

function checkAnswer() {
  let userChoice = document.querySelector("input[name=choice]:checked").value;
  if (userChoice === questions[questionIndex].answers.correct) {
    // What do you want to do when they get it right?
    let checkDiv = document.querySelector(".check");
    checkDiv.innerHTML = "";
    let answerText = "You got it right!!!";
    checkDiv.insertAdjacentHTML("beforeend", answerText);
    score += 5
    scoreBox.innerText = score
  } else {
    // What do you want to do when they get it wrong?
    let wrongDiv = document.querySelector(".check");
    wrongDiv.innerHTML = "";
    let wrongText = "My Guy! Seriously!!";
    wrongDiv.insertAdjacentHTML("beforeend", wrongText);
    score -= 3
    scoreBox.innerText = score
  }
}

// function displayWinner() {
//   if ( scoreBox.innerText === 100) {
//     let winnerDiv = document.querySelector(".check");
//     winnerDiv.innerHTML = "";
//     let winnerText = "You've WON!!!";
//     winnerDiv.insertAdjacentHTML("beforebegin", winnerText)
//   } else {
//     let loserDiv = document.querySelector(".check");
//     loserDiv.innerHTML = "";
//     let loserText = "Sorry! Try Again";
//     loserDiv.insertAdjacentHTML("beforebegin", loserText)
//   }
// // }

// displayWinner();

nextButton.addEventListener("click", handleNextQuestion);
checkButton.addEventListener("click", checkAnswer);
hhButton.addEventListener("click", startGame);
popButton.addEventListener("click", startGame);
countryButton.addEventListener("click", startGame);

