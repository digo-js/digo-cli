const inquirer = require('inquirer')
const chalk = require('chalk')

/**
 * 选择模版列表
 * @param {list} templateList - 模板列表
 * @returns 选择的模版
 */
module.exports = async function (templateList) {
  try {
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'template',
      message: '请选择模板',
      choices: templateList,
      prefix: '🚀',
    })
    return answers.template
  } catch (e) {
    console.log(chalk.red('没有选择模版'))
  }
}
