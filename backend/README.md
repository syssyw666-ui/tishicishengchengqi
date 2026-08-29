# 图灵词造后端

这是“图灵词造·AI提示词实训营”的独立 Django REST 后端，可使用 Docker 部署到 Railway、Render 或云服务器。

## 必需服务

- Python 3.12
- MySQL 8
- 可公开访问的 HTTPS 域名
- SMTP 发件邮箱

## 环境变量

复制 `.env.example` 的字段到托管平台的加密变量管理页面。生产环境至少填写：

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG=0`
- `DJANGO_ALLOWED_HOSTS`
- `FRONTEND_URL=https://tishicishengchengqi.syssyw666.workers.dev`
- `CORS_ALLOWED_ORIGINS=https://tishicishengchengqi.syssyw666.workers.dev`
- `CSRF_TRUSTED_ORIGINS=https://tishicishengchengqi.syssyw666.workers.dev`
- `MYSQL_DATABASE`、`MYSQL_USER`、`MYSQL_PASSWORD`、`MYSQL_HOST`、`MYSQL_PORT`
- `EMAIL_HOST`、`EMAIL_PORT`、`EMAIL_HOST_USER`、`EMAIL_HOST_PASSWORD`
- `EMAIL_USE_SSL`、`EMAIL_USE_TLS`、`DEFAULT_FROM_EMAIL`
- `DJOSER_DOMAIN=tishicishengchengqi.syssyw666.workers.dev`
- `R2_BUCKET_NAME`、`R2_ENDPOINT_URL`、`R2_ACCESS_KEY_ID`、`R2_SECRET_ACCESS_KEY`
- `R2_PUBLIC_BASE_URL`（R2 自定义公开域名）

不要把真实密钥写入 Git。私人仓库也应使用托管平台的 Secrets/Variables。

## 后台部署配置

完成首次迁移并登录 Django 管理后台后，可以进入一级菜单“部署配置”：

- 填写 SMTP 服务器、发件邮箱和授权码；授权码使用 `DJANGO_SECRET_KEY` 派生密钥加密后保存。
- 点击“保存并发送测试邮件”验证注册激活邮件链路。
- 查看 MySQL 与 Cloudflare R2 是否已经通过环境变量正确配置。

MySQL 密码和 R2 访问密钥不能在这个页面直接修改。Django 在打开管理后台之前就必须使用它们完成数据库与存储初始化，因此必须在 Railway、Cloudflare Containers 或其他托管平台的加密变量页面填写。

## 图片资源分工

- 内置参数参考图、精选提示词示例图：保留在前端 `public/assets`，由 Cloudflare CDN 缓存。
- 用户头像、模板预览、意见附件、后台替换图：保存到 Cloudflare R2。
- 未配置 R2 时仅回退到服务器 `media` 目录，不适合正式环境，容器重启后可能丢失。

## 启动

Docker 镜像启动时自动执行数据库迁移、图库初始化和 Gunicorn。健康检查地址：

```text
/api/health/
```

部署成功后，将前端 Cloudflare 项目的 `VITE_API_BASE_URL` 设置为：

```text
https://你的后端域名/api
```

然后重新构建前端，账号、邮件、模板和后台功能才会使用公网后端。

Cloudflare 普通 Worker 不能直接运行当前 Django + `mysqlclient` 项目。若希望后端也部署在 Cloudflare，请使用 Workers Paid 计划中的 Cloudflare Containers 运行本仓库 Dockerfile，并另行提供 MySQL 与 R2；详细说明见 `CLOUDFLARE_CONTAINERS.md`。
