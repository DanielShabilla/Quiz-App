const form = document.getElementById('quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'))
const questionItems = document.querySelectorAll('.question-item')
const alert = document.getElementById('alert')

form.addEventListener('submit', e => {
    e.preventDefault()

const checkedAnswers = answers.filter(answer => answer.checked)

questionItems.forEach(questionItems => {
    questionItems.classList.add('incorrect');
    questionItems.classList.remove('correct');
})

checkedAnswers.forEach(answer => {
    const isCorrect = answer.value ==='true'
    const questionItem = answer.closest('.question-item')

    if (isCorrect) {
        questionItem.classList.add('correct');
        questionItem.classList.remove('incorrect');
    } else {
        questionItem.classList.add('incorrect');
        questionItem.classList.remove('correct')
    }

    const allCorrect = Array.from(questionItems).every(item => item.classList.contains('correct'));

    function hideAlert() {
        alert.classList.remove('active')
    }
    
    setTimeout(hideAlert, 1000)

    if (allCorrect) {
        alert.classList.add('active')
    } else {
        alert.classList.remove('active')
    } })

})