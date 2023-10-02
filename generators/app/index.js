"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
const askName = require("inquirer-npm-name");
const _ = require("lodash");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  initializing() {
    this.props = {
      projectName: "",
      description: "",
      commandName: "",
      username: "",
      email: ""
    };
  }

  prompting() {
    this.log(
      yosay(
        `Welcome to the super ${chalk.red("generator-stupid-cli")} generator!`
      )
    );

    return askName(
      {
        name: "projectName",
        message: "Your project name",
        default: "tiny-cli-project"
      },
      this
    )
      .then(props => {
        this.props.projectName = props.projectName;
      })
      .then(this._askFor.bind(this));
  }

  _askFor() {
    const prompts = [
      {
        name: "description",
        message: "Description",
        when: !this.props.description
      },
      {
        name: "commandName",
        message: "CommandName to run your cli",
        when: !this.props.commandName
      },
      {
        name: "username",
        message: "Author's Name",
        when: !this.props.username,
        default: this.user.git.name()
      },
      {
        name: "email",
        message: "Author's Email",
        when: !this.props.email,
        default: this.user.git.email()
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = _.merge(this.props, props);
    });
  }

  writing() {
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        `Your generator must be inside a folder named ${this.props.projectName}\nI'll automatically create this folder.`
      );
      mkdirp.sync(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

    const folders = ["bin", "lib"];
    const files = [
      "README.md",
      "package.json",
      "LICENSE",
      "biome.json",
      ".editorconfig"
    ];
    folders.forEach(folder =>
      this.fs.copyTpl(
        this.templatePath(folder),
        this.destinationPath(folder),
        this.props
      )
    );
    files.forEach(file =>
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.props
      )
    );
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore")
    );
  }
};
