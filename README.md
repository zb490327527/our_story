# Next.js 网站项目

这是一个使用 Next.js 框架构建的网站项目，适合初学者入门。

## 环境要求

- **Node.js** 18.17 或更高版本（推荐 20.x）
- **npm** 9 或更高版本

如果尚未安装 Node.js，请前往 [nodejs.org](https://nodejs.org/) 下载安装。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 其他常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（支持热更新） |
| `npm run build` | 构建生产版本 |
| `npm run start` | 运行生产版本 |
| `npm run lint` | 运行代码检查 |

## 项目结构

```
├── src/
│   └── app/           # App Router 目录
│       ├── layout.tsx # 根布局（全局）
│       ├── page.tsx   # 首页
│       └── globals.css # 全局样式
├── public/            # 静态资源（如图片）
├── package.json
├── tailwind.config.ts # Tailwind CSS 配置
└── tsconfig.json      # TypeScript 配置
```

## 技术栈

- **Next.js 15** - React 全栈框架
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 原子化 CSS 框架
- **ESLint** - 代码规范检查

## 学习资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Next.js 中文文档](https://www.nextjs.cn/docs)
