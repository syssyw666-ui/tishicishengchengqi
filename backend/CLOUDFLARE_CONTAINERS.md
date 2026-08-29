# Cloudflare 后端部署评估

## 结论

当前后端不能直接作为普通 Cloudflare Worker 发布。项目依赖完整 Django、Gunicorn 和原生 `mysqlclient`，而 Python Workers 运行在 Pyodide/WebAssembly 环境中，适合纯 Python 或 PyEmscripten 兼容包，并不是普通 Linux Python 服务器。

可以选择 Cloudflare Containers：它能够运行当前仓库的 Dockerfile，再由 Worker 把请求转发到 Django 容器。该方案需要 Workers Paid 计划，并仍需单独准备：

1. 可公网访问的 MySQL 8 数据库。
2. Cloudflare R2 存储桶，用于运行时上传图片。
3. Worker/Container Secrets，用于 MySQL、R2、SMTP 与 `DJANGO_SECRET_KEY`。

## 推荐顺序

第一版更推荐使用 Railway 或 Render 运行 Django 容器，用 Cloudflare Pages/Workers 承载前端，用 R2 保存上传图片。部署成熟后，再评估迁移到 Cloudflare Containers。这样无需改写 Django ORM、Djoser、Simple UI 和 `mysqlclient`。

## 不能写入仓库的变量

`DJANGO_SECRET_KEY`、`MYSQL_PASSWORD`、`R2_SECRET_ACCESS_KEY`、`EMAIL_HOST_PASSWORD` 必须写入部署平台的加密 Secrets，不要提交到 Git。
