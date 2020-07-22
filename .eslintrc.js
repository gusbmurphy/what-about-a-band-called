module.exports = {
  parser: "@typescript-eslint/parser",
  // env: {
  //   browser: true,
  //   es2020: true,
  //   node: true,
  //   mocha: true,
  // },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {},
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
