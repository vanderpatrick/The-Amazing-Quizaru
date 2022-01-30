//all loose variables
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const option_list = document.querySelector('.options');
const gameStart = document.querySelector('.game_start')
const howToPlay = document.querySelector('.how_to_play')
const credits = document.querySelector('.credits')
let next_btn = document.querySelector('.next_btn');
let que_count = 0;
let que_counter = 1;
let userScore = 0;

// Function to call The burger menu.
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active');
})
//funtion to call Next question

function nextQuestion() {
    next_btn.onclick = () => {
        if (que_count < questions.length - 1) {
            que_count++;
            que_counter++;
            callGame(que_count)
            questionCounter(que_counter)
        } else {
            window.location.href = 'result.html'
        }

    }
}
// Funtion  to call questions and options in the quiz.
function callGame(index) {
    const quest_text = document.querySelector('.question');
    const option_text = document.querySelector('.options');
    next_btn.style.display = 'none';
    let quest_content = '<span>' + questions[index].numb + '.' + questions[index].question + '</span>';
    let option_content = '<div class="option">' + '<span>' + questions[index].options[0] + '</span>' + '</div>' +
        '<div class="option">' + '<span>' + questions[index].options[1] + '</span>' + '</div>' +
        '<div class="option">' + '<span>' + questions[index].options[2] + '</span>' + '</div>' +
        '<div class="option">' + '<span>' + questions[index].options[3] + '</span>' + '</div>'
    option_text.innerHTML = option_content
    quest_text.innerHTML = quest_content
    const option = option_list.querySelectorAll('.option')
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }

}
// Funtion to call Question counter

function questionCounter(index) {
    const question_counter = document.querySelector('.total_que');
    let question_counter_content = '<span>' + index + '/' + '10' + '</span>'
    question_counter.innerHTML = question_counter_content
}

// Funtion to call right awnser
function optionSelected(answer) {
    let questionAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = option_list.children.length
    if (questionAnswer == correctAnswer) {
        userScore += 1;
        sessionStorage.setItem('userScore', userScore);
        console.log(userScore)
        answer.classList.add("correct")
        console.log('correct')
    } else {
        answer.classList.add('incorrect')
        console.log('incorrect')

        //shows correct answer if incorrectly selected
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute('class', 'option correct')
            } else {
                option_list.children[i].setAttribute('class', 'option incorrect')
            }
        }
    }
    // When option is selected disable other ones 
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('remove');
    }
    next_btn.style.display = 'block';
}
// Function to count answers
function showResult() {
    const scoreText = document.querySelector('.score')
    let userScore = sessionStorage.getItem('userScore');

    if (userScore >= 1 && scoreText !== null) {
        let scoreTag = '<span>' + userScore + '/' + questions.length + '</span>';
        scoreText.innerHTML = scoreTag;
        
    }
    console.log(userScore)
}

//Functions to start game, help menu,credits menu,exit and restart
function quizStart(){
    window.location.href = 'quiz_box.html'
}
function howTo(){
    window.location.href = 'help.html'
}
function credit(){
    window.location.href = 'credits.html'
}

function restartGame() {
    window.location.href = 'quiz_box.html'
}

function exitGame() {
    window.location.href = 'index.html' 
}


showResult()
callGame(0);
nextQuestion(0);