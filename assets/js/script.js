
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var step = 0;
var selection;
var selectedQuestions = [];
var chances = 3;

var output = JSON.parse(localStorage.getItem('quiz')) || [];


function generateUnique() {
    const uniques = chance.unique(chance.natural, 12, {
        min: 1,
        max: 547,
    });
    return uniques;
}

$(function() {
    const xhr = new XMLHttpRequest();
    const url = 'quiz.json';

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let fullSetQuestions = JSON.parse(this.responseText);
            loadQuestions(fullSetQuestions);
            $('#game-screen').hide();
            $('#gameOverWindow').modal('hide');
            $('.answer-button').removeClass('wrong-answer correct-answer');
        }

    };
    xhr.open('GET', url, true);
    xhr.send();

});

function loadQuestions(fullSet) {
    const gameQuestionNumbers = generateUnique();
    selectedQuestions = gameQuestionNumbers.map(numbers => fullSet[numbers]);
    console.log(selectedQuestions);
    return selectedQuestions;
}


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
