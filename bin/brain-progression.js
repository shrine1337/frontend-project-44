#!/usr/bin/env node
import prog from '../src/Games/prog.js'
import getName from '../src/cli.js'

function progression() {
  getName()
  prog()
}
progression()
