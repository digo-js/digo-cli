const fetch = require('node-fetch')
const ora = require('ora')
const fs = require('fs')
const path = require('path')

module.exports = async function (templateName) {
  const spinner = ora('generate template...').start()
  try {
    const result = await fetch(`https://gitee.com/Dimples_Yj/my-gitignore/raw/master/${templateName}.gitignore`).then((response) => response.text())
    fs.writeFileSync(path.join(process.cwd(), `.gitignore`), result)
    spinner.succeed('generated successfully')
  } catch (e) {
    spinner.color = 'red'
    spinner.text = 'generate template failed'
    spinner.fail()
  }
}
