const inquirer = require('inquirer')

module.exports = async function (templateList) {
  inquirer
    .prompt({
      type: 'list',
      name: 'template',
      message: '请选择模板',
      choices: templateList,
      prefix: '🚀',
    })
    .then((answers) => {
      console.log(answers)
    })
    .catch((err) => {
      console.log(err)
    })
}
