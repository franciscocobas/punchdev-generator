const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want?",
        choices: [
          {
            name: "eslint",
            checked: true,
          },
        ],
      },
      {
        type: "list",
        name: "eslint",
        message: "Which ESLint config do you want?",
        when: (answers) => answers.features.includes("eslint"),
        choices: [
          {
            name: "typescript",
          },
          {
            name: "javascript",
          },
        ],
      },
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes("javascript")) {
        this.composeWith(require.resolve("./eslint/javascript"));
      }

      if (answers.eslint.includes("typescript")) {
        this.composeWith(require.resolve("./eslint/typescript"));
      }
    }
  }
};
