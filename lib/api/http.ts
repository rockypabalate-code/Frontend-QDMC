import { appConfig } from "@/lib/config";

type ApiFetchOptions = RequestInit & {
  token?: string;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly payload: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  { token, headers, ...init }: ApiFetchOptions = {},
): Promise<T> {
  const url = `${appConfig.apiBaseUrl}${path}`;

  console.log("[apiFetch] request", {
    url,
    method: init.method ?? "GET",
    hasToken: Boolean(token),
  });

  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const payload = await response.json().catch(() => null);

  console.log("[apiFetch] response", {
    url,
    status: response.status,
    ok: response.ok,
    payload,
  });

  if (!response.ok) {
    throw new ApiError(
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "Request failed",
      response.status,
      payload,
    );
  }

  return payload as T;
}
