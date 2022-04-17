const { Command } = require("commander");
const chalk = require("chalk");
const { version } = require("../package.json");
(async () => {
  const program = new Command();
  program
    .version(version)
    .description("A generate gitignore file tools")
    .usage("[options]")
    .option("-g, --generate", "select gitignore template")
    .option("-l, --list", "list gitignore template")
    .parse(process.argv);
  const { generate, list } = program.opts();
  if (generate) {
    const templateList = await require("./fetchTemplate")();
    const temaplteName = await require("./precessCmd")(templateList);
    await require("./generateTemplate")(temaplteName);
  } else if (list) {
    const templateList = await require("./fetchTemplate")();
    templateList.forEach((item) => console.log(chalk.yellow(item)));
  } else {
    program.help();
  }
})();
