module.exports = [
  {
    name: 'name',
    message: 'Project name',
    default: '{outFolder}'
  },
  {
    name: 'author',
    message: 'Choose Project author',
    default: '精神小伙'
  },
  {
    name: 'description',
    message: 'Project description',
    default: 'a coa Project'
  },
  {
    name: 'pm',
    message: 'Choose the package manager',
    choices: [
      { name: 'Yarn', value: 'yarn' },
      { name: 'Npm', value: 'npm' }
    ],
    type: 'list',
    default: 'yarn'
  }
]
