import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 100
  let correctAnswer = 'yes'
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNumber !== 2) {
      if (randomNumber < 2 || randomNumber % 2 === 0) {
        correctAnswer = 'no'
      }
      else if (randomNumber % 2 !== 0 && randomNumber >= 3) {
        const sqrt = Math.floor(Math.sqrt(randomNumber))
        for (let j = 3; j <= sqrt; j += 2) {
          if (randomNumber % j === 0) {
            correctAnswer = 'no'
          }
        }
      }
    }
    console.log(`Question: ${randomNumber}`)
    const firstAnswer = readlineSync.question(`Your answer: `)
    if (firstAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
      break
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}`)
    }
  }
}
