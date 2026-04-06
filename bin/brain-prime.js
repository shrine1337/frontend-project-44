#!/usr/bin/env node
import prime from '../src/Games/prime.js'
import getName from '../src/cli.js'

function brains() {
  getName()
  prime()
}
brains()
