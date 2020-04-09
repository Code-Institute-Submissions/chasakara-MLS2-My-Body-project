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
            b: 'Cerebrum',
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
        question: "Which ons is not a function of the kidney",
        answers: {
            a: 'Controlling blood sugar level',
            b: 'Controlling blood PRESSURE.',
            c: 'Controlling acid-base balance',
            d: 'Controlling water balance',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which material is your hair and nails made from",
        answers: {
            a: '3',
            b: 'Keratin',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Which part of your eye respond to light",
        answers: {
            a: '3',
            b: '5',
            c: 'Retina',
        },
        correctAnswer: ''
    },
    {
        question: "How many bones does an adult human have",
        answers: {
            a: '3',
            b: '5',
            c: '6',
            d: '',
        },
        correctAnswer: 'b'
    },
    {
        question: "Which part your body produces sound",
        answers: {
            a: '3',
            b: 'larynx',
            c: '6',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the purpose of the spinal code",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "The spinal code is connected to which organ",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Which one does not happen to your body when you are cold",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the function of red blood cells",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the function of white blood cells",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Which nutrient is not stored by your body",
        answers: {
            a: 'Fat',
            b: 'Protein',
            c: 'Carbohydrates',
        },
        correctAnswer: ''
    },
    {
        question: "When you exercise what do you burn",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What body organ do you use for sense of touch",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the purpose of oygen in your body",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the purpose of oygen in your body",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the purpose of oygen in your body",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the purpose of oygen in your body",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What is the purpose of oygen in your body",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Which one is contained on every part of your body and every cell",
        answers: {
            a: '3',
            b: 'DNA',
            c: 'RNA',
            d: ''
        },
        correctAnswer: 'b'
    },
    {
        question: "Which mineral mostly make up your teeth and bones",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Which mineral is made by your skin",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "Why is the color of your blood red",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
    },
    {
        question: "What does carbon dioxide in your body come from",
        answers: {
            a: '3',
            b: '5',
            c: '6',
        },
        correctAnswer: ''
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