module.exports = {
    "env": {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        'prettier',
        'jest'
    ],
    "rules": {
    }
}
