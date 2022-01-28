// Function to call The burger menu.
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})
let next_btn = document.querySelector('.next_btn')
let que_count = 0
callGame(0)
//Selecting nextBtn element and event listner for nextBtn
next_btn.onclick = ()=>{
    que_count++;
    callGame(que_count)
}

// Funtion  to call questions and options in the quiz.
function callGame(index) {
    const quest_text = document.querySelector('.question');
    const option_text = document.querySelector('.options');

    let quest_content = '<span>' + questions[index].numb + '.' + questions[index].question + '</span>';
    let option_content = '<div class="option">' + '<span>' + questions[index].options[0] + '</span>' + '</div>' 
    + '<div class="option">' + '<span>' + questions[index].options[1] + '</span>' + '</div>'
    + '<div class="option">' + '<span>' + questions[index].options[2] + '</span>' + '</div>'
    + '<div class="option">' + '<span>' + questions[index].options[3] + '</span>' + '</div>'
    option_text.innerHTML = option_content
    quest_text.innerHTML = quest_content
}




