import { backendConfig } from "@/lib/config";

type BackendRouteContext = {
  params: Promise<{
    path: string[];
  }>;
};

async function proxyRequest(request: Request, context: BackendRouteContext) {
  const { path } = await context.params;
  const incomingUrl = new URL(request.url);
  const targetUrl = new URL(
    `${backendConfig.apiBaseUrl}/${path.join("/")}${incomingUrl.search}`,
  );
  const headers = new Headers(request.headers);

  headers.delete("host");

  const body = ["GET", "HEAD"].includes(request.method)
    ? undefined
    : await request.text();

  console.log("[backend proxy] request", {
    method: request.method,
    targetUrl: targetUrl.toString(),
  });

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
    cache: "no-store",
  });
  const responseBody = await response.text();
  const responseHeaders = new Headers(response.headers);

  responseHeaders.delete("content-encoding");
  responseHeaders.delete("content-length");

  console.log("[backend proxy] response", {
    targetUrl: targetUrl.toString(),
    status: response.status,
    ok: response.ok,
  });

  return new Response(responseBody, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}

export function GET(request: Request, context: BackendRouteContext) {
  return proxyRequest(request, context);
}

export function POST(request: Request, context: BackendRouteContext) {
  return proxyRequest(request, context);
}

export function PATCH(request: Request, context: BackendRouteContext) {
  return proxyRequest(request, context);
}

export function PUT(request: Request, context: BackendRouteContext) {
  return proxyRequest(request, context);
}

export function DELETE(request: Request, context: BackendRouteContext) {
  return proxyRequest(request, context);
}
