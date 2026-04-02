#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { mainName } from '../src/cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 100
  let correctAnswer = 'yes'
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Question: ${randomNumber}`)
    const firstAnswer = readlineSync.question(`Your answer: `)
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes'
    }
    else correctAnswer = 'no'
    if (firstAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}`)
      break
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}`)
    }
  }
}
