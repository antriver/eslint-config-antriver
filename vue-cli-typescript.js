module.exports = {
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',

        './rules/base.js',
        './rules/vue.ts',
        './rules/typescript.js',
    ],
};
