'use strict'

const input = document.querySelector('input')
const answer2 = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = [
	'yes 👍',
	'no👎',
	'maybe 🤞',
	'depends',
	'Without a doubt',
	'Cannot predict now',
	'My reply is no',
	'As I see it, yes ✌️',
]
const btnRemove = document.querySelector('.btn-remove ')
const ball = document.querySelector('img')

const shake = () => {
    ball.classList.add('shake-animation')
    setTimeout( checkQuestion,1000)
}




const checkQuestion = () => {
	if (input.value.includes('?')) {
		randomAnswer()

		error.textContent = ''
	} else if (input.value === '') {
		error.textContent = ' *Enter your question'
	} else {
		error.textContent = '*Ask me again using a question mark'
		answer2.innerHTML = ''
    }
    ball.classList.remove('shake-animation')
}

const randomAnswer = () => {
	const number = Math.floor(Math.random() * 5)

	answer2.innerHTML = `<span>Answer: </span>${answers[number]}`
	error.textContent = ''
}

const handleKeyDown = e => {
	if (e.key === 'Enter') {
		checkQuestion()
	}
}

const clearAll = () => {
	answer2.textContent = ''
	input.value = ''
	error.textContent = ''
}

input.addEventListener('keydown', handleKeyDown)
btnRemove.addEventListener('click', clearAll)
ball.addEventListener('click', shake)
