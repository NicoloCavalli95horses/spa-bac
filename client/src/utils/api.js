const API_BASE_URL = "http://localhost:3456/api";

export async function fetchJson(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    ...options
  });


  return response.json();
}