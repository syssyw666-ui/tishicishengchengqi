# Cloudflare Pages 发布步骤

## 1. 推送代码到 GitHub

确认代码已经推送到你的 GitHub 仓库，例如：

```bash
git remote add origin https://github.com/<你的 GitHub 用户名>/tishicishengchengqi.git
git branch -M main
git push -u origin main
```

如果你已经添加过远程仓库，只需要：

```bash
git push
```

## 2. 创建 Cloudflare Pages 项目

1. 打开 Cloudflare Dashboard。
2. 进入 `Workers & Pages`。
3. 点击 `Create application`。
4. 选择 `Pages`。
5. 选择 `Connect to Git`。
6. 授权并选择仓库 `tishicishengchengqi`。

## 3. 设置构建参数

```text
Framework preset: Vite
Build command: pnpm run build
Build output directory: dist
Node.js version: 22
```

如果 Cloudflare 界面没有 Node 版本选项，可以在环境变量里添加：

```text
NODE_VERSION=22
```

## 4. 部署

点击 `Save and Deploy`。部署完成后，Cloudflare 会生成一个 `*.pages.dev` 网址。

## 5. 绑定域名

进入 Pages 项目：

```text
Custom domains -> Set up a custom domain
```

输入你的域名或子域名，例如：

```text
prompt.example.com
```

按照 Cloudflare 提示添加 DNS 记录。若域名 DNS 已在 Cloudflare 管理，通常会自动配置。
