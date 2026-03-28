# BirdNav 工程化配置优化说明

## 修改的文件

1. **`.eslintrc.cjs`** - 配置ESLint规则，使用Airbnb规范
2. **`.prettierrc`** - Prettier格式化规则配置
3. **`.prettierignore`** - Prettier忽略文件列表
4. **`package.json`** - 添加依赖和脚本配置
5. **`vite.config.ts`** - 配置代码分割
6. **`.env`, `.env.development`, `.env.production`** - 环境变量配置
7. **`vitest.config.ts`** - Vitest测试配置
8. **`src/test/setup.ts`** - 测试环境设置
9. **`src/utils/formatDate.ts`** - 新增日期格式化工具函数
10. **`src/utils/__tests__/formatDate.test.ts`** - 单元测试用例
11. **`src/App.tsx`** - 修改导入路径为@别名格式

## 如何验证配置生效

### 1. 代码规范检查
```bash
# 运行ESLint检查
npm run lint

# 自动修复可修复的问题
npm run lint:fix
```

### 2. 代码格式化
```bash
# 格式化所有代码
npx prettier --write .
```

### 3. 验证代码分割
```bash
# 构建项目
npm run build

# 检查dist/assets目录，应该看到vendor-*.js和utils-*.js文件
```

### 4. 环境变量使用
在代码中可以通过以下方式访问环境变量：
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
```

### 5. 运行单元测试
```bash
# 运行测试
npm run test

# 运行测试并生成报告
npm run test:run

# 运行测试UI界面
npm run test:ui
```

### 6. 路径别名使用
现在可以在项目中使用`@/xxx`格式导入模块：
```typescript
import { Search } from '@/component/Search';
import Store from '@/store';
import { formatDate } from '@/utils/formatDate';
```

## 提交代码时的自动检查
Husky和lint-staged已配置，在提交代码前会自动：
1. 对.ts/.tsx文件运行ESLint检查并自动修复
2. 对所有支持的文件运行Prettier格式化

确保在提交前安装Husky钩子：
```bash
npm run prepare
```
