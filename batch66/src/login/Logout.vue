<template>
  <div class="logout-box">
    <h1>Logging out...</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Auth from "../services/auth";

const router = useRouter();

onMounted(async () => {
  await Auth.logout();
  router.replace("/login");
});
</script>

<style scoped>
.logout-box {
  text-align: center;
  padding: 12px;
}
</style>
