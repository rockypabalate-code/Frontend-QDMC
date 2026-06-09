import type { AuthSession, UserRole } from "@/types/auth";

export const authStorageKeys = {
  token: "qdmc.auth.token",
  user: "qdmc.auth.user",
} as const;

export function saveAuthSession(session: AuthSession) {
  localStorage.setItem(authStorageKeys.token, session.token);
  localStorage.setItem(authStorageKeys.user, JSON.stringify(session.user));
}

export function clearAuthSession() {
  localStorage.removeItem(authStorageKeys.token);
  localStorage.removeItem(authStorageKeys.user);
}

export function getPostLoginRoute(role: UserRole) {
  if (role === "user") {
    return "/overtime-requests";
  }

  return "/dashboard";
}
