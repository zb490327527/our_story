#!/bin/bash
# 添加 v0 组件到项目
# 使用前请确保已安装 Node.js (https://nodejs.org)

set -e
cd "$(dirname "$0")/.."

echo "正在添加 v0 组件..."
npx shadcn@latest add "https://v0.app/chat/b/b_r5fGKFS3bk6" --yes

echo ""
echo "✅ 组件添加完成！"
echo "请检查 src/components 和 src/app 目录下生成的新文件。"
echo "运行 npm run dev 查看效果。"
