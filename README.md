# generator-stupid-cli

> generating a tiny cli project

## Features

generating a tiny cli project support:

- Automatically detect version updates.
- Command line parameter parsing out of box.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-stupid-cli using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-stupid-cli
```

Then generate your new project:

```bash
yo stupid-cli
```

## What do you get?

Scaffolds out a complete generator directory structure for you:

```text
.
├── bin/
│    └── index.js
├── lib/
│    ├── index.js
│    └── run.js      
├── .editorconfig
├── .gitignore
├── biome.json
├── LICENSE
├── package.json
└── README.md
```

## LICENSE

[MIT](https://github.com/yyz945947732/generator-stupid/blob/master/LICENSE)