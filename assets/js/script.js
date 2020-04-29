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

// Get the question array from json file
fetch("quiz.json")
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions;
        startGame();
    })

// A function to start the game
function startGame() {
    score = 0;
    questionCounter = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

// get questions from available question array
function getNewQuestion() {
    if (availableQuesions.length == 0 || questionCounter >= maxQuestions) {
        return window.location.assign("/quiz.html");
    }

    // Counts the number of questions that have been answered 
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;

    // Select random questions from the availabe questions 
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    // Remove the alredy used question
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;

    // Grabs options from the data number and get the option from the current question
    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });

};

// Listens to the option that has been clicked
options.forEach(option => {
    option.addEventListener("click", e => {
        if (!acceptingAnswers) return;


        // Questions have have to load first before accecting the selected option
        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["number"];

        // Color that will be applied to correct and incorrect answers
        const classToApply =
            selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect";

        // bonus points added to score for correct answer
        if (classToApply === "correct") {
            incrementScore(bonus);
        }

        selectedOption.parentElement.classList.add(classToApply);

        // function that delays the selected class before it is removed and then get a new question
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 700);
    });
});


// A function that increases the score and updates the score text
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
};