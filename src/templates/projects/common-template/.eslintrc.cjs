/*
 * @Author: 彭越腾
 * @Date: 2023-04-25 15:28:02
 * @LastEditors: 彭越腾
 * @LastEditTime: 2023-04-25 17:29:53
 * @FilePath: \react-component\.eslintrc.cjs
 * @Description: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        // parser: 'babel-eslint',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    // add your custom rules here
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        //强制使用单引号
        quotes: ['error', 'single'],
        'for-direction': 'error',
        //强制不使用分号结尾
        semi: ['error', 'never'],
        'no-unused-vars': 1,
        'no-debugger': process.env === 'production' ? 'error' : 'off', // 生产环境禁用 debugger
        'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
        'no-compare-neg-zero': 'error', // 禁止与 -0 进行比较
        'no-await-in-loop': 'error', // 禁止在循环中出现 await
        'no-cond-assign': 'error', //禁止条件表达式中出现赋值操作符
        'no-console': process.env === 'production' ? 'error' : 'off', // 生产环境禁用 console
        'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
        'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
        // 'array-bracket-newline': ['error', 'never'], // 在数组开括号后和闭括号前强制换行
        // 'function-paren-newline': ['error', 'never'], // 强制在函数括号内使用一致的换行
        'vue/no-v-html': 'off',
        'no-new': 0,
        camelcase: 'off',
        'no-useless-escape': 0,
        // if while function 后面的 {必须与 if 在同一行，java 风格。
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'object-property-newline': 2,
        'dot-notation': 'error',
        'dot-location': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}
