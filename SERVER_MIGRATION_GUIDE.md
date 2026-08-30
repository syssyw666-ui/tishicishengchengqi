# 图灵词造服务器迁移与部署说明

本压缩包包含 Vue 前端、Django 后端、MySQL 数据库迁移文件、内置参考图库和部署配置示例，不包含真实密码、授权码、`.env`、本地虚拟环境、依赖缓存或 Git 历史。

## 一、先决定迁移方式

### 全新部署

只部署程序，不迁移现有用户和后台数据。创建新的 MySQL 数据库，配置环境变量后运行 Django 数据库迁移即可。

### 完整迁移现有网站

除了部署本压缩包，还必须单独迁移：

1. Railway MySQL 中的生产数据库。
2. Cloudflare R2 中的用户头像、模板预览、意见附件和后台上传图片。
3. 当前生产环境使用的 `DJANGO_SECRET_KEY`。

`DJANGO_SECRET_KEY` 必须保持不变，否则数据库中加密保存的 SMTP 授权码、EmailJS Private Key 等内容无法解密。不要通过聊天、邮件或 GitHub 传输该密钥。

## 二、服务器要求

- 推荐：Docker 24+、Docker Compose。
- 手动部署：Python 3.12、Node.js 20+、pnpm 11、MySQL 8、Nginx 或其他 HTTPS 反向代理。
- 正式环境必须有可公开访问的 HTTPS 前端域名和后端域名。

## 三、部署后端

1. 解压后进入 `backend`。
2. 根据 `backend/.env.example` 在服务器或托管平台的加密变量中配置环境变量。
3. 生产环境至少设置：
   - `DJANGO_SECRET_KEY`
   - `DJANGO_DEBUG=0`
   - `DJANGO_ALLOWED_HOSTS`
   - `FRONTEND_URL`
   - `CORS_ALLOWED_ORIGINS`
   - `CSRF_TRUSTED_ORIGINS`
   - `MYSQL_DATABASE`、`MYSQL_USER`、`MYSQL_PASSWORD`、`MYSQL_HOST`、`MYSQL_PORT`
   - `DJOSER_DOMAIN`
4. 使用 `backend/Dockerfile` 构建并启动。容器会自动执行数据库迁移并通过 Gunicorn 监听 `${PORT:-8000}`。
5. 访问 `https://你的后端域名/api/health/`，确认返回 `{"status": "ok"}`。
6. 访问 `https://你的后端域名/admin/` 登录管理后台。

## 四、部署前端

1. 在项目根目录安装依赖：`pnpm install --frozen-lockfile`。
2. 将 `VITE_API_BASE_URL` 设置为 `https://你的后端域名/api`。
3. 执行 `pnpm run build`。
4. 将生成的 `dist` 目录部署到 Cloudflare、Nginx、对象存储静态网站或其他静态托管平台。
5. 若前端域名发生变化，同步修改后端的 `FRONTEND_URL`、`CORS_ALLOWED_ORIGINS`、`CSRF_TRUSTED_ORIGINS` 和 `DJOSER_DOMAIN`，然后重启后端。

## 五、迁移 MySQL 数据

使用 Navicat：

1. 在原 Railway MySQL 服务开启 Public Networking。
2. 使用公网 TCP Proxy 域名和端口连接原数据库。
3. 导出完整结构和数据，字符集选择 `utf8mb4`。
4. 在新服务器创建空数据库并导入。
5. 将新后端的 MySQL 环境变量改为新数据库连接信息。
6. 启动后端并运行迁移，Django 只会补充缺失迁移，不会删除已有业务数据。

也可以使用 `mysqldump` 和 `mysql` 命令完成导出导入。数据库备份包含用户邮箱等隐私数据，应加密保存且不要上传 GitHub。

## 六、迁移图片

- `public/assets` 是内置参考图库，已经包含在压缩包中。
- 生产环境用户上传文件应保存在 Cloudflare R2。
- 最简单的迁移方式是继续使用原 R2 存储桶，并在新后端配置相同的 R2 环境变量。
- 若更换存储桶，需要完整复制对象并保持对象路径不变，再更新 `R2_PUBLIC_BASE_URL`。

## 七、迁移后的检查清单

1. 前端首页能够打开，参数图片正常加载。
2. `/api/health/` 返回正常。
3. Django 后台可以登录。
4. 前端可以读取后台修改后的参数数据。
5. 新用户可以注册并收到激活邮件。
6. 用户名和邮箱都可以登录。
7. 模板可以保存、修改图片并重新打开。
8. 意见建议可以提交并在后台显示。
9. 用户上传图片重启服务器后仍然存在。
10. HTTPS、跨域和激活链接均指向新域名。

## 八、安全要求

- 不要提交 `.env`、数据库备份、SMTP 授权码、EmailJS Private Key、R2 Secret Key 或 MySQL 密码。
- 正式环境必须关闭 Django Debug。
- 数据库不要直接开放给所有公网地址；迁移完成后限制 Public Networking 或使用 IP 白名单。
- 上线前重新检查后台“部署配置”中的数据库、对象存储和邮件状态。
