module.exports = {
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // Fix incorrectly reported errors with Typescript enums:
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['error'],

                '@typescript-eslint/explicit-function-return-type': 'error',

                // eslint calls a constructor that has property initialisation (private/protected/public prefixes
                // on the params) a useless constructor. But it does do stuff.
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error',

                // Don't require params in jsdoc with typescript.
                'jsdoc/require-param': 'off',

                // Require type annotations to be spaced like this:
                // (varName: type): returnType
                '@typescript-eslint/type-annotation-spacing': [
                    'error',
                    {
                        before: false,
                        after: true,
                    },
                ],
            },
        },
    ],
};
