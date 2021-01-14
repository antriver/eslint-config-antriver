# eslint config

This has been split up so you can use the rules without any settings, because using it alongside Vue CLI generated
projects was proving very difficult. Or you can extend one of the ready made configs.

## Install

    npm install @antriver/eslint-config-antriver --save-dev

or

    yarn add --dev @antriver/eslint-config-antriver

## Usage

Simply extend the config in your `.eslintrc` or `.eslintrc.js`.

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

The `vue.js` file contains extra rules to use with a Vue project. Add it to your extends list **in addition to** the base like this.
It no longer extends any base file because this caused issues with the parser options being changed when using it with Vue, so add that too.

    {
        "extends": [
            "@antriver/eslint-config-antriver",
            "plugin:vue/recommended",
            "@antriver/eslint-config-antriver/vue"
        ]
    }

And add the `vue` plugin to your list of plugins:

    plugins: [
        'vue',
    ],

You'll also need to install these:

    npm install eslint-plugin-vue@latest --save-dev

### Typescript

The `typescript.js` file contains extra rules to use with a Typescript project.
It no longer extends any base file because this caused issues with the parser options being changed when using it with Vue, so add that too.
Add it to your extends list **in addition to** the base like this:

    {
        "extends": [
            "@antriver/eslint-config-antriver",

            "plugin:@typescript-eslint/recommended",
            "@antriver/eslint-config-antriver/typescript"
        ]
    }

or with Vue:

    {
        extends: [
            '@antriver/eslint-config-antriver',

            'plugin:vue/recommended',
            '@antriver/eslint-config-antriver/vue',

            '@vue/typescript/recommended',
            '@antriver/eslint-config-antriver/typescript',
        ],
    }
