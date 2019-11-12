module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  env: {
    browser: true,
    node: true, // 支持 node语法
    es6: true // 支持 es6 语法
  },
  parser: "babel-eslint",
  extends: [    
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  plugins: [
    "prettier",
    'html'
  ],
  //参考见：https://eslint.org/docs/rules/
  rules: {
    "react/prop-types": [0, { }]
  },
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容。
    //parser: 'babel-eslint',
    sourceType: "module"
  }
};
