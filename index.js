module.exports = {
    // airbnb-base has all the ES6 rules without the React stuff
    extends: [
        'eslint-config-airbnb-base',
        './rules/base.js',
    ],

    plugins: [
        'jsdoc',
    ],
};
