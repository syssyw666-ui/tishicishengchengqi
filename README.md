# 图片提示词生成器

线上前端：https://tishicishengchengqi.syssyw666.workers.dev/

项目已拆分为 Vue 前端与 Django REST 后端。未登录用户仍可完整使用提示词生成器；登录后可为当前配置命名、上传展示图片并保存为个人模板。

当前真实工作目录为 `D:\图片提示词生成器`。C 盘旧项目位置只作为跳转路径或兼容入口保留，后续开发、图片生成、缓存清理、构建、提交和发版均以 D 盘仓库为准。

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

这会把内置参数和精选提示词同步到数据库。当前种子数据包含 1,367 个参数和 154 个精选提示词。管理员在 Simple UI 中上传替换图片或修改提示词后，前端会优先使用 API 返回的同 ID 内容。

## 新增精选提示词固定流程

后续凡是新增精选提示词，都必须先查重再新增：

1. 检查前端精选提示词、后端 `catalog_seed.json`、后端数据库和提示词生成器参数库，确认没有重复或语义非常接近的项目。
2. 若发现重复或近似内容，先告知已有项目及相似原因，并与操作者确认是否仍然新增。
3. 若不重复，按所属类型加入精选提示词，并为需要展示图的项目生成全新图片。
4. 若对应风格、媒介、用途或版式在提示词生成器中不存在，再新增一个简洁参数卡。
5. 参数卡提示词只写该风格或用途本身的关键词，不复制精选提示词里的完整工作流。

完整图片生产、裁切和验证规范见 `PROJECT_IMAGE_GENERATION_STANDARD.md`。

## GitHub 同步与发版

本项目绑定 GitHub `main` 分支进行前端和后端自动部署。推荐每次按以下顺序操作：

```powershell
Set-Location D:\图片提示词生成器
git status --short
git pull --rebase origin main
$env:Path='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;'+$env:Path
.\node_modules\.bin\vue-tsc.cmd --noEmit -p frontend\tsconfig.json
.\node_modules\.bin\vite.cmd build --config frontend\vite.config.ts
Set-Location D:\图片提示词生成器\backend
$env:DJANGO_USE_SQLITE='1'
.\.venv\Scripts\python.exe manage.py test content.tests content.test_photo_purposes
Set-Location D:\图片提示词生成器
git add <正式变更文件>
git commit -m "<清晰提交说明>"
git push origin main
```

注意：

- 只提交正式源码、迁移、种子数据和正式资源图。
- 不提交 `.env`、数据库备份、SMTP 授权码、缓存、临时检查图和未使用草图。
- 如果第一次 GitHub push 或 pull 报网络/认证/远端更新错误，先不要改代码；确认是否需要 `pull --rebase`，然后重试。近期本项目多次出现第一次失败、后续重试成功的情况。
- 如果 Git 报 `dubious ownership`，执行一次 `git config --global --add safe.directory D:/图片提示词生成器`。
- 推送成功后记录提交 hash，Cloudflare Pages 和 Railway 会自动部署。若线上没有更新，优先查看部署日志。

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
