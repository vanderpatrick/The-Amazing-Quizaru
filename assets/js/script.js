//all loose variables
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const option_list = document.querySelector('.options')
let next_btn = document.querySelector('.next_btn')
let que_count = 0
let que_counter = 1

// calling functions
// Function to call The burger menu.
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
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
            window.location.href = 'https://5555-vanderpatrick-theamazing-a78pzco9zx6.ws-eu29.gitpod.io/result.html'
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
    let question_counter_content = '<span>' + index + '/' + '5' + '</span>'
    question_counter.innerHTML = question_counter_content
}

// Funtion to call right awnser
function optionSelected(answer) {
    let questionAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = option_list.children.length
    if (questionAnswer == correctAnswer) {
        answer.classList.add("correct")

        console.log('correct')
    } else {
        answer.classList.add('incorrect')
        console.log('incorrect')

        //shows correct answer if incorrectly selected
        for (i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAnswer){
                option_list.children[i].setAttribute('class', 'option correct')
            }else{
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
callGame(0)
nextQuestion(0)