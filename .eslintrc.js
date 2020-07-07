module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:flowtype/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "flowtype"],
  rules: {},
  settings: {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
