import json
from functools import lru_cache
from pathlib import Path

from django.db.models import Case, IntegerField, Value, When


SEED_PATH = Path(__file__).resolve().parents[1] / "catalog_seed.json"


@lru_cache(maxsize=1)
def catalog_labels():
    try:
        data = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        data = {}

    parameter_categories = {
        item["id"]: item["zhName"] for item in data.get("parameterCategories", [])
    }
    parameter_categories.setdefault("props", "道具元素")
    parameter_groups = {
        category: {
            item["id"]: item["zhName"]
            for item in items
            if item["id"] != "all"
        }
        for category, items in data.get("parameterGroups", {}).items()
    }
    parameter_groups.setdefault("props", {
        "daily": "日常用品",
        "work-tech": "工作与科技",
        "travel": "旅行与户外",
        "art-culture": "艺术与文化",
        "fantasy": "幻想道具",
        "commercial": "商业陈列",
    })
    featured_categories = {
        item["id"]: item["zhName"] for item in data.get("featuredPromptCategories", [])
    }
    featured_groups = {
        category: {
            item["id"]: item["zhName"]
            for item in items
            if item["id"] != "all"
        }
        for category, items in data.get("featuredPromptGroups", {}).items()
    }
    return parameter_categories, parameter_groups, featured_categories, featured_groups


def category_choices(featured=False):
    parameter_categories, _parameter_groups, featured_categories, _featured_groups = catalog_labels()
    labels = featured_categories if featured else parameter_categories
    return tuple(labels.items())


def group_choices(category="", featured=False, current=""):
    parameter_categories, parameter_groups, featured_categories, featured_groups = catalog_labels()
    categories = featured_categories if featured else parameter_categories
    groups = featured_groups if featured else parameter_groups
    choices = [("", "请选择子分类")]

    if category and category in groups:
        choices.extend(groups[category].items())
    else:
        choices.extend(
            (categories.get(category_id, category_id), tuple(values.items()))
            for category_id, values in groups.items()
            if values
        )

    known_values = set()
    for value, label in choices:
        if isinstance(label, tuple):
            known_values.update(option_value for option_value, _option_label in label)
        else:
            known_values.add(value)
    if current and current not in known_values:
        choices.append((current, f"未收录分类：{current}"))
    return tuple(choices)


def category_label(value, featured=False):
    labels = catalog_labels()[2 if featured else 0]
    return labels.get(value, value or "未分类")


def group_label(category, value, featured=False):
    groups = catalog_labels()[3 if featured else 1]
    return groups.get(category, {}).get(value, value or "未设置")


def category_rank(value, featured=False):
    labels = catalog_labels()[2 if featured else 0]
    try:
        return list(labels).index(value)
    except ValueError:
        return len(labels)


def group_rank(category, value, featured=False):
    groups = catalog_labels()[3 if featured else 1].get(category, {})
    if not value:
        return -1
    try:
        return list(groups).index(value)
    except ValueError:
        return len(groups)


def catalog_ordering(featured=False):
    categories = catalog_labels()[2 if featured else 0]
    groups = catalog_labels()[3 if featured else 1]
    group_field = "group" if featured else "style_group"
    category_expression = Case(
        *(When(category=value, then=Value(index)) for index, value in enumerate(categories)),
        default=Value(len(categories)),
        output_field=IntegerField(),
    )
    group_whens = [When(**{"category": category, group_field: ""}, then=Value(-1)) for category in categories]
    for category, values in groups.items():
        group_whens.extend(
            When(**{"category": category, group_field: value}, then=Value(index))
            for index, value in enumerate(values)
        )
    group_expression = Case(
        *group_whens,
        default=Value(999),
        output_field=IntegerField(),
    )
    return category_expression, group_expression, "order", "id"
