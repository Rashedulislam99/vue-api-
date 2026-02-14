<template>
  <form class="login-form" @submit.prevent="submitLogin">
    <div>
      <p class="login-eyebrow">Secure Access</p>
      <h1>Login</h1>
      <p class="login-sub">Enter your email and password to continue.</p>
    </div>

    <label class="field">
      <span>Email</span>
      <input v-model="form.email" type="email" autocomplete="email" required />
    </label>

    <label class="field">
      <span>Password</span>
      <input v-model="form.password" type="password" autocomplete="current-password" required />
    </label>

    <p v-if="error" class="error-text">{{ error }}</p>

    <button class="button" type="submit" :disabled="loading">
      {{ loading ? "Logging in..." : "Login" }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Auth from "../services/auth";

const router = useRouter();
const loading = ref(false);
const error = ref("");

const form = reactive({
  email: "",
  password: "",
});

const submitLogin = async () => {
  loading.value = true;
  error.value = "";

  try {
    await Auth.login(form);
    router.push("/");
  } catch (err) {
    error.value = err?.response?.data?.message || "Invalid login credentials.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-form {
  display: grid;
  gap: 14px;
}

.login-eyebrow {
  margin: 0;
  color: #e05a2a;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-size: 0.75rem;
  font-weight: 700;
}

h1 {
  margin: 4px 0 6px;
}

.login-sub {
  margin: 0;
  color: #5f564b;
}

.error-text {
  margin: 0;
  color: #c62828;
  font-size: 0.9rem;
}
</style>
