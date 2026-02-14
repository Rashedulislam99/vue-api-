import axios from "axios";
import api from "./axios";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

const setGlobalToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return;
  }

  delete axios.defaults.headers.common.Authorization;
  delete api.defaults.headers.common.Authorization;
};

const storedToken = localStorage.getItem(TOKEN_KEY);
if (storedToken) {
  setGlobalToken(storedToken);
}

const Auth = {
  async login(payload) {
    const { data } = await api.post("/login", payload);

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    setGlobalToken(data.token);

    return data;
  },

  async logout() {
    try {
      await api.post("/logout");
    } finally {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      setGlobalToken(null);
    }
  },

  async me() {
    const { data } = await api.get("/me");
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return data.user;
  },

  isAuthenticated() {
    return Boolean(localStorage.getItem(TOKEN_KEY));
  },

  token() {
    return localStorage.getItem(TOKEN_KEY);
  },

  user() {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },
};

export default Auth;
