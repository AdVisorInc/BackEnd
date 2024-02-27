/* eslint-disable max-len, sort-keys */
const prettierConfig = require('./.prettierrc.js');
module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        mocha: true,
        node: true,
    },
    parser: 'babel-eslint',
    overrides: [
        {
            extends: ['plugin:prettier/recommended'],
            files: ['*.js'],
        },
    ],
    rules: {
        // Possible errors
        'no-console': 'warn',
        // Best practices
        'dot-notation': 'error',
        'no-else-return': 'error',
        'no-floating-decimal': 'error',
        'no-sequences': 'error',
        // Stylistic
        'array-bracket-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        curly: 'error',
        'max-len': [
            'error',
            {
                code: 80,
                ignorePattern: '^import\\W.*',
                ignoreTrailingComments: true,
            },
        ],
        'no-lonely-if': 'error',
        'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'one-var-declaration-per-line': 'error',
        quotes: [
            'error',
            'single',
            { allowTemplateLiterals: false, avoidEscape: true },
        ],
        'sort-keys': ['error', 'asc', { caseSensitive: false }],
        // ES6
        'array-callback-return': 'off',
        'prefer-const': 'error',
        // Imports
        'import/prefer-default-export': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'no-unused-expressions': 'off',
        // Using a lot of hasOwnProperty
        'no-prototype-builtins': 'off',
        // Prettier
        // eslint looks for the prettier config at the top level of the package/app
        // but the config lives in the `config/` directory. Passing the config here
        // to get around this.
        'prettier/prettier': ['error', prettierConfig],
    },
};
