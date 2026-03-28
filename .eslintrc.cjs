module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // React 规则
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要在 JSX 中导入 React
    'react/prop-types': 'off', // 使用 TypeScript 不需要 PropTypes
    'react/jsx-props-no-spreading': 'off', // 允许属性展开
    'react/function-component-definition': 'off', // 不强制函数组件定义方式
    
    // TypeScript 规则
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 不需要显式导出类型
    '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 忽略未使用的变量以 _ 开头
    
    // Import 规则
    'import/prefer-default-export': 'off', // 不强制默认导出
    'import/no-extraneous-dependencies': 'off', // 关闭依赖检查
    
    // 通用规则
    'no-console': 'warn', // 警告使用 console
    'max-len': ['error', { code: 120 }], // 每行最大长度
  },
};
