const fetch = require("node-fetch");
const ora = require("ora");

module.exports = async function fetchTemplate() {
  const spinner = ora("loading template...").start();
  try {
    const result = await fetch("https://gitee.com/api/v5/repos/Dimples_Yj/my-gitignore/git/trees/master").then(
      (response) => response.json()
    );
    spinner.succeed("template loaded");
    return result && result.tree.map((item) => item.path.endsWith(".gitignore") && item.path.replace(".gitignore", ""));
  } catch (e) {
    spinner.color = "red";
    spinner.text = "fetch template failed";
    spinner.fail();
  }
};
