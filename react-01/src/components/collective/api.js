const defaultApiUrl = process.env.NODE_ENV === "production"
  ? "https://vaultedbyjd-backend.onrender.com"
  : "http://localhost:3002";
export const API_URL = (process.env.REACT_APP_API_URL || defaultApiUrl).replace(/\/$/, "");

export async function requestCards(path = "", options = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}/api/cards${path}`, options);
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error("Cannot reach The Collective. Check that the backend is running and try again.");
  }
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.message || "The request failed. Please try again.");
  if (!data) throw new Error("The server returned an unexpected response.");
  return data;
}
