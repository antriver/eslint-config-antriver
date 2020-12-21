# eslint config

This is designed to be used with ES6 code. For `app` everything is run through Webpack so there's no concern about browser support. For `epos` Webpack does not parse the code (yet) and the ES6 runs natively in the browser so there are some rules to cater for that.

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

The `vue.js` file contains extra rules to use with a Vue project. Add it to your extends list **in addition to** the base like this:

    {
        "extends": [
            "@antriver/eslint-config-antriver",
            "@antriver/eslint-config-antriver/vue"
        ]
    }

You'll also need to install these:

    npm install eslint-plugin-vue@latest --save-dev
