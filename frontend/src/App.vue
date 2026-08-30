<script setup lang="ts">
import {
  Check, ChevronDown, Copy, Image as ImageIcon, Languages, LogIn, LogOut, MessageSquare,
  Pencil, RotateCcw, Save, Search, Send, Sparkles, Star, Trash2, X,
} from "lucide-vue-next";
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { api, type AuthUser, type SavedTemplate, type SiteSettings } from "./api";
import {
  aspectRatioOptions, clarityOptions, defaultInputs, galleryWorkflows, groupNameEn,
  uiText, virtualGroupCategory, type UiLanguage,
} from "./config";
import {
  featuredPromptCategories, featuredPromptGroups, featuredPrompts as builtInFeatured,
  type FeaturedPromptCategory, type FeaturedPromptItem,
} from "./data/featuredPrompts";
import { categories, categoryGroups, parameters as builtInParameters } from "./data/parameters";
import { buildPrompt } from "./lib/prompt";
import type { CategoryId, PromptInputs, PromptParameter } from "./types";
import TemplateImageCropper from "./components/TemplateImageCropper.vue";

const uiLanguage = ref<UiLanguage>("zh");
const promptLanguage = ref<UiLanguage>("zh");
const viewMode = ref<"generator" | "featured">("generator");
const inputs = reactive<PromptInputs>({ ...defaultInputs });
const allParameters = ref<PromptParameter[]>([...builtInParameters]);
const allFeatured = ref<FeaturedPromptItem[]>([...builtInFeatured]);
const selectedIds = ref<string[]>([]);
const activeWorkflowId = ref(galleryWorkflows[0].id);
const activeSectionId = ref(galleryWorkflows[0].sections[0].id);
const activeGroupBySection = reactive<Record<string, string>>({});
const search = ref("");
const selectedOnly = ref(false);
const checkedPanelOpen = ref(true);
const copied = ref("");
const featuredCategory = ref<FeaturedPromptCategory>(featuredPromptCategories[0].id);
const featuredGroup = ref("all");
const featuredSearch = ref("");
const feedbackText = ref("");
const feedbackFile = ref<File | null>(null);
const feedbackPreview = ref("");
const feedbackStatus = ref("");
const feedbackOpen = ref(false);
const feedbackBusy = ref(false);
const feedbackSuccess = ref(false);
const siteSettings = ref<SiteSettings>({ site_name: "图灵词造·AI提示词实训营", slogan: "词出新意，图出惊喜", logo_url: "/assets/turing-cizao-logo-v2.png", wechat_qr_url: "", help_text: "需要帮助？扫码加入微信群" });

const user = ref<AuthUser | null>(null);
const authOpen = ref(false);
const accountMenuOpen = ref(false);
const authMode = ref<"login" | "register">("login");
const authBusy = ref(false);
const authError = ref("");
const passwordResetOpen = ref(false);
const passwordResetEmail = ref("");
const passwordResetBusy = ref(false);
const passwordResetStatus = ref("");
const passwordConfirmOpen = ref(false);
const passwordConfirmBusy = ref(false);
const passwordConfirmStatus = ref("");
const passwordResetToken = reactive({ uid: "", token: "" });
const passwordConfirmForm = reactive({ new_password: "", re_new_password: "" });
const avatarInput = ref<HTMLInputElement | null>(null);
const loginForm = reactive({ identifier: "", password: "" });
const registerForm = reactive({ username: "", email: "", password: "", re_password: "" });
const activationPending = ref(false);
const activationEmail = ref("");
const activationResendBusy = ref(false);
const activationResendStatus = ref("");
const activationResult = ref<"" | "success" | "error">("");
const activationMessage = ref("");
const templatesOpen = ref(false);
const templatesBusy = ref(false);
const savedTemplates = ref<SavedTemplate[]>([]);
const saveTemplateOpen = ref(false);
const editingTemplateId = ref<number | null>(null);
const templateName = ref("");
const templateImage = ref<File | null>(null);
const templatePreview = ref("");
const templateStatus = ref("");
const actionNotice = ref("");

const t = computed(() => uiText[uiLanguage.value]);
const activeWorkflow = computed(() => galleryWorkflows.find((item) => item.id === activeWorkflowId.value) || galleryWorkflows[0]);
const activeSection = computed(() => activeWorkflow.value.sections.find((item) => item.id === activeSectionId.value) || activeWorkflow.value.sections[0]);
const activeCategory = computed(() => categories.find((item) => item.id === activeSection.value.category)!);
const activeGroup = computed(() => activeGroupBySection[activeSection.value.id] || "all");
const selectedSet = computed(() => new Set(selectedIds.value));
const selected = computed(() => selectedIds.value.map((id) => ({ id })));
const prompt = computed(() => buildPrompt(inputs, selected.value, allParameters.value));
const finalPromptValue = computed(() => promptLanguage.value === "zh" ? prompt.value.finalPromptZh : prompt.value.finalPromptEn);

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function fuzzyMatch(value: string, needle: string) {
  const haystack = normalize(value);
  if (!needle || haystack.includes(needle)) return true;
  let index = 0;
  for (const char of haystack) {
    if (char === needle[index]) index += 1;
    if (index >= needle.length) return true;
  }
  return false;
}

const visibleGroups = computed(() => {
  const source = categoryGroups[activeSection.value.category] || [];
  if (!activeSection.value.groups?.length) return source;
  const allowed = new Set(["all", ...activeSection.value.groups]);
  return source.filter((group) => allowed.has(group.id));
});

