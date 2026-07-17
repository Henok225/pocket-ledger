const API_URL = import.meta.env.VITE_API_URL;
const PARSER_URL = import.meta.env.VITE_PARSER_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

export { API_URL, PARSER_URL };