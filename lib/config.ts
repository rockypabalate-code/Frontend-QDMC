export const appConfig = {
  name: "QDMC OT System",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/backend",
} as const;

export const backendConfig = {
  apiBaseUrl:
    process.env.BACKEND_API_BASE_URL ??
   
    "https://backend-api-qdmcph.onrender.com/api",
} as const;