const filteredParameters = computed(() => {
  if (selectedOnly.value) return allParameters.value.filter((parameter) => selectedSet.value.has(parameter.id));
  const needle = normalize(search.value);
  if (needle) {
    return allParameters.value.filter((parameter) => fuzzyMatch(
      [parameter.zhName, parameter.enName, parameter.zhPrompt, parameter.enPrompt, parameter.category, parameter.styleGroup || ""].join(" "),
      needle,
    ));
  }
  const section = activeSection.value;
  const group = activeGroup.value;
  const virtual = virtualGroupCategory[section.category] || {};
  const sectionGroups = section.groups ? new Set(section.groups) : null;
  const validCategories = new Set<CategoryId>([section.category]);
  Object.entries(virtual).forEach(([groupId, category]) => {
    if ((!sectionGroups || sectionGroups.has(groupId)) && category) validCategories.add(category);
  });

  let list = allParameters.value.filter((parameter) => validCategories.has(parameter.category));
  if (sectionGroups) {
    list = list.filter((parameter) => {
      if (parameter.category !== section.category) return true;
      return Boolean(parameter.styleGroup && sectionGroups.has(parameter.styleGroup));
    });
  }
  if (group !== "all") {
    const mappedCategory = virtual[group];
    list = mappedCategory
      ? list.filter((parameter) => parameter.category === mappedCategory)
      : list.filter((parameter) => parameter.category === section.category && parameter.styleGroup === group);
  }
  return list;
});

const visibleFeatured = computed(() => {
  const needle = normalize(featuredSearch.value);
  return allFeatured.value.filter((item) => {
    const matches = fuzzyMatch(
      [item.zhTitle, item.enTitle, item.zhDescription, item.enDescription, item.prompt, item.category, item.group || ""].join(" "),
      needle,
    );
    if (needle) return matches;
    if (item.category !== featuredCategory.value) return false;
    if (featuredGroup.value !== "all" && item.group !== featuredGroup.value) return false;
    return matches;
  });
});

function primary(parameter: PromptParameter) {
  return uiLanguage.value === "zh" ? parameter.zhName : parameter.enName;
}

function secondary(parameter: PromptParameter) {
  return uiLanguage.value === "zh" ? parameter.enName : parameter.zhName;
}

function groupLabel(group: { id: string; zhName: string; enName?: string }) {
  return uiLanguage.value === "zh" ? group.zhName : (group.enName || groupNameEn[group.id] || group.id);
}

function setWorkflow(id: string) {
  const workflow = galleryWorkflows.find((item) => item.id === id)!;
  activeWorkflowId.value = id;
  activeSectionId.value = workflow.sections[0].id;
  selectedOnly.value = false;
}

function setSection(id: string) {
  activeSectionId.value = id;
  selectedOnly.value = false;
}

function toggleParameter(parameter: PromptParameter) {
  if (selectedSet.value.has(parameter.id)) {
    selectedIds.value = selectedIds.value.filter((id) => id !== parameter.id);
    return;
  }
  const category = categories.find((item) => item.id === parameter.category);
  if (category?.mode === "single") {
    const sameCategory = new Set(allParameters.value.filter((item) => item.category === parameter.category).map((item) => item.id));
    selectedIds.value = selectedIds.value.filter((id) => !sameCategory.has(id));
  }
  selectedIds.value.push(parameter.id);
}

function removeSelected(id: string) {
  selectedIds.value = selectedIds.value.filter((item) => item !== id);
}

function resetAll() {
  Object.assign(inputs, defaultInputs);
  selectedIds.value = [];
  search.value = "";
  selectedOnly.value = false;
}

async function copyText(label: string, value: string) {
  await navigator.clipboard.writeText(value);
  copied.value = label;
  window.setTimeout(() => { if (copied.value === label) copied.value = ""; }, 1400);
}

function chooseFeedbackImage(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0] || null;
  feedbackFile.value = file;
  if (feedbackPreview.value) URL.revokeObjectURL(feedbackPreview.value);
  feedbackPreview.value = file ? URL.createObjectURL(file) : "";
}

async function submitFeedback() {
  if (feedbackBusy.value) return;
  if (!feedbackText.value.trim() && !feedbackFile.value) {
    feedbackStatus.value = "请填写建议或插入图片。";
    return;
  }
  const form = new FormData();
  form.append("content", feedbackText.value.trim());
  if (feedbackFile.value) form.append("image", feedbackFile.value);
  feedbackBusy.value = true;
  feedbackStatus.value = "";
  try {
    await api.submitFeedback(form);
    feedbackText.value = "";
    feedbackFile.value = null;
    feedbackPreview.value = "";
    feedbackSuccess.value = true;
  } catch (error) {
    feedbackStatus.value = error instanceof Error ? error.message : "提交失败，请稍后重试。";
  } finally {
    feedbackBusy.value = false;
  }
}

function finishFeedback() {
  feedbackSuccess.value = false;
  feedbackOpen.value = false;
  feedbackStatus.value = "";
}

