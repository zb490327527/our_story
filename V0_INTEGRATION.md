# v0 组件集成指南

本项目已配置好 shadcn/ui 环境，可以添加 v0 生成的组件。

## ⚠️ 前提条件

**必须先安装 Node.js**（推荐 LTS 版本）。若未安装，请前往 [nodejs.org](https://nodejs.org/) 下载安装。

## 步骤一：安装依赖

在项目根目录打开终端，运行：

```bash
npm install
```

## 步骤二：添加 v0 组件

在项目根目录运行以下命令：

```bash
npx shadcn@latest add "https://v0.app/chat/b/b_r5fGKFS3bk6" --yes
```

或者使用脚本（需先 `chmod +x scripts/add-v0-component.sh`）：

```bash
./scripts/add-v0-component.sh
```

## 步骤三：集成到页面

命令执行完成后，shadcn 会：

1. 在 `src/components` 下创建所需的 UI 组件
2. 可能生成新的页面文件

请查看终端输出，了解具体生成了哪些文件。通常需要：

1. 在 `src/app/page.tsx` 中导入并渲染新组件
2. 或在 `src/app` 下创建新路由页面

## 步骤四：运行查看效果

```bash
npm run dev
```

在浏览器打开 http://localhost:3000 查看效果。

---

## 备选方案：手动集成

如果命令无法运行，您可以：

1. 在 v0 页面点击右上角 **⋯** 菜单
2. 选择 **Download ZIP** 下载组件代码
3. 将解压的文件复制到项目中对应位置
4. 如有缺失的 shadcn 基础组件，运行 `npx shadcn@latest add button card` 等添加

## 已配置的 shadcn 环境

- ✅ `components.json` - shadcn 配置
- ✅ `src/lib/utils.ts` - cn 工具函数
- ✅ `tailwind.config.ts` - 完整主题变量
- ✅ `src/app/globals.css` - shadcn CSS 变量
- ✅ 依赖：class-variance-authority, clsx, tailwind-merge, lucide-react, tailwindcss-animate
