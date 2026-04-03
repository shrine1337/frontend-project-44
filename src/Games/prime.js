import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

export default () => {
  const name = mainName
  const min = 0
  const max = 100
  let correctAnswer
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  
  }

