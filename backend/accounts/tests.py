from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.core import mail
from django.test import override_settings
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from rest_framework import status
from rest_framework.test import APITestCase


@override_settings(EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend")
class AccountActivationTests(APITestCase):
    def test_user_can_login_with_username_or_email(self):
        get_user_model().objects.create_user(
            username="login-user",
            email="login@example.com",
            password="StrongPass123!",
        )

        username_login = self.client.post(
            "/api/auth/jwt/create/",
            {"username": "login-user", "password": "StrongPass123!"},
        )
        email_login = self.client.post(
            "/api/auth/jwt/create/",
            {"username": "LOGIN@example.com", "password": "StrongPass123!"},
        )

        self.assertEqual(username_login.status_code, status.HTTP_200_OK)
        self.assertEqual(email_login.status_code, status.HTTP_200_OK)
        self.assertIn("access", email_login.data)

    def test_user_can_request_password_reset_email(self):
        get_user_model().objects.create_user(
            username="forgot-user",
            email="forgot@example.com",
            password="StrongPass123!",
        )

        response = self.client.post(
            "/api/auth/users/reset_password/",
            {"email": "forgot@example.com"},
        )

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(len(mail.outbox), 1)
        message_text = mail.outbox[0].body + "".join(
            content for content, _mime in mail.outbox[0].alternatives
        )
        self.assertIn("#/password-reset/", message_text)

    def test_registration_creates_inactive_user_and_sends_vue_activation_link(self):
        response = self.client.post(
            "/api/auth/users/",
            {
                "username": "new-user",
                "email": "new-user@example.com",
                "password": "StrongPass123!",
                "re_password": "StrongPass123!",
            },
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertFalse(get_user_model().objects.get(username="new-user").is_active)
        self.assertEqual(len(mail.outbox), 1)
        message_text = mail.outbox[0].body + "".join(content for content, _mime in mail.outbox[0].alternatives)
        self.assertIn("#/activate/", message_text)

        user = get_user_model().objects.get(username="new-user")
        activation = self.client.post(
            "/api/auth/users/activation/",
            {"uid": urlsafe_base64_encode(force_bytes(user.pk)), "token": default_token_generator.make_token(user)},
        )
        user.refresh_from_db()
        self.assertEqual(activation.status_code, status.HTTP_204_NO_CONTENT)
        self.assertTrue(user.is_active)

    def test_inactive_user_can_request_another_activation_email(self):
        user = get_user_model().objects.create_user(
            username="pending-user",
            email="pending@example.com",
            password="StrongPass123!",
            is_active=False,
        )

        response = self.client.post(
            "/api/auth/users/resend_activation/",
            {"email": user.email},
        )

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(len(mail.outbox), 1)
        message_text = mail.outbox[0].body + "".join(
            content for content, _mime in mail.outbox[0].alternatives
        )
        self.assertIn("#/activate/", message_text)

    def test_registration_rejects_existing_email_without_sending_mail(self):
        get_user_model().objects.create_user(
            username="existing-user",
            email="registered@example.com",
            password="StrongPass123!",
        )

        response = self.client.post(
            "/api/auth/users/",
            {
                "username": "another-user",
                "email": "REGISTERED@example.com",
                "password": "StrongPass123!",
                "re_password": "StrongPass123!",
            },
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["email"], ["该邮箱已注册，请直接登录或使用其他邮箱。"])
        self.assertFalse(get_user_model().objects.filter(username="another-user").exists())
        self.assertEqual(len(mail.outbox), 0)