async function requestPasswordReset() {
  if (!passwordResetEmail.value.trim()) return;
  passwordResetBusy.value = true;
  passwordResetStatus.value = "";
  try {
    await api.requestPasswordReset(passwordResetEmail.value.trim().toLowerCase());
    passwordResetStatus.value = "重置邮件已发送，请检查收件箱和垃圾邮件。";
  } catch (error) {
    passwordResetStatus.value = error instanceof Error ? error.message : "发送失败，请稍后重试。";
  } finally {
    passwordResetBusy.value = false;
  }
}

async function confirmPasswordReset() {
  passwordConfirmBusy.value = true;
  passwordConfirmStatus.value = "";
  try {
    await api.confirmPasswordReset({ ...passwordResetToken, ...passwordConfirmForm });
    passwordConfirmStatus.value = "密码已更新，请使用新密码登录。";
    window.setTimeout(() => {
      passwordConfirmOpen.value = false;
      openAuth("login");
    }, 1000);
  } catch (error) {
    passwordConfirmStatus.value = error instanceof Error ? error.message : "重置失败，链接可能已过期。";
  } finally {
    passwordConfirmBusy.value = false;
  }
}

async function chooseAvatar(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  const form = new FormData();
  form.append("avatar", file);
  try {
    user.value = await api.updateProfile(form);
  } catch (error) {
    actionNotice.value = error instanceof Error ? error.message : "头像上传失败。";
  }
  (event.target as HTMLInputElement).value = "";
}

function openAuth(mode: "login" | "register" = "login") {
  authMode.value = mode;
  authError.value = "";
  authOpen.value = true;
}

async function login() {
  authBusy.value = true;
  authError.value = "";
  try {
    user.value = await api.login(loginForm.identifier.trim(), loginForm.password);
    authOpen.value = false;
  } catch (error) {
    authError.value = error instanceof Error ? error.message : "登录失败。";
  } finally {
    authBusy.value = false;
  }
}

async function register() {
  authError.value = "";
  if (Array.from(registerForm.password).length < 10) {
    authError.value = "密码至少需要 10 个字符。";
    return;
  }
  if (registerForm.password !== registerForm.re_password) {
    authError.value = "两次输入的密码不一致。";
    return;
  }
  authBusy.value = true;
  try {
    const email = registerForm.email.trim().toLowerCase();
    await api.register({ ...registerForm, username: registerForm.username.trim(), email });
    activationEmail.value = email;
    activationResendStatus.value = "";
    authOpen.value = false;
    activationPending.value = true;
  } catch (error) {
    const message = error instanceof Error ? error.message : "注册失败。";
    authError.value = /该邮箱已注册|email.*already|already.*email|email.*exists|unique.*email/i.test(message)
      ? "该邮箱已注册，请直接登录或使用其他邮箱。"
      : message;
  } finally {
    authBusy.value = false;
  }
}

async function resendActivationEmail() {
  if (!activationEmail.value || activationResendBusy.value) return;
  activationResendBusy.value = true;
  activationResendStatus.value = "";
  try {
    await api.resendActivation(activationEmail.value);
    activationResendStatus.value = "激活邮件已重新发送，请检查收件箱和垃圾邮件。";
  } catch (error) {
    activationResendStatus.value = error instanceof Error ? error.message : "重新发送失败，请稍后重试。";
  } finally {
    activationResendBusy.value = false;
  }
}

function logout() {
  api.logout();
  user.value = null;
  savedTemplates.value = [];
  accountMenuOpen.value = false;
}

function closeAccountMenu() {
  accountMenuOpen.value = false;
}

function finishActivationDialog() {
  const shouldOpenLogin = activationResult.value === "success";
  activationResult.value = "";
  if (shouldOpenLogin) openAuth("login");
}

async function openTemplates() {
  if (!user.value) return openAuth("login");
  templatesOpen.value = true;
  templatesBusy.value = true;
  try {
    savedTemplates.value = await api.templates();
  } finally {
    templatesBusy.value = false;
  }
}

function openSaveTemplate() {
  if (!user.value) return openAuth("login");
  editingTemplateId.value = null;
  templateName.value = "";
  templateImage.value = null;
  templatePreview.value = "";
  templateStatus.value = "";
  saveTemplateOpen.value = true;
}

function chooseTemplateImage(file: File, previewUrl: string) {
  templateImage.value = file;
  templatePreview.value = previewUrl;
}

function editTemplate(item: SavedTemplate) {
  editingTemplateId.value = item.id;
  templateName.value = item.name;
  templateImage.value = null;
  templatePreview.value = item.preview_image_url;
  templateStatus.value = "";
  templatesOpen.value = false;
  saveTemplateOpen.value = true;
}

async function saveTemplate() {
  if (!templateName.value.trim()) {
    templateStatus.value = "请填写模板名称。";
    return;
  }
  const form = new FormData();
  form.append("name", templateName.value.trim());
  if (editingTemplateId.value === null) {
    form.append("configuration", JSON.stringify({ inputs: { ...inputs }, selectedIds: selectedIds.value }));
    form.append("prompt_zh", prompt.value.finalPromptZh);
    form.append("prompt_en", prompt.value.finalPromptEn);
  }
  if (templateImage.value) form.append("preview_image", templateImage.value);
  try {
    const saved = editingTemplateId.value === null
      ? await api.saveTemplate(form)
      : await api.updateTemplate(editingTemplateId.value, form);
    const existingIndex = savedTemplates.value.findIndex((item) => item.id === saved.id);
    if (existingIndex >= 0) savedTemplates.value.splice(existingIndex, 1, saved);
    else savedTemplates.value.unshift(saved);
    saveTemplateOpen.value = false;
    actionNotice.value = editingTemplateId.value === null ? "模板已保存到“我的模板”。" : "模板名称和展示图片已更新。";
    editingTemplateId.value = null;
    window.setTimeout(() => actionNotice.value = "", 2400);
  } catch (error) {
    templateStatus.value = error instanceof Error ? error.message : "保存失败。";
  }
}

