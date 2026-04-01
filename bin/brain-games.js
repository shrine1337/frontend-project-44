#!/usr/bin/env node
import getName from '../src/cli.js'
import even from '../bin/brain-even.js'

function app() {
  getName()
  even()
}
app()
