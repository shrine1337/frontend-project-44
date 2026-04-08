import question from '../brain.js'
import { mainName } from '../cli.js'

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
    if (randomChar === '*') {
      correctAnswer = randomNumber1 * randomNumber2
    }

    if (randomChar === '-') {
      correctAnswer = randomNumber1 - randomNumber2
    }

    if (randomChar === '+') {
      correctAnswer = randomNumber1 + randomNumber2
    }
    if (question(`${randomNumber1} ${randomChar} ${randomNumber2}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
