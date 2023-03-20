module.exports = {
    rules: {
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside',
        }],

        // No line break before closing >
        //
        // <div
        //   id="foo"
        //   class="bar"> <!-- Like this -->
        //
        // <div
        //   id="foo"
        //   class="bar"
        // > <!-- Not like this -->
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],

        // Use 4 spaces for indents in <template> in Vue files.
        'vue/html-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],

        // Use 4 spaces for indents in <script> in Vue files.
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 1,
            },
        ],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
        // https://vuejs.org/v2/style-guide/#Multi-attribute-elements-strongly-recommended
        //
        // <MyComponent lorem="1" <!-- like this -->
        //              ipsum="2"
        //
        // <MyComponent
        //     lorem="1"
        //     ipsum="2" <!-- Not like this -->
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],

        'vue/multi-word-component-names': 'off',
    },
    overrides: [
        // For .vue files disable the indent rule otherwise there are errors about indentation in <script> tags.
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
