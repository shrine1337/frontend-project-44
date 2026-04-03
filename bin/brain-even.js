#!/usr/bin/env node
import getName from '../src/cli.js'
import even from '../src/Games/even.js'

export function game() {
  getName()
  even()
}
game()
