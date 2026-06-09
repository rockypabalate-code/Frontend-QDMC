import { apiFetch } from "@/lib/api/http";
import type {
  AuthSession,
  LoginPayload,
  RegisterPayload,
  User,
} from "@/types/auth";

export function login(payload: LoginPayload) {
  console.log("[auth.login] submitting", {
    email: payload.email,
    hasPassword: Boolean(payload.password),
  });

  return apiFetch<AuthSession>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function register(payload: RegisterPayload) {
  return apiFetch<{ user: User; message: string }>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getCurrentUser(token: string) {
  return apiFetch<{ user: User }>("/auth/me", { token });
}
