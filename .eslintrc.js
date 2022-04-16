module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 这里增加一行，用于支持后面的测试环境
    jest: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base"], // airbnb-typescript 是针对 react 的
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    // 关闭 eslint 的如下功能
    quotes: "off",
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-sequences": 0,
    "no-loop-func": 0,
    "no-nested-ternary": 0,
    "object-curly-newline": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
        extensions: [".js", ".ts"],
      },
    },
  },
};
