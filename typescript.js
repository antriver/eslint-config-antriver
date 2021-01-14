module.exports = {
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // Fix incorrectly reported errors with Typescript enums:
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',

        '@typescript-eslint/no-empty-function': 'off',

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // eslint calls a constructor that has property initialisation (private/protected/public prefixes on the params)
        // a useless constructor. But it does do stuff.
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
    },
};
