<template>
  <div class="login-layout">
    <div class="login-card">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.login-layout {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.login-card {
  width: 100%;
  max-width: 460px;
  border-radius: 18px;
  border: 1px solid rgba(30, 27, 22, 0.12);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 36px rgba(30, 27, 22, 0.14);
  padding: 24px;
}
</style>
