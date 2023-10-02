"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("tiny-cli:app", () => {
  beforeEach(() => {
    const answers = {
      projectName: "tiny-cli",
      commandName: "tiny",
      description: "do something",
      username: "yyz945947732",
      email: "945947732@qq.com"
    };
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts(answers);
  });

  it("creates files", () => {
    const files = [
      "README.md",
      "package.json",
      "LICENSE",
      "biome.json",
      ".gitignore",
      ".editorconfig",
      "bin/index.js",
      "lib/index.js",
      "lib/run.js"
    ];
    assert.file(files);
  });

  it("fills the README with project data", () => {
    assert.fileContent("README.md", "# tiny-cli");
    assert.fileContent("README.md", "npm install --global tiny-cli");
    assert.fileContent("README.md", "https://www.npmjs.com/package/tiny-cli");
    assert.fileContent("README.md", "$ tiny --help");
    assert.fileContent(
      "README.md",
      "https://coveralls.io/github/yyz945947732/tiny-cli?branch=master"
    );
    assert.fileContent(
      "README.md",
      "https://github.com/yyz945947732/tiny-cli/pulls"
    );
    assert.fileContent(
      "README.md",
      "https://github.com/yyz945947732/tiny-cli/blob/master/LICENSE"
    );
  });

  it("fills the LICENSE with project data", () => {
    assert.fileContent("LICENSE", "Copyright (c) yyz945947732");
  });

  it("fills the package.json with project data", () => {
    assert.fileContent("package.json", '"name": "tiny-cli"');
    assert.fileContent("package.json", '"description": "do something"');
    assert.fileContent(
      "package.json",
      '"homepage": "https://github.com/yyz945947732/tiny-cli"'
    );
    assert.fileContent(
      "package.json",
      '"author": "yyz945947732 <945947732@qq.com>"'
    );
    assert.fileContent(
      "package.json",
      '"url": "https://github.com/yyz945947732/tiny-cli/issues"'
    );
    assert.fileContent("package.json", '"email": "945947732@qq.com"');
    assert.fileContent(
      "package.json",
      '"url": "git+https://github.com/yyz945947732/tiny-cli.git"'
    );
  });
});
