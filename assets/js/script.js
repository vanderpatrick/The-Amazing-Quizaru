// Function to call The burger menu.
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})

// Funtion  to call questions and options in the quiz.
callGame()
function callGame() {
    const quest_text = document.querySelector('.question');
    const option_text = document.querySelector('.options');

    let quest_content = '<span>' + questions[0].numb + '.' + questions[0].question + '</span>';
    let option_content = '<div class="option">' + '<span>' + questions[0].options[0] + '</span>' + '</div>' 
    + '<div class="option">' + '<span>' + questions[0].options[1] + '</span>' + '</div>'
    + '<div class="option">' + '<span>' + questions[0].options[2] + '</span>' + '</div>'
    + '<div class="option">' + '<span>' + questions[0].options[3] + '</span>' + '</div>'
    option_text.innerHTML = option_content
    quest_text.innerHTML = quest_content
}
