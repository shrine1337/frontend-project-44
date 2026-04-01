#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getName = () => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ')
  return name
}
export default () => {
  console.log(`Hello, ${mainName}!`)
}
export const mainName = getName()
