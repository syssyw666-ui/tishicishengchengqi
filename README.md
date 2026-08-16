# 图片提示词生成器

一个面向 AI 生图的可视化提示词生成器。用户填写绘画主体和不想出现的内容，通过图片卡片选择风格、角色、衣着、姿势、表情、场景、构图、光线、渲染、调色、用途等参数，并生成可复制的提示词。

## 本地运行

```bash
pnpm install
pnpm run dev
```

## 构建

```bash
pnpm run build
```

构建产物会输出到 `dist`。

## Windows 安装包测试

```bash
pnpm install
pnpm run package:win
```

安装包会输出到 `release` 目录。若只想先测试免安装目录版：

```bash
pnpm run package:win:dir
```

## Cloudflare Pages 部署配置

在 Cloudflare Pages 连接 GitHub 仓库后，使用以下设置：

```text
Framework preset: Vite
Build command: pnpm run build
Build output directory: dist
Node.js version: 22
```

当前应用是单页工具，没有额外前端路由；仓库不包含 `_redirects`，避免 `wrangler deploy` 判断为重定向循环。

## 说明

当前版本是纯前端工具，不直接调用生图 API。管理员后台适合演示和本地维护，公开上线后如需真实账号权限、云端保存和多人管理，建议后续接入后端数据库与正式鉴权。
