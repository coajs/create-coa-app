#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const chalk = require('chalk')
const { version } = require('../package.json')
const cac = require('cac')
const generator = path.resolve(__dirname, './')

const cli = cac('coa-app')

cli
  .command('[out-dir]', 'Generate in a custom directory or current directory')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }
    console.log()
    console.log(chalk`{cyan coajs v${version}}`)
    console.log(chalk`✨  Generating coa.js project in {cyan ${outDir}}`)

    const { verbose, answers } = cliOptions
    const logLevel = verbose ? 4 : 2
    // See https://saojs.org/api.html#standalone-cli
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()





