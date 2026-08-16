# Cloudflare Pages 发布步骤

本项目是 Vite + React 静态前端，适合直接部署到 Cloudflare Pages。

## 1. GitHub 仓库

仓库地址：

```text
https://github.com/syssyw666-ui/tishicishengchengqi
```

## 2. Cloudflare Pages 构建配置

在 Cloudflare Pages 连接 GitHub 仓库后，使用以下配置：

```text
Framework preset: Vite
Build command: pnpm run build
Build output directory: dist
Root directory: /
Node.js version: 22
Deploy command: 留空
```

如果页面里没有 Node.js 版本选择项，就在环境变量里添加：

```text
NODE_VERSION=22
```

仓库中也包含 `wrangler.toml`：

```toml
name = "tishicishengchengqi"
compatibility_date = "2026-08-16"
pages_build_output_dir = "./dist"

[assets]
directory = "./dist"
```

如果 Cloudflare 当前项目里已经填写了 `Deploy command: npx wrangler deploy`，也可以保留；上面的 `[assets]` 配置会告诉 Wrangler 上传 `./dist` 静态目录。但普通 Pages 项目更推荐把 Deploy command 留空，让 Pages 使用默认发布流程。

## 3. 创建 Pages 项目

1. 打开 Cloudflare Dashboard。
2. 进入 `Workers & Pages`。
3. 点击 `Create` 或 `Create application`。
4. 选择 `Pages`。
5. 选择 `Connect to Git`。
6. 授权 GitHub 并选择仓库 `syssyw666-ui/tishicishengchengqi`。
7. 填入上面的构建配置。
8. 点击 `Save and Deploy`。

部署完成后，Cloudflare 会生成一个 `*.pages.dev` 地址。

## 4. 绑定域名

进入 Pages 项目：

```text
Custom domains -> Set up a custom domain
```

输入你的域名或子域名，例如：

```text
prompt.example.com
```

如果域名 DNS 已经托管在 Cloudflare，通常会自动配置记录；否则按 Cloudflare 提示添加 DNS 记录。

## 5. 注意事项

- 当前版本是纯前端工具，不需要服务器。
- 管理后台数据和用户建议目前保存在浏览器本地存储中，不会跨设备同步。
- 当前应用是单页工具，没有额外前端路由；仓库不再包含 `_redirects`，避免 `wrangler deploy` 判断为重定向循环。
