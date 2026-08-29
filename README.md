# 图片提示词生成器

线上前端：https://tishicishengchengqi.syssyw666.workers.dev/

项目已拆分为 Vue 前端与 Django REST 后端。未登录用户仍可完整使用提示词生成器；登录后可为当前配置命名、上传展示图片并保存为个人模板。

## 技术架构

- 前端：Vue 3 + TypeScript + Vite，代码位于 `frontend/`
- 后端：Django 5.2 LTS + Django REST Framework，代码位于 `backend/`
- 数据库：MySQL 8，使用 Django ORM 与 `mysqlclient`
- 账号：Djoser + JWT，注册后必须通过邮件激活
- 后台：Django Simple UI，地址为 `/admin/`
- 数据库可视化：可使用 Navicat 连接同一个 MySQL 实例

## 第一次本地启动

1. 安装 Node.js 22、Python 3.12 和 MySQL 8。
2. 复制 `backend/.env.example` 为 `backend/.env`，填写 MySQL 和邮箱 SMTP 信息。
3. 在 MySQL 或 Navicat 中创建 `prompt_generator` 数据库及对应用户。
4. 安装依赖并初始化数据库：

```bash
pnpm install
python -m pip install -r backend/requirements.txt
python backend/manage.py migrate
python backend/manage.py seed_catalog
python backend/manage.py createsuperuser
```

5. 分别启动后端与前端：

```bash
python backend/manage.py runserver 127.0.0.1:8000
pnpm run dev:frontend
```

前端地址为 `http://127.0.0.1:5174/`，管理后台为 `http://127.0.0.1:8000/admin/`。

## 现有图库同步到后台

前端仍内置完整离线图库，后端不可用时生成器也能浏览和生成提示词。修改 `frontend/src/data/` 后执行：

```bash
pnpm run catalog:export
python backend/manage.py seed_catalog
```

这会把 1,334 个参数和 144 个精选提示词同步到数据库。管理员在 Simple UI 中上传替换图片或修改提示词后，前端会优先使用 API 返回的同 ID 内容。

## 邮件激活

正式环境必须在 `backend/.env` 中配置真实 SMTP，并把以下值改为线上地址：

```text
FRONTEND_URL=https://你的前端域名
DJOSER_DOMAIN=你的前端域名
CORS_ALLOWED_ORIGINS=https://你的前端域名
CSRF_TRUSTED_ORIGINS=https://你的前端域名
DEFAULT_FROM_EMAIL=你的发件邮箱
```

163 邮箱建议使用以下 SMTP 加密组合：

```text
EMAIL_HOST=smtp.163.com
EMAIL_PORT=465
EMAIL_USE_SSL=1
EMAIL_USE_TLS=0
EMAIL_TIMEOUT=20
```

`EMAIL_HOST_PASSWORD` 应填写邮箱客户端授权码，不是网页登录密码。授权码只保存在被 Git 忽略的 `backend/.env` 中。

注册成功后前端显示“等待激活”；邮件链接格式为 `https://你的前端域名/#/activate/{uid}/{token}`，点击后 Vue 会调用后端激活接口并显示登录入口。

## REST API

- `GET /api/catalog/parameters/`：可用参数图库
- `GET /api/catalog/featured-prompts/`：精选提示词
- `POST /api/auth/users/`：注册
- `POST /api/auth/users/activation/`：激活账号
- `POST /api/auth/jwt/create/`：登录并获取 JWT
- `GET|POST /api/templates/`：读取或保存当前用户模板
- `GET|PUT|PATCH|DELETE /api/templates/{id}/`：管理单个个人模板
- `POST /api/feedback/`：提交意见建议

模板接口必须登录，并且后端强制限定为当前用户自己的数据。

## 构建与测试

```bash
pnpm run build
python backend/manage.py test accounts content
```

图片生成、裁切或替换前，必须先阅读 `PROJECT_IMAGE_GENERATION_STANDARD.md` 和项目内 `photo-pltb` 规范。
