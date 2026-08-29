from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


class EmailOrUsernameBackend(ModelBackend):
    """Authenticate with either the username or the registered email address."""

    def authenticate(self, request, username=None, password=None, **kwargs):
        identifier = (username or kwargs.get("email") or "").strip()
        if not identifier or password is None:
            return None

        user_model = get_user_model()
        lookup = {"email__iexact": identifier} if "@" in identifier else {"username__iexact": identifier}
        try:
            user = user_model._default_manager.get(**lookup)
        except (user_model.DoesNotExist, user_model.MultipleObjectsReturned):
            return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None
