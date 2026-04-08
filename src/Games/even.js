import question from '../brain.js'
import { mainName } from '../cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 100
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    let correctAnswer = 'yes'
    if (randomNumber % 2 !== 0) {
      correctAnswer = 'no'
    }
    if (question(randomNumber, correctAnswer, i, name) === false) {
      return
    }
  }
}
