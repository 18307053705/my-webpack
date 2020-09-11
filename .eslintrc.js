const path = require("path");
const rootPath = path.resolve(__dirname);

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    `${rootPath}/eslintrcConfig/base.js`,
    `${rootPath}/eslintrcConfig/import.js`,
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
