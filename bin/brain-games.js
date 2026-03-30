#!/usr/bin/env node
import getName from '../src/cli.js'
import even from '../bin/brain-even.js'

function app() {
  console.log('Welcome to the Brain Games!')
  getName()
  even()
}
app()
