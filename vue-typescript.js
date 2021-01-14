module.exports = {
    extends: [
        // Note this does not extend index.js

        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',

        './rules/base.js',
        './rules/vue.ts',
        './rules/typescript.js',
    ],

    plugins: [
        'jsdoc',
    ],
};
