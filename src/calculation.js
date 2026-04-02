import readlineSync from 'readline-sync'
import { mainName } from '../src/cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 67
  const chars = ['+', '-', '*']
  let correctAnswer
  console.log('What is the result of the expression?')
  for (let i = 0; i < 3; i++) {
    const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min
    const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min
    const randomChar = chars[Math.floor(Math.random() * chars.length)]
    console.log(`Question: ${randomNumber1} ${randomChar} ${randomNumber2}`)
    const firstAnswer = readlineSync.question(`Your answer: `)
    if (randomChar === '*') {
      correctAnswer = randomNumber1 * randomNumber2
    }

    if (randomChar === '-') {
      correctAnswer = randomNumber1 - randomNumber2
    }

    if (randomChar === '+') {
      correctAnswer = randomNumber1 + randomNumber2
    }
    if (correctAnswer === firstAnswer) {
      console.log('Correct!')
    }
    if (correctAnswer !== firstAnswer) {
      console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was '175'. \nLet's try again, ${name}`)
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}`)
    }
  }
}
