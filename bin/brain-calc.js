#!/usr/bin/env node
import calc from '../src/Games/calculation.js'
import getName from '../src/cli.js'

export function calculation() {
  getName()
  calc()
}
calculation()
