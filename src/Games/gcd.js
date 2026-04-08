import question from '../brain.js'
import { mainName } from '../cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 100
  let correctAnswer
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNumber2 === 0) {
      correctAnswer === randomNumber1
    }
    else while (randomNumber2 !== 0) {
      let saveSecond = randomNumber2
      randomNumber2 = randomNumber1 % randomNumber2
      randomNumber1 = saveSecond
    }
    correctAnswer = randomNumber1
    if (question(`${randomNumber1} ${randomNumber2}`, String(correctAnswer), i, name) === false) {
      return
    } 
  }
}
