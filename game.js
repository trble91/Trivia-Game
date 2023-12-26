import { hipHopQuestions } from "./hiphopQuestions.js";
import { popQuestions } from "./popQuestions.js";
import { countryQuestions } from "./countryQuestions.js";

let questions = [];
let questionIndex = 0;
let score = 0;

// DOM elements
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const checkButton = document.querySelector(".check");
const restartButton = document.querySelector(".restart");
const hhButton = document.querySelector(".hh1");
const popButton = document.querySelector(".pop");
const countryButton = document.querySelector(".country");
const scoreBox = document.querySelector(".score");
const title = document.querySelector(".frontText");
const MAX_SCORE = 100;
const CORRECT_ANSWER_SCORE = 5;

function startGame(e) {
  const selection = e.target.innerText;
  title.classList.add("hide");

  // Set questions based on user selection
  questions = selection === "Hip-Hop" ? hipHopQuestions :
              selection === "Pop" ? popQuestions :
              selection === "Country" ? countryQuestions :
              [];

  shuffleQuestions();
  displayQuestion();
  questionIndex = 0;
  restartButton.classList.remove("hide");
  prevButton.classList.remove("hide");
  nextButton.classList.remove("hide");
  checkButton.classList.remove("hide");
  [hhButton, popButton, countryButton].forEach(button => button.classList.toggle("hide"));
}

function shuffleQuestions() {
  questions = [...questions].sort(() => 0.5 - Math.random());
}

function handleNextQuestion() {
  questionIndex++;
  displayQuestion();
  clearAnswer();
  checkWinner();
  gameWinner();
}

function handlePrevQuestion() {
  questionIndex--;
  displayQuestion();
  clearAnswer();
  checkWinner();
  gameWinner();
}

function displayQuestion() {
  const questionDiv = document.querySelector(".question");
  questionDiv.innerHTML = "";

  const { question, answers: { choices } } = questions[questionIndex];

  const questionText = `
    <div class="content">
      <h1>${question}</h1>
      <h3>Click One</h3>
      <ul>
        ${choices.map(choice => `<input type="radio" name="choice" value="${choice}"> ${choice} <br>`).join('')}
      </ul>
    </div>
   `;

  questionDiv.insertAdjacentHTML("beforeend", questionText);
}

let questionAnswered = false; // Add this variable to keep track of whether the question has been answered

function checkAnswer() {
  if (!questionAnswered) {
    const userChoiceElement = document.querySelector("input[name=choice]:checked");

    if (userChoiceElement) {
      const userChoice = userChoiceElement.value;
      const correctAnswer = questions[questionIndex].answers.correct;

      const feedbackDiv = document.querySelector(".check");
      feedbackDiv.innerHTML = userChoice === correctAnswer ? "You got it right!" : "My Guy. Seriously!";

      score += userChoice === correctAnswer ? 5 : 0;
      scoreBox.innerText = score;

      questionAnswered = true; // Set the flag to true once the question has been answered
    } else {
      alert("Please select an answer before checking!");
    }
  } else {
    alert("You've already answered this question!");
  }
}

function clearAnswer() {
  const feedbackDiv = document.querySelector(".check");
  feedbackDiv.innerHTML = "Check Answer";
  questionAnswered = false; // Reset the flag when moving to the next question
}

function checkWinner() {
  const winningDiv = document.querySelector(".winner");
  winningDiv.innerHTML = "";

  if (score === MAX_SCORE && questions.length === 0) {
    displayWinningMessage("You've Won!");
  } else if (questions.length === 0) {
    displayWinningMessage("Try Again!");
  } else {
    startGame();
  }
}

function gameWinner() {
  const winningDiv = document.querySelector(".winner");
  winningDiv.innerHTML = "";

  if (score === MAX_SCORE && questions.length === 0) {
    displayWinningMessage("You've Won!");
  } else if (score === MAX_SCORE) {
    displayWinningMessage("Try Again!");
  } else {
    startGame();
  }
}

function displayWinningMessage(message) {
  const winningDiv = document.querySelector(".winner");
  winningDiv.insertAdjacentHTML("beforeend", message);
  winningDiv.classList.remove("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  nextButton.addEventListener("click", handleNextQuestion);
  prevButton.addEventListener("click", handlePrevQuestion);
  checkButton.addEventListener("click", checkAnswer);
  [hhButton, popButton, countryButton].forEach(button => button.addEventListener("click", startGame));
});