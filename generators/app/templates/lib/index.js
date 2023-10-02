import fs from 'fs-extra';

import runTasks from './run.js';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);

const helpText = `<%= projectName %> v${pkg.version}

  Usage: <%= commandName %> [options]

  -h --help              Print this help
  -v --version           Print <%= projectName %> version number

For more details, please see https://github.com/<%= username %>/<%= projectName %>`;

// eslint-disable-next-line no-console
const version = () => console.log(`v${pkg.version}`);

// eslint-disable-next-line no-console
const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
