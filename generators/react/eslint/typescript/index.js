const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.addDevDependencies({
      "prettier": "^2.6.2",
        "eslint": "^8.14.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-config-standard": "^17.0.0",
        "eslint-plugin-import": "^2.26.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^4.0.0",
        "eslint-plugin-promise": "^6.0.0",
        "eslint-plugin-react": "^7.29.4",
        "eslint-plugin-react-hooks": "^4.5.0",
        "@typescript-eslint/parser": "^5.22.0",
        "@typescript-eslint/eslint-plugin": "^5.22.0",
    })
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }
};
