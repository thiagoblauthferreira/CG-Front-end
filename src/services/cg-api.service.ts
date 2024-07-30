import { getCookie } from "./cookie.service";

type IMethodType = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

const apiBase = process.env.API_URI || "http://localhost:8080";

async function responseJson(response: Response) {
  if (!response.ok || response.status >= 400) {
    throw await response.clone().json();
  }
  return response.json();
}

function isUrl(url: string): boolean {
  const regex =
    /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return regex.test(url);
}

export async function request(
  url: string,
  method?: IMethodType,
  body?: { [key: string]: any } | null,
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  const token = getCookie("token");

  const updatedHeader = {
    "Content-Type": "application/json",
    Authorization: token,
    ...(headers || {}),
  };

  return await fetch(isUrl(url) ? url : `${apiBase}/api${url}`, {
    method: method,
    headers: updatedHeader,
    body: body ? JSON.stringify(body) : null,
    ...options,
  }).then(responseJson);
}

export function buildUrl(baseUrl: string, params?: { [key: string]: any }): string {
  if (!params) {
    return baseUrl;
  }

  const queryString = Object.keys(params)
    .map((k) => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map((param: any) => `${encodeURIComponent(k)}=${encodeURIComponent(param)}`)
          .join("&");
      }
      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    })
    .join("&");

  return `${baseUrl}?${queryString}`;
}

export async function get(
  url: string,
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  return await request(url, "GET", null, headers, options);
}

export async function post(
  url: string,
  data?: { [key: string]: any },
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  return await request(url, "POST", data, headers, options);
}

export async function put(
  url: string,
  data?: { [key: string]: any },
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  return await request(url, "PUT", data, headers, options);
}

export async function patch(
  url: string,
  data?: { [key: string]: any },
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  return await request(url, "PATCH", data, headers, options);
}

export async function del(
  url: string,
  data?: { [key: string]: any },
  headers?: { [key: string]: string },
  options?: { [key: string]: any }
) {
  return await request(url, "DELETE", data, headers, options);
}
