const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api").replace(/\/$/, "");

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  avatar_url: string;
}

export interface SiteSettings {
  site_name: string;
  slogan: string;
  logo_url: string;
  wechat_qr_url: string;
  help_text: string;
}

export interface SavedTemplate {
  id: number;
  name: string;
  preview_image_url: string;
  configuration: { inputs?: Record<string, string>; selectedIds?: string[] };
  prompt_zh: string;
  prompt_en: string;
  created_at: string;
  updated_at: string;
}

function accessToken() {
  return localStorage.getItem("prompt-generator-access-token") || "";
}

let refreshRequest: Promise<string> | null = null;

async function refreshAccessToken() {
  if (refreshRequest) return refreshRequest;
  const refresh = localStorage.getItem("prompt-generator-refresh-token");
  if (!refresh) throw new Error("登录状态已过期，请重新登录。");
  refreshRequest = fetch(`${API_BASE}/auth/jwt/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error("登录状态已过期，请重新登录。");
      const body = await response.json() as { access: string };
      localStorage.setItem("prompt-generator-access-token", body.access);
      return body.access;
    })
    .finally(() => { refreshRequest = null; });
  return refreshRequest;
}

async function request<T>(path: string, init: RequestInit = {}, authenticated = false): Promise<T> {
  const headers = new Headers(init.headers || {});
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  if (authenticated && accessToken()) headers.set("Authorization", `Bearer ${accessToken()}`);
  let response = await fetch(`${API_BASE}${path}`, { ...init, headers });
  if (authenticated && response.status === 401 && localStorage.getItem("prompt-generator-refresh-token")) {
    try {
      headers.set("Authorization", `Bearer ${await refreshAccessToken()}`);
      response = await fetch(`${API_BASE}${path}`, { ...init, headers });
    } catch {
      localStorage.removeItem("prompt-generator-access-token");
      localStorage.removeItem("prompt-generator-refresh-token");
    }
  }
  if (!response.ok) {
    let detail = `请求失败（${response.status}）`;
    try {
      const body = await response.json();
      detail = body.detail || Object.values(body).flat().join(" ") || detail;
    } catch {
      // Keep the status-based message when the server did not return JSON.
    }
    throw new Error(detail);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const api = {
  baseUrl: API_BASE,
  async login(identifier: string, password: string) {
    const tokens = await request<{ access: string; refresh: string }>("/auth/jwt/create/", {
      method: "POST",
      body: JSON.stringify({ username: identifier, password }),
    });
    localStorage.setItem("prompt-generator-access-token", tokens.access);
    localStorage.setItem("prompt-generator-refresh-token", tokens.refresh);
    return request<AuthUser>("/auth/users/me/", {}, true);
  },
  register(payload: { username: string; email: string; password: string; re_password: string }) {
    return request("/auth/users/", { method: "POST", body: JSON.stringify(payload) });
  },
  activate(uid: string, token: string) {
    return request("/auth/users/activation/", { method: "POST", body: JSON.stringify({ uid, token }) });
  },
  me: () => request<AuthUser>("/auth/users/me/", {}, true),
  logout() {
    localStorage.removeItem("prompt-generator-access-token");
    localStorage.removeItem("prompt-generator-refresh-token");
  },
  hasToken: () => Boolean(accessToken()),
  templates: () => request<SavedTemplate[]>("/templates/?page_size=100", {}, true).then((body: any) => body.results || body),
  saveTemplate(form: FormData) {
    return request<SavedTemplate>("/templates/", { method: "POST", body: form }, true);
  },
  updateTemplate(id: number, form: FormData) {
    return request<SavedTemplate>(`/templates/${id}/`, { method: "PATCH", body: form }, true);
  },
  deleteTemplate(id: number) {
    return request<void>(`/templates/${id}/`, { method: "DELETE" }, true);
  },
  submitFeedback(form: FormData) {
    return request("/feedback/", { method: "POST", body: form }, false);
  },
  catalogParameters: () => request<any[]>("/catalog/parameters/").then((body: any) => body.results || body),
  catalogFeatured: () => request<any[]>("/catalog/featured-prompts/").then((body: any) => body.results || body),
  resendActivation(email: string) {
    return request<void>("/auth/users/resend_activation/", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  },
  requestPasswordReset(email: string) {
    return request<void>("/auth/users/reset_password/", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  },
  confirmPasswordReset(payload: { uid: string; token: string; new_password: string; re_new_password: string }) {
    return request<void>("/auth/users/reset_password_confirm/", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
  updateProfile(form: FormData) {
    return request<AuthUser>("/auth/users/me/", { method: "PATCH", body: form }, true);
  },
  siteSettings: () => request<SiteSettings[]>("/site-settings/").then((body: any) => (body.results || body)[0] || null),
};
