const options = Array.from(document.getElementsByClassName("option-answer"));
const progressText = document.getElementById("progressText");
const question = document.getElementById("question");
const scoreText = document.getElementById("score");
const bonus = 5;
const maxQuestions = 10;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let questions = [10];

fetch("quiz.json")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions;
    startGame();
  })
  
 function startGame () {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
  if (availableQuesions.length == 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("RecentScore", score);
    return window.location.assign("/quiz.html");
    
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  options.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

options.forEach(option => {
  option.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(bonus);
    }

    selectedOption.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedOption.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 700);
  });
});

function incrementScore (num){
  score += num;
  scoreText.innerText = score;
};