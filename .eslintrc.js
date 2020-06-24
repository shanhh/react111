const { tslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(tslint, {
  rules: {
    'react/no-string-refs': 1,
    '@typescript-eslint/no-non-null-assertion': 0,
    "@typescript-eslint/no-explicit-any": 0,
    'react/jsx-filename-extension': 0,
    "react/jsx-closing-bracket-location": 1, //有多行属性的话, 新建一行关闭标签,为JSX语法使用下列的对齐方式
    "jsx-quotes": ["error", "prefer-single"], //此规则强制在JSX属性中一致使用双引号或单引号
    "no-multi-spaces": 1, //禁止多个空格
    "react/jsx-boolean-value": 1,//当属性值等于true的时候，省略该属性的赋值
    "react/jsx-curly-spacing": [1, "always"],//在jsx属性和表达式中强制空格
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }], // 不允许多个空行
    "block-spacing": 1, // 开括号前和闭括号后有空格
    "semi": ["error", "never"], // 禁止末尾使用分号
    "space-before-function-paren": ["error", "always"], // 函数的空格
    "no-trailing-spaces": "error", // 禁用行尾空白
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // 大括号风格要求
    "comma-style": ["error", "last"], // 逗号风格 
    "comma-dangle": ["error", "never"], // 禁止使用拖尾逗号
    "comma-spacing": ["error", { "before": false, "after": true }], // 逗号空格
    "array-bracket-spacing": ["error", "never"], // 禁止括号内使用空格
    "keyword-spacing": ["error", { "before": true }], // 关键字周围空格的一致性
    "rest-spread-spacing": ["error", "always"], // 扩展运算符的空格
    "space-infix-ops": "error", // 要求操作符周围有空格
    "object-curly-newline": ["error",  {"multiline": true}], // 强制在花括号内使用一致的换行符
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}],  // 要求或禁止在语句间填充空行
    "padded-blocks": ["error", { "blocks": "never" }], // 要求或禁止块内填充
    "key-spacing": ["error", { "mode": "strict" }], // 对象的冒号
    "space-before-blocks": "error", // 要求或禁止语句块之前的空格 
   
  },
});



