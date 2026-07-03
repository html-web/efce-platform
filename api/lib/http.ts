interface RequestConfig extends RequestInit {
  baseURL?: string;
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
}

class HttpError extends Error {
  constructor(
    public response: Response,
    message?: string,
  ) {
    super(message || `HTTP ${response.status}: ${response.statusText}`);
    this.name = "HttpError";
  }
}

async function request<T>(url: string, config: RequestConfig = {}): Promise<T> {
  const { baseURL, params, timeout = 30000, ...init } = config;

  // Build URL with query params
  const fullUrl = new URL(url, baseURL || globalThis.location?.origin);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        fullUrl.searchParams.append(key, String(value));
      }
    });
  }

  // Setup abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(fullUrl.toString(), {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...init.headers,
      },
    });

    if (!response.ok) {
      throw new HttpError(response);
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return response.json() as Promise<T>;
    }

    return response.text() as Promise<T>;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const http = {
  get: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: "GET" }),

  post: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: "POST" }),

  put: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: "PUT" }),

  patch: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: "PATCH" }),

  delete: <T>(url: string, config?: RequestConfig) =>
    request<T>(url, { ...config, method: "DELETE" }),
};

export { HttpError };
