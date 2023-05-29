module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'plugin:i18next/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
        // project: 'tsconfig.json',
        // tsconfigRootDir: __dirname
    },
    plugins: ['react', 'prettier', 'i18next', '@typescript-eslint'],
    rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',

        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/require-default-props': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/button-has-type': 'off',

        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'no-return-await': 'off',
        'arrow-body-style': 'off',
        'default-param-last': 'off',

        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['stroke'] }],

    },
    globals: {
        __IS_DEV__: true
    }
}
