var questions = [
    {
        prompt: "What is HTML?\n(a) hyper text markup langauge\n\(b) the second option\n\(c) the third option\n\(d) the fourth option",
        answer: "a"
    },
    {
        prompt: "my second question here?"
    }
]

var score = 0;

for(var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}









function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    

}

function setNextQuestion() {

}

function selectAnswer() {

}


const startButton = document.getElementById('start-button')

startButton.addEventListener('click', startQuiz )