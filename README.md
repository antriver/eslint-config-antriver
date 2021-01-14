# eslint config

This has been split up so you can use the rules without any settings, because using it alongside Vue CLI generated
projects was proving very difficult. Or you can extend one of the ready made configs.

## Install

    npm install @antriver/eslint-config-antriver --save-dev

or

    yarn add --dev @antriver/eslint-config-antriver

## Usage

Extend the config in your `.eslintrc`

Example .eslintrc:

    {
        "root": true,
        "extends": [
            "@antriver/eslint-config-antriver",
        ]
    }

### Webpack

If you are using Webpack, install:

    npm install eslint-import-resolver-webpack --save-dev

Add add this to your eslint config:

    "settings": {
        // Use aliases from Webpack config.
        "import/resolver": {
            // "node" is here to fix a problem with built-in packages being marked as unresolved
            // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
            "node": {},
            "webpack": {
                "config": "./webpack.config.js"
            }
        }
    },

### Vue

If you are using Vue extend this instead:

    {
        "extends": [
            "@antriver/eslint-config-antriver/vue",
        ]
    }

You'll also need to install:

    npm install eslint-plugin-vue@latest --save-dev

### Typescript

If you are using Typescript extend this instead:

    {
        "extends": [
            "@antriver/eslint-config-antriver/typescript",
        ]
    }

### Vue & Typescript

If you are using both Vue (created by vue-cli) and Typescript extend this instead.
Do not extend both "/vue" and "/typescript" because you'll get a mess of conflicting parser options.

    {
        extends: [
            "@antriver/eslint-config-antriver/vue-typescript",
        ],
    }