function applyTemplate(item: SavedTemplate) {
  const savedInputs = item.configuration?.inputs || {};
  Object.assign(inputs, defaultInputs, savedInputs);
  selectedIds.value = (item.configuration?.selectedIds || []).filter((id) => allParameters.value.some((parameter) => parameter.id === id));
  templatesOpen.value = false;
  viewMode.value = "generator";
}

async function deleteTemplate(item: SavedTemplate) {
  await api.deleteTemplate(item.id);
  savedTemplates.value = savedTemplates.value.filter((candidate) => candidate.id !== item.id);
}

async function activateFromHash() {
  const match = window.location.hash.match(/^#\/activate\/([^/]+)\/([^/]+)/);
  if (!match) return;
  activationMessage.value = "正在激活账号...";
  try {
    await api.activate(match[1], match[2]);
    activationResult.value = "success";
    activationMessage.value = "账号激活成功，现在可以登录。";
  } catch (error) {
    activationResult.value = "error";
    activationMessage.value = error instanceof Error ? error.message : "激活链接无效或已过期。";
  }
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

function passwordResetFromHash() {
  const match = window.location.hash.match(/^#\/password-reset\/([^/]+)\/([^/]+)/);
  if (!match) return;
  passwordResetToken.uid = match[1];
  passwordResetToken.token = match[2];
  passwordConfirmForm.new_password = "";
  passwordConfirmForm.re_new_password = "";
  passwordConfirmStatus.value = "";
  passwordConfirmOpen.value = true;
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

async function loadRemoteCatalog() {
  const [parametersResult, featuredResult, settingsResult] = await Promise.allSettled([
    api.catalogParameters(),
    api.catalogFeatured(),
    api.siteSettings(),
  ]);
  if (parametersResult.status === "fulfilled" && parametersResult.value.length) {
    allParameters.value = parametersResult.value;
  }
  if (featuredResult.status === "fulfilled" && featuredResult.value.length) {
    allFeatured.value = featuredResult.value;
  }
  if (settingsResult.status === "fulfilled" && settingsResult.value) {
    siteSettings.value = settingsResult.value;
    document.title = settingsResult.value.site_name;
  }
}

function syncRemoteCatalog() {
  if (document.visibilityState === "visible") void loadRemoteCatalog();
}

onMounted(async () => {
  await activateFromHash();
  passwordResetFromHash();
  if (api.hasToken()) {
    try { user.value = await api.me(); } catch { api.logout(); }
  }
  void loadRemoteCatalog();
  window.addEventListener("focus", syncRemoteCatalog);
  window.addEventListener("click", closeAccountMenu);
  document.addEventListener("visibilitychange", syncRemoteCatalog);
});

onUnmounted(() => {
  window.removeEventListener("focus", syncRemoteCatalog);
  window.removeEventListener("click", closeAccountMenu);
  document.removeEventListener("visibilitychange", syncRemoteCatalog);
});
</script>

<template>
  <header class="top-navigation">
    <div class="site-identity">
      <div class="site-identity-copy"><strong>{{ siteSettings.site_name }}</strong><small class="site-slogan" :title="siteSettings.slogan">{{ siteSettings.slogan }}</small></div>
    </div>
    <nav class="top-navigation-tabs" aria-label="主导航">
      <button :class="{ active: viewMode === 'generator' }" type="button" @click="viewMode = 'generator'"><Sparkles :size="16" />{{ t.generator }}</button>
      <button :class="{ active: viewMode === 'featured' }" type="button" @click="viewMode = 'featured'"><Star :size="16" />{{ t.featuredPrompts }}</button>
    </nav>
    <div class="top-account">
      <input ref="avatarInput" hidden type="file" accept="image/*" @change="chooseAvatar" />
      <template v-if="user">
        <button class="top-template-button" type="button" @click="openTemplates"><Star :size="15" />{{ t.myTemplates }}</button>
        <div class="account-menu-wrap" @click.stop>
          <button class="account-menu-trigger" type="button" @click="accountMenuOpen = !accountMenuOpen"><span class="top-avatar"><img :src="user.avatar_url || '/assets/default-avatar.png'" alt="用户头像" /></span><span class="top-account-name"><strong>{{ user.username }}</strong><small>{{ user.email }}</small></span><ChevronDown :size="14" /></button>
          <div v-if="accountMenuOpen" class="account-dropdown">
            <button type="button" @click="avatarInput?.click(); accountMenuOpen = false"><ImageIcon :size="15" /><span>更换头像</span></button>
            <button type="button" @click="uiLanguage = uiLanguage === 'zh' ? 'en' : 'zh'; accountMenuOpen = false"><Languages :size="15" /><span>{{ uiLanguage === 'zh' ? 'Switch to English' : '切换为中文' }}</span></button>
            <button class="account-dropdown-danger" type="button" @click="logout"><LogOut :size="15" /><span>{{ t.logout }}</span></button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="account-menu-wrap" @click.stop>
          <button class="account-menu-trigger" type="button" @click="accountMenuOpen = !accountMenuOpen"><span class="top-avatar"><img src="/assets/default-avatar.png" alt="默认用户头像" /></span><span class="top-account-name"><strong>{{ uiLanguage === 'zh' ? '访客用户' : 'Guest' }}</strong><small>{{ uiLanguage === 'zh' ? '登录后可保存模板' : 'Sign in to save templates' }}</small></span><ChevronDown :size="14" /></button>
          <div v-if="accountMenuOpen" class="account-dropdown">
            <button type="button" @click="uiLanguage = uiLanguage === 'zh' ? 'en' : 'zh'; accountMenuOpen = false"><Languages :size="15" /><span>{{ uiLanguage === 'zh' ? 'Switch to English' : '切换为中文' }}</span></button>
            <button type="button" @click="accountMenuOpen = false; openAuth('login')"><LogIn :size="15" /><span>{{ t.login }}</span></button>
          </div>
        </div>
      </template>
    </div>
  </header>
  <main :class="['app-shell', { 'featured-mode': viewMode === 'featured' }]">
    <section class="left-panel">
      <section v-if="viewMode === 'generator'" class="input-step-card" aria-label="第 1 步：画面基础信息">
        <p class="input-step-label">1 {{ uiLanguage === 'zh' ? '画面基础信息' : 'Image Brief' }}</p>
        <label class="field">
          <span>{{ t.subject }}</span>
          <textarea v-model="inputs.subjectZh" :placeholder="uiLanguage === 'zh' ? '例如：一位穿着红色披风的未来考古学家，站在巨型遗迹前' : 'Example: a future archaeologist in a red cloak before a giant ruin'" />
          <small class="field-hint">{{ t.focusHint }}</small>
        </label>
        <label class="field">
          <span>{{ t.avoid }}</span>
          <textarea v-model="inputs.avoid" />
        </label>
        <div class="generation-settings">
          <label class="field"><span>{{ t.aspectRatio }}</span>
            <select v-model="inputs.aspectRatio">
              <option v-for="option in aspectRatioOptions" :key="option.id" :value="option.id">{{ uiLanguage === 'zh' ? option.zhName : option.enName }} · {{ uiLanguage === 'zh' ? option.zhNote : option.enNote }}</option>
            </select>
          </label>
          <label class="field"><span>{{ t.clarity }}</span>
            <select v-model="inputs.clarity">
              <option v-for="option in clarityOptions" :key="option.id" :value="option.id">{{ uiLanguage === 'zh' ? option.zhName : option.enName }} · {{ uiLanguage === 'zh' ? option.zhNote : option.enNote }}</option>
            </select>
          </label>
        </div>
      </section>

      <section class="help-card">
        <div class="help-card-heading"><div><h3>{{ uiLanguage === 'zh' ? '需要帮助？' : 'Need help?' }}</h3><p>{{ siteSettings.help_text }}</p></div><MessageSquare :size="19" /></div>
        <div v-if="siteSettings.wechat_qr_url" class="wechat-qr"><img :src="siteSettings.wechat_qr_url" alt="微信群二维码" /><span>{{ uiLanguage === 'zh' ? '微信扫码加入交流群' : 'Scan with WeChat to join' }}</span></div>
        <div v-else class="wechat-qr-empty">{{ uiLanguage === 'zh' ? '管理员暂未上传微信群二维码' : 'WeChat QR code is not configured yet' }}</div>
        <button class="feedback-open-button" type="button" @click="feedbackOpen = true"><MessageSquare :size="15" />{{ uiLanguage === 'zh' ? '提交建议' : 'Submit feedback' }}</button>
      </section>

    </section>

    <section v-if="viewMode === 'featured'" class="featured-page">
      <div class="featured-header"><div><h2>{{ t.featuredPrompts }}</h2><p>{{ t.featuredHint }}</p></div></div>
      <div class="featured-tabs"><button v-for="category in featuredPromptCategories" :key="category.id" :class="{ active: featuredCategory === category.id }" type="button" @click="featuredCategory = category.id; featuredGroup = 'all'">{{ uiLanguage === 'zh' ? category.zhName : category.enName }}</button></div>
      <label class="featured-search"><Search :size="15" /><input v-model="featuredSearch" :placeholder="t.featuredSearch" /><button v-if="featuredSearch" type="button" @click="featuredSearch = ''"><X :size="15" /></button></label>
      <div v-if="featuredPromptGroups[featuredCategory]?.length" class="featured-subtabs"><button v-for="group in featuredPromptGroups[featuredCategory]" :key="group.id" :class="{ active: featuredGroup === group.id }" type="button" @click="featuredGroup = group.id">{{ uiLanguage === 'zh' ? group.zhName : group.enName }}</button></div>
      <div class="featured-grid">
        <article v-for="item in visibleFeatured" :key="item.id" :class="['featured-card', { 'featured-pair-card': item.category === 'color-edit' || item.category === 'image-to-image', 'featured-utility-card': item.category === 'utility' }]">
          <div v-if="item.category === 'color-edit' || item.category === 'image-to-image'" class="featured-pair">
            <figure><img class="featured-blur-bg" :src="item.originalImage || item.image" alt="" /><img class="featured-main-img" :src="item.originalImage || item.image" :alt="item.zhTitle + ' 原图'" /><figcaption>{{ uiLanguage === 'zh' ? '原图' : 'Before' }}</figcaption></figure>
            <figure><img class="featured-blur-bg" :src="item.resultImage || item.image" alt="" /><img class="featured-main-img" :src="item.resultImage || item.image" :alt="item.zhTitle + ' 效果图'" /><figcaption>{{ uiLanguage === 'zh' ? '效果图' : 'After' }}</figcaption></figure>
          </div>
          <div v-else-if="item.image" class="featured-image"><img class="featured-blur-bg" :src="item.image" alt="" /><img class="featured-main-img" :src="item.image" :alt="item.zhTitle" /></div>
          <div class="featured-card-body"><div><strong>{{ uiLanguage === 'zh' ? item.zhTitle : item.enTitle }}</strong><p>{{ uiLanguage === 'zh' ? item.zhDescription : item.enDescription }}</p></div><button class="quick-copy-button wide" type="button" @click="copyText(item.id, item.prompt)"><component :is="copied === item.id ? Check : Copy" :size="15" />{{ copied === item.id ? t.copied : t.copy }}</button></div>
        </article>
      </div>
    </section>

    <template v-else>
      <section class="gallery-panel">
        <div class="gallery-toolbar">
          <div class="workflow-tabs"><button v-for="workflow in galleryWorkflows" :key="workflow.id" :class="['workflow-tab', { active: workflow.id === activeWorkflow.id && !selectedOnly }]" type="button" @click="setWorkflow(workflow.id)"><span>{{ uiLanguage === 'zh' ? workflow.zhName : workflow.enName }}</span><small>{{ uiLanguage === 'zh' ? workflow.zhGuide : workflow.enGuide }}</small></button></div>
          <div class="section-tabs"><button v-for="section in activeWorkflow.sections" :key="section.id" :class="['section-tab', `importance-${section.importance}`, { active: section.id === activeSection.id && !selectedOnly, 'has-use-cases': section.useCases?.length }]" type="button" @click="setSection(section.id)"><span class="section-tab-title">{{ uiLanguage === 'zh' ? section.zhName : section.enName }}</span><small><b>{{ t[section.importance] }}</b>{{ categories.find(item => item.id === section.category)?.mode === 'single' ? t.single : t.multi }}</small><span v-if="section.useCases?.length" class="section-use-cases"><em v-for="useCase in section.useCases" :key="useCase">{{ t[useCase] }}</em></span></button></div>
          <div class="search-row"><label class="search-box"><Search :size="16" /><input v-model="search" :placeholder="t.search" /></label><button :class="['pill', { active: selectedOnly }]" type="button" @click="selectedOnly = !selectedOnly">{{ t.selected }} {{ selectedIds.length }}</button></div>
          <p v-if="!selectedOnly" class="category-note"><strong>{{ uiLanguage === 'zh' ? activeWorkflow.zhName : activeWorkflow.enName }}</strong><span>{{ uiLanguage === 'zh' ? activeWorkflow.zhGuide : activeWorkflow.enGuide }}</span><em><b>{{ t[activeSection.importance] }}</b>{{ uiLanguage === 'zh' ? activeSection.zhName : activeSection.enName }} / {{ uiLanguage === 'zh' ? activeCategory.enName : activeCategory.zhName }}: {{ uiLanguage === 'zh' ? activeSection.zhDescription : activeSection.enDescription }}</em></p>
          <div v-if="!selectedOnly && visibleGroups.length" class="style-group-row"><button v-for="group in visibleGroups" :key="group.id" :class="['style-chip', { active: activeGroup === group.id }]" type="button" @click="activeGroupBySection[activeSection.id] = group.id">{{ groupLabel(group) }}</button></div>
        </div>
        <div class="parameter-grid">
          <article v-for="parameter in filteredParameters" :key="parameter.id" :class="['parameter-card', { selected: selectedSet.has(parameter.id) }]" :data-tooltip="`${parameter.zhPrompt}\n${parameter.enPrompt}`">
            <div class="image-frame"><button class="image-button" type="button" @click="toggleParameter(parameter)"><img aria-hidden="true" class="image-backdrop" :src="parameter.image" alt="" /><img class="image-main" :src="parameter.image" :alt="`${parameter.zhName} ${parameter.enName}`" /><span v-if="selectedSet.has(parameter.id)" class="check-mark"><Check :size="16" /></span></button></div>
            <div class="card-meta"><div><strong>{{ primary(parameter) }}</strong><span>{{ secondary(parameter) }}</span></div></div>
          </article>
        </div>
      </section>

      <section class="right-panel">
        <div class="output-header"><div><h2>{{ t.promptPreview }}</h2><p>{{ t.selected }} {{ prompt.selectedItems.length }}</p></div></div>
        <div class="prompt-language-tabs"><button :class="{ active: promptLanguage === 'zh' }" type="button" @click="promptLanguage = 'zh'">{{ t.zh }}</button><button :class="{ active: promptLanguage === 'en' }" type="button" @click="promptLanguage = 'en'">{{ t.en }}</button></div>
        <section class="prompt-box final-prompt-box"><div class="prompt-box-header"><h3>{{ promptLanguage === 'zh' ? '最终版 · 中文' : 'Final Prompt · English' }}</h3><button type="button" @click="copyText(`final-${promptLanguage}`, finalPromptValue)"><component :is="copied === `final-${promptLanguage}` ? Check : Copy" :size="15" />{{ copied === `final-${promptLanguage}` ? t.copied : t.copy }}</button></div><textarea :value="finalPromptValue" readonly /></section>
        <div :class="['selected-list', { open: checkedPanelOpen }]"><button class="selected-toggle" type="button" @click="checkedPanelOpen = !checkedPanelOpen"><span>{{ t.selected }} {{ prompt.selectedItems.length }}</span><strong>{{ checkedPanelOpen ? t.collapse : t.expand }}</strong></button><template v-if="checkedPanelOpen"><p v-if="!prompt.selectedItems.length" class="empty">{{ uiLanguage === 'zh' ? '从中间图库选择风格、镜头、光线或用途。' : 'Select options from the gallery.' }}</p><div v-else class="selected-rows"><div v-for="entry in prompt.selectedItems" :key="entry.parameter.id" class="selected-row"><span>{{ primary(entry.parameter) }}</span><button class="selected-remove" type="button" @click="removeSelected(entry.parameter.id)"><X :size="14" /></button></div></div></template></div>
        <div class="right-account-actions"><button class="save-template-button" type="button" @click="openSaveTemplate"><Save :size="16" />{{ t.saveTemplate }}</button><p v-if="actionNotice" class="action-notice">{{ actionNotice }}</p></div>
        <button class="reset-button right-reset-button" type="button" @click="resetAll"><RotateCcw :size="16" />{{ t.reset }}</button>
      </section>
    </template>
  </main>

  <div v-if="authOpen" class="modal-backdrop" @click.self="authOpen = false">
    <form class="login-modal user-auth-modal" @submit.prevent="authMode === 'login' ? login() : register()">
      <div class="modal-title"><div><h2>{{ authMode === 'login' ? '用户登录' : '注册账号' }}</h2><p>{{ authMode === 'login' ? '登录后可保存并管理自己的提示词模板。' : '注册后需要通过邮件激活账号。' }}</p></div><button class="icon-button" type="button" @click="authOpen = false"><X :size="18" /></button></div>
      <label v-if="authMode === 'login'" class="field"><span>用户名或邮箱</span><input v-model="loginForm.identifier" autocomplete="username" placeholder="请输入用户名或注册邮箱" /></label>
      <label v-else class="field"><span>用户名</span><input v-model="registerForm.username" autocomplete="username" /></label>
      <label v-if="authMode === 'register'" class="field"><span>邮箱</span><input v-model="registerForm.email" type="email" autocomplete="email" /></label>
      <label v-if="authMode === 'login'" class="field"><span>密码</span><input v-model="loginForm.password" type="password" autocomplete="current-password" /></label>
      <label v-else class="field"><span>密码</span><input v-model="registerForm.password" type="password" autocomplete="new-password" minlength="10" /><small class="field-hint password-security-hint">至少 10 位，请使用未在其他网站使用过的独立密码。</small></label>
      <label v-if="authMode === 'register'" class="field"><span>确认密码</span><input v-model="registerForm.re_password" type="password" autocomplete="new-password" /></label>
      <p v-if="authError" class="form-error">{{ authError }}</p>
      <button class="primary-action auth-submit" type="submit" :disabled="authBusy">{{ authBusy ? '处理中...' : authMode === 'login' ? '登录' : '注册并发送激活邮件' }}</button>
      <button v-if="authMode === 'login'" class="forgot-password-button" type="button" @click="authOpen = false; passwordResetOpen = true; passwordResetStatus = ''">忘记密码？</button>
      <button class="auth-switch" type="button" @click="authMode = authMode === 'login' ? 'register' : 'login'; authError = ''">{{ authMode === 'login' ? '没有账号？立即注册' : '已有账号？返回登录' }}</button>
    </form>
  </div>

  <div v-if="passwordResetOpen" class="modal-backdrop" @click.self="passwordResetOpen = false"><form class="login-modal" @submit.prevent="requestPasswordReset"><div class="modal-title"><div><h2>找回密码</h2><p>输入注册邮箱，我们会向该邮箱发送密码重置链接。</p></div><button class="icon-button" type="button" @click="passwordResetOpen = false"><X :size="18" /></button></div><label class="field"><span>注册邮箱</span><input v-model="passwordResetEmail" type="email" autocomplete="email" required placeholder="请输入注册邮箱" /></label><p v-if="passwordResetStatus" class="password-reset-status">{{ passwordResetStatus }}</p><button class="primary-action auth-submit" type="submit" :disabled="passwordResetBusy">{{ passwordResetBusy ? '正在发送...' : '发送重置邮件' }}</button><button class="auth-switch" type="button" @click="passwordResetOpen = false; openAuth('login')">返回登录</button></form></div>

  <div v-if="passwordConfirmOpen" class="modal-backdrop"><form class="login-modal" @submit.prevent="confirmPasswordReset"><div class="modal-title"><div><h2>设置新密码</h2><p>请输入两次新密码，完成后即可返回登录。</p></div></div><label class="field"><span>新密码</span><input v-model="passwordConfirmForm.new_password" type="password" autocomplete="new-password" minlength="10" required /><small class="field-hint password-security-hint">至少 10 位，请使用未在其他网站使用过的独立密码。</small></label><label class="field"><span>确认新密码</span><input v-model="passwordConfirmForm.re_new_password" type="password" autocomplete="new-password" minlength="10" required /></label><p v-if="passwordConfirmStatus" class="password-reset-status">{{ passwordConfirmStatus }}</p><button class="primary-action auth-submit" type="submit" :disabled="passwordConfirmBusy">{{ passwordConfirmBusy ? '正在更新...' : '更新密码' }}</button></form></div>

  <div v-if="feedbackOpen" class="modal-backdrop" @click.self="!feedbackBusy && !feedbackSuccess && (feedbackOpen = false)"><section v-if="!feedbackSuccess" class="login-modal feedback-modal"><div class="modal-title"><div><h2>提交建议</h2><p>告诉我们希望增加的内容或遇到的问题，可同时上传图片。</p></div><button class="icon-button" type="button" :disabled="feedbackBusy" @click="feedbackOpen = false"><X :size="18" /></button></div><textarea v-model="feedbackText" class="feedback-textarea" placeholder="写下你希望增加的风格、参数、使用问题或优化建议..." /><div class="feedback-actions"><label class="upload-button"><ImageIcon :size="15" />{{ t.upload }}<input accept="image/*" type="file" @change="chooseFeedbackImage" /></label><button class="primary-action" type="button" :disabled="feedbackBusy" @click="submitFeedback"><Send :size="15" />{{ feedbackBusy ? '正在提交...' : t.submit }}</button></div><div v-if="feedbackPreview" class="feedback-preview"><img :src="feedbackPreview" alt="反馈图片预览" /><div><strong>{{ feedbackFile?.name }}</strong><button type="button" @click="feedbackFile = null; feedbackPreview = ''">移除图片</button></div></div><p v-if="feedbackStatus" class="feedback-status">{{ feedbackStatus }}</p></section><section v-else class="login-modal activation-modal"><div class="activation-icon success">✓</div><h2>提交成功</h2><p>感谢你的建议，我们已经收到并保存到管理后台。</p><button class="primary-action" type="button" @click="finishFeedback">确认</button></section></div>

  <div v-if="activationPending" class="modal-backdrop"><section class="login-modal activation-modal"><div class="activation-icon">@</div><h2>请激活你的账号</h2><p>激活邮件已发送至 <strong>{{ activationEmail }}</strong>。请确认地址无误，并检查垃圾邮件；激活后会自动返回本网站。</p><p v-if="activationResendStatus" class="activation-resend-status">{{ activationResendStatus }}</p><button class="auth-switch" type="button" :disabled="activationResendBusy" @click="resendActivationEmail">{{ activationResendBusy ? '正在重新发送...' : '没有收到？重新发送激活邮件' }}</button><button class="primary-action" type="button" @click="activationPending = false">我知道了</button></section></div>
  <div v-if="activationResult" class="modal-backdrop"><section class="login-modal activation-modal"><div :class="['activation-icon', activationResult]">{{ activationResult === 'success' ? '✓' : '!' }}</div><h2>{{ activationResult === 'success' ? '账号激活成功' : '账号激活失败' }}</h2><p>{{ activationMessage }}</p><button class="primary-action" type="button" @click="finishActivationDialog">{{ activationResult === 'success' ? '去登录' : '关闭' }}</button></section></div>

  <div v-if="saveTemplateOpen" class="modal-backdrop" @click.self="saveTemplateOpen = false"><form class="login-modal template-save-modal" @submit.prevent="saveTemplate"><div class="modal-title"><div><h2>{{ editingTemplateId === null ? '保存为模板' : '编辑模板' }}</h2><p>{{ editingTemplateId === null ? '保存当前填写内容、参数选择和中英文提示词。' : '修改模板名称或重新裁剪展示图片，原有提示词配置保持不变。' }}</p></div><button class="icon-button" type="button" @click="saveTemplateOpen = false"><X :size="18" /></button></div><label class="field"><span>模板名称</span><input v-model="templateName" maxlength="120" placeholder="例如：电影感人物海报" /></label><label class="field"><span>展示图片（可选）</span><TemplateImageCropper :source-url="templatePreview" @selected="chooseTemplateImage" /></label><p v-if="templateStatus" class="form-error">{{ templateStatus }}</p><button class="primary-action auth-submit" type="submit"><Save :size="16" />{{ editingTemplateId === null ? '保存模板' : '保存修改' }}</button></form></div>

  <div v-if="templatesOpen" class="modal-backdrop" @click.self="templatesOpen = false"><section class="templates-panel"><div class="modal-title"><div><h2>我的模板</h2><p>选择模板可恢复当时的主体、参数和设置；也可以修改名称与展示图片。</p></div><button class="icon-button" type="button" @click="templatesOpen = false"><X :size="18" /></button></div><p v-if="templatesBusy" class="empty">正在读取...</p><p v-else-if="!savedTemplates.length" class="empty">暂时没有保存的模板。</p><div v-else class="template-grid"><article v-for="item in savedTemplates" :key="item.id" class="template-card"><div class="template-card-image"><img v-if="item.preview_image_url" :src="item.preview_image_url" :alt="item.name" /><span v-else><Star :size="28" /></span></div><div><strong>{{ item.name }}</strong><small>{{ new Date(item.updated_at).toLocaleString() }}</small></div><div class="template-card-actions"><button class="primary-action" type="button" @click="applyTemplate(item)">使用模板</button><button class="template-edit-button" type="button" title="编辑模板" @click="editTemplate(item)"><Pencil :size="15" /></button><button class="selected-remove" type="button" title="删除模板" @click="deleteTemplate(item)"><Trash2 :size="15" /></button></div></article></div></section></div>
</template>
