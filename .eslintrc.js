module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'off',
        'react/button-has-type': 'off',
        'arrow-body-style': 'off',
        'default-param-last': 'off'
    },
    globals: {
        __IS_DEV__: true
    }
}
