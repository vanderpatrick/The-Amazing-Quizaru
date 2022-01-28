//all loose variables
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let next_btn = document.querySelector('.next_btn')
let que_count = 0
let que_counter = 1

// calling functions
// Function to call The burger menu.
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})
//Next question feature
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_counter++;
        callGame(que_count)
        questionCounter(que_counter)
    } else {
        console.log('done')
    }
    
}

// Funtion  to call questions and options in the quiz.
function callGame(index) {
    const quest_text = document.querySelector('.question');
    const option_text = document.querySelector('.options');

    let quest_content = '<span>' + questions[index].numb + '.' + questions[index].question + '</span>';
    let option_content = '<div class="option">' + '<span>' + questions[index].options[0] + '</span>' + '</div>' +
                         '<div class="option">' + '<span>' + questions[index].options[1] + '</span>' + '</div>' +
                         '<div class="option">' + '<span>' + questions[index].options[2] + '</span>' + '</div>' +
                         '<div class="option">' + '<span>' + questions[index].options[3] + '</span>' + '</div>' 
    option_text.innerHTML = option_content
    quest_text.innerHTML = quest_content
}

// counter question feature

function questionCounter(index) {
    const question_counter = document.querySelector('.total_que');
    let question_counter_content = '<span>' + index + '/' + '5' + '</span>'
    question_counter.innerHTML = question_counter_content
}