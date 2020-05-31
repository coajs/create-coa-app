const validate = require('validate-npm-package-name')
const { dirname, join, relative } = require('path')
const templateDir = join(dirname(require.resolve('../coa-template/package.json')))
module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const name = this.answers.name
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const author = this.answers.author
    const description = this.answers.description
    return {
      name,
      pm,
      author,
      description
    }
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)
    const actions = [{
      type: 'add',
      files: '**',
      templateDir: templateDir
    }]
    return actions
  },
  async completed () {
    await this.npmInstall({ npmClient: this.answers.pm })
    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'
    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} build}`)

    console.log(chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`)
  }
}
