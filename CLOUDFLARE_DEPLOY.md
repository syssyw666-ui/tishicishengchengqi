# 前后端部署说明

Cloudflare Pages/Workers 继续托管 Vue 静态前端。Django 与 MySQL 需要部署到支持常驻 Python 服务和 MySQL 的服务器，例如云主机、Railway 或 Render；不能只把 Django 放进当前静态 Pages 项目。

## 1. 先部署后端

后端服务器设置 `backend/.env`，至少填写：

```text
DJANGO_SECRET_KEY=随机长密钥
DJANGO_DEBUG=0
DJANGO_ALLOWED_HOSTS=api.example.com
FRONTEND_URL=https://tishicishengchengqi.syssyw666.workers.dev
CORS_ALLOWED_ORIGINS=https://tishicishengchengqi.syssyw666.workers.dev
CSRF_TRUSTED_ORIGINS=https://tishicishengchengqi.syssyw666.workers.dev
MYSQL_DATABASE=prompt_generator
MYSQL_USER=prompt_user
MYSQL_PASSWORD=数据库密码
MYSQL_HOST=数据库地址
MYSQL_PORT=3306
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=SMTP地址
EMAIL_PORT=587
EMAIL_HOST_USER=发件邮箱
EMAIL_HOST_PASSWORD=SMTP密码或授权码
EMAIL_USE_TLS=0
EMAIL_USE_SSL=1
EMAIL_TIMEOUT=20
DEFAULT_FROM_EMAIL=发件邮箱
DJOSER_DOMAIN=tishicishengchengqi.syssyw666.workers.dev
```

发布阶段执行：

```bash
python -m pip install -r backend/requirements.txt
python backend/manage.py migrate
python backend/manage.py seed_catalog
python backend/manage.py collectstatic --noinput
gunicorn --chdir backend config.wsgi:application --bind 0.0.0.0:8000
```

## 2. 配置 Cloudflare 前端

在 Cloudflare 项目的环境变量中添加：

```text
VITE_API_BASE_URL=https://api.example.com/api
NODE_VERSION=22
```

构建配置：

```text
Framework preset: Vite
Build command: pnpm run build
Build output directory: dist
Root directory: /
```

保存后重新部署。现有 `wrangler.toml` 仍负责发布 `dist` 静态目录。

## 3. 管理与 Navicat

- Simple UI 管理后台：`https://api.example.com/admin/`
- Navicat：使用后端 `.env` 中相同的 MySQL 主机、端口、数据库、用户和密码连接
- Navicat 只用于查看和维护数据库，不需要写进网页代码，也不应开放数据库端口给所有公网地址

## 4. 上线检查

1. 前端无需登录即可正常生成提示词。
2. 注册后账号为未激活状态，并收到激活邮件。
3. 点击邮件链接会返回 Vue 页面，出现“激活成功，去登录”。
4. 两个不同用户看不到彼此的模板。
5. 上传模板展示图后，刷新页面仍可查看。
6. `/admin/` 使用 Simple UI，参数图库、精选提示词、用户模板和意见建议均可管理。
