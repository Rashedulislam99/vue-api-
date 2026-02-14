<template>
  <header class="app-header">
    <div>
      <p class="header-eyebrow">Workspace</p>
      <h1>{{ pageTitle }}</h1>
      <p class="header-sub">{{ pageSubtitle }}</p>
    </div>
    <div class="header-actions">
      <label class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M16.5 16.5L21 21M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input type="text" placeholder="Search roles, teams, or users" aria-label="Search" />
      </label>
      <button class="primary-pill" type="button">New request</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => {
  if (route.path === "/") return "Operations dashboard";
  if (route.path === "/role") return "Role registry";
  if (route.path === "/role/create") return "Create a role";
  if (route.path.startsWith("/role/edit")) return "Edit role";
  if (route.path.startsWith("/customers")) return "Customer center";
  if (route.path === "/user") return "User directory";
  if (route.path === "/products") return "Product catalog";
  return "Workspace";
});

const pageSubtitle = computed(() => {
  if (route.path === "/") return "Track approvals, activity, and current access health.";
  if (route.path === "/role") return "Review active roles, permissions, and coverage.";
  if (route.path === "/role/create") return "Build a new access profile for your teams.";
  if (route.path.startsWith("/role/edit")) return "Update the role scope and permissions.";
  if (route.path.startsWith("/customers")) return "Manage key accounts, contacts, and status updates.";
  if (route.path === "/user") return "Search and monitor team member access in one place.";
  if (route.path === "/products") return "Browse, compare, and organize available products.";
  return "Manage access and visibility across teams.";
});
</script>
