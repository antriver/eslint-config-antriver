module.exports = {
    extends: [
        // Base
        './index.js',

        // Typescript
        'plugin:@typescript-eslint/recommended',
        './rules/typescript.js',
    ],
};
