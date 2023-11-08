module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: "@react-native",
  rules: {
    quotes: ["error", "double"],
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
    "no-console": "warn",
    "no-debugger": "warn",
    "comma-dangle": "off",
    semi: "off",
    indent: "off",
    "space-before-function-paren": "off",
    "react/no-unstable-nested-components": [
      "off",
      {
        allowAsProps: true,
        customValidators:
          [] /* optional array of validators used for propTypes validation */,
      },
    ],
  },
};
