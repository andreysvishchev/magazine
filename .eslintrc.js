module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/function-component-definition': 'off',
        'react/button-has-type': 'off',

        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'max-len': ['error', { code: 100, ignoreComments: true }],

        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'off',

        'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: [''] }]
    },
    globals: {
        __IS_DEV__: true
    }
}
