import os
from datetime import timedelta
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "local-development-key-change-before-production-2026")
DEBUG = os.getenv("DJANGO_DEBUG", "1") == "1"
ALLOWED_HOSTS = [item.strip() for item in os.getenv("DJANGO_ALLOWED_HOSTS", "127.0.0.1,localhost").split(",") if item.strip()]

INSTALLED_APPS = [
    "simpleui",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "rest_framework_simplejwt",
    "djoser",
    "accounts",
    "content",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    }
]
WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

if os.getenv("DJANGO_USE_SQLITE") == "1":
    DATABASES = {"default": {"ENGINE": "django.db.backends.sqlite3", "NAME": BASE_DIR / "db.sqlite3"}}
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.mysql",
            "NAME": os.getenv("MYSQL_DATABASE", "prompt_generator"),
            "USER": os.getenv("MYSQL_USER", "prompt_user"),
            "PASSWORD": os.getenv("MYSQL_PASSWORD", "change-me"),
            "HOST": os.getenv("MYSQL_HOST", "127.0.0.1"),
            "PORT": os.getenv("MYSQL_PORT", "3306"),
            "OPTIONS": {
                "charset": "utf8mb4",
                "init_command": "SET sql_mode='STRICT_TRANS_TABLES'",
            },
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

AUTH_USER_MODEL = "accounts.User"
LANGUAGE_CODE = "zh-hans"
TIME_ZONE = "Asia/Shanghai"
USE_I18N = True
USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [BASE_DIR / "static"]
STORAGES = {
    "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
    "staticfiles": {"BACKEND": "whitenoise.storage.CompressedStaticFilesStorage"},
}
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
R2_BUCKET_NAME = os.getenv("R2_BUCKET_NAME", "")
R2_ENDPOINT_URL = os.getenv("R2_ENDPOINT_URL", "")
R2_PUBLIC_BASE_URL = os.getenv("R2_PUBLIC_BASE_URL", "").rstrip("/")
if R2_BUCKET_NAME and R2_ENDPOINT_URL and os.getenv("R2_ACCESS_KEY_ID") and os.getenv("R2_SECRET_ACCESS_KEY"):
    storage_options = {
        "bucket_name": R2_BUCKET_NAME,
        "access_key": os.getenv("R2_ACCESS_KEY_ID"),
        "secret_key": os.getenv("R2_SECRET_ACCESS_KEY"),
        "endpoint_url": R2_ENDPOINT_URL,
        "region_name": "auto",
        "default_acl": None,
        "file_overwrite": False,
        "querystring_auth": not bool(R2_PUBLIC_BASE_URL),
        "object_parameters": {"CacheControl": "public, max-age=31536000, immutable"},
    }
    if R2_PUBLIC_BASE_URL:
        storage_options["custom_domain"] = R2_PUBLIC_BASE_URL.replace("https://", "").replace("http://", "")
        MEDIA_URL = f"{R2_PUBLIC_BASE_URL}/"
    STORAGES["default"] = {"BACKEND": "storages.backends.s3.S3Storage", "OPTIONS": storage_options}
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://127.0.0.1:5174")
CORS_ALLOWED_ORIGINS = [item.strip() for item in os.getenv("CORS_ALLOWED_ORIGINS", FRONTEND_URL).split(",") if item.strip()]
CSRF_TRUSTED_ORIGINS = [item.strip() for item in os.getenv("CSRF_TRUSTED_ORIGINS", FRONTEND_URL).split(",") if item.strip()]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": ("rest_framework_simplejwt.authentication.JWTAuthentication",),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.AllowAny",),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 100,
}

AUTHENTICATION_BACKENDS = (
    "accounts.authentication.EmailOrUsernameBackend",
)

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=14),
    "AUTH_HEADER_TYPES": ("Bearer",),
}

DJOSER = {
    "LOGIN_FIELD": "username",
    "USER_CREATE_PASSWORD_RETYPE": True,
    "SEND_ACTIVATION_EMAIL": True,
    "ACTIVATION_URL": "#/activate/{uid}/{token}",
    "PASSWORD_RESET_CONFIRM_URL": "#/password-reset/{uid}/{token}",
    "PASSWORD_RESET_CONFIRM_RETYPE": True,
    "SERIALIZERS": {
        "user_create": "accounts.serializers.UserCreateSerializer",
        "user_create_password_retype": "accounts.serializers.UserCreateSerializer",
        "user": "accounts.serializers.UserSerializer",
        "current_user": "accounts.serializers.UserSerializer",
    },
}

DEFAULT_FROM_EMAIL = os.getenv("DEFAULT_FROM_EMAIL", "no-reply@example.com")
FEEDBACK_NOTIFICATION_EMAIL = os.getenv("FEEDBACK_NOTIFICATION_EMAIL", "934361900@qq.com")
requested_email_backend = os.getenv("EMAIL_BACKEND", "content.email_backend.DatabaseConfiguredEmailBackend")
EMAIL_BACKEND = requested_email_backend if requested_email_backend in {
    "django.core.mail.backends.console.EmailBackend",
    "django.core.mail.backends.locmem.EmailBackend",
    "django.core.mail.backends.dummy.EmailBackend",
} else "content.email_backend.DatabaseConfiguredEmailBackend"
EMAIL_HOST = os.getenv("EMAIL_HOST", "")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", "587"))
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "")
EMAIL_USE_SSL = os.getenv("EMAIL_USE_SSL", "0") == "1"
EMAIL_USE_TLS = os.getenv("EMAIL_USE_TLS", "1") == "1" and not EMAIL_USE_SSL
EMAIL_TIMEOUT = int(os.getenv("EMAIL_TIMEOUT", "20"))
DOMAIN = os.getenv("DJOSER_DOMAIN", FRONTEND_URL.replace("https://", "").replace("http://", ""))
SITE_NAME = os.getenv("SITE_NAME", "图片提示词生成器")

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SESSION_COOKIE_SECURE = not DEBUG
CSRF_COOKIE_SECURE = not DEBUG

SIMPLEUI_HOME_INFO = False
SIMPLEUI_ANALYSIS = False
SIMPLEUI_DEFAULT_THEME = "admin.lte.css"
SIMPLEUI_CONFIG = {
    "system_keep": True,
    "menus": [],
    "dynamic": True,
}
SIMPLEUI_ICON = {
    "用户与权限": "fas fa-users-cog",
    "内容管理": "fas fa-images",
    "意见建议": "fas fa-bell",
    "反馈列表": "fas fa-envelope-open-text",
    "部署配置": "fas fa-server",
}
