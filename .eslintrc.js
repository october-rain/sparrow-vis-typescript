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
    // 这里添加一行规则把这条规则隐藏
    "import/prefer-default-export": 0,
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    // "import/no-unresolved": "off",
    // "import/extensions": "off",
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
