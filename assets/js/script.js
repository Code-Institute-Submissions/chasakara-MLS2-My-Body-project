var myQuestions = [
    {
        question: "How many senses do humans have",
        answers: {
            a: '5',
            b: '3',
            c: '6',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the human body’s biggest organ",
        answers: {
            a: 'Lungs',
            b: 'Skin',
            c: 'Liver'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the purpose of insulin in your body",
        answers: {
            a: 'Control blood sugar level',
            b: 'Remove blood toxins',
            c: 'Regulate water content in blood',
        },
        correctAnswer: 'a'
    },
    {
        question: "What body organ do you use for sense of touch",
        answers: {
            a: 'Nose',
            b: 'Skin',
            c: 'Hand',
            d: 'Eye',
        },
        correctAnswer: 'c'
    },
    {
        question: "Which one is not the function of liver",
        answers: {
            a: 'Bile production and excretion',
            b: 'Storage of glycogen, vitamins, and minerals.',
            c: 'Hormones production',
            d: 'Metabolism of fats, proteins, and carbohydrates.',
            
        },
        correctAnswer: 'c'
    },
    {
        question: "which one is not part of the eye?",
        answers: {
            a: 'Retina',
            b: '',
            c: 'Cornea',
            d: 'Lens',
        },
        correctAnswer: 'b'
    },
    {
        question: "Which part of the eye helps to focus light on the retina",
        answers: {
            a: 'Choroid',
            b: 'Vitreous humour',
            c: 'Iris',
            d: 'Lens'
        },
        correctAnswer: 'd'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "What body organ do you use for sense of touch",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many senses do humans have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: 'b'
    },

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

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
                answerContainers[i].style.color = 'lightgreen';
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



Resources