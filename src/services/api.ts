// API service for communicating with the backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface RequestOptions extends RequestInit {
  token?: string;
}

async function apiCall(endpoint: string, options: RequestOptions = {}) {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `API request failed with status ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authAPI = {
  signup: (email: string, password: string, name: string, role: string) =>
    apiCall('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, role }),
    }),

  login: (email: string, password: string) =>
    apiCall('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getMe: (token: string) => apiCall('/api/auth/me', { token }),
};

// Health check
export const healthAPI = {
  check: () => apiCall('/api/health'),
};
