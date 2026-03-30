import readlineSync from 'readline-sync'
import getName from '../src/cli.js'

export default () => {
  const min = 0
  const max = 100
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${randomNumber}`)
  const firstAnswer = readlineSync.question(`Your answer: `)
  if (randomNumber % 2 === 0 && firstAnswer === 'yes') {
    console.log('Correct!')
  }
  else {
    let name = getName()
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}`)
  }
}
