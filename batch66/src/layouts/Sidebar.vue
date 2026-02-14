<template>
  <aside class="app-sidebar">
    <div class="sidebar-top">
      <div class="brand">
        <span class="brand-mark">RB</span>
        <div>
          <p class="brand-title">Rashed Base</p>
          <p class="brand-sub">Access Console</p>
        </div>
      </div>

      <nav class="nav">
        <details class="nav-group" open>
          <summary class="nav-group-title">Core</summary>
          <div class="nav-links">
            <RouterLink to="/" class="nav-link" active-class="is-active">
              <span>Dashboard</span>
              <small>Overview and stats</small>
            </RouterLink>
          </div>
        </details>

        <details class="nav-group" :open="isCustomersOpen">
          <summary class="nav-group-title">Customers</summary>
          <div class="nav-links">
            <RouterLink to="/customers" class="nav-link" active-class="is-active">
              <span>Customer list</span>
              <small>All customer records</small>
            </RouterLink>
            <RouterLink to="/customers/create" class="nav-link" active-class="is-active">
              <span>Add customer</span>
              <small>Create a new customer</small>
            </RouterLink>
          </div>
        </details>

        <details class="nav-group" open>
          <summary class="nav-group-title">Management</summary>
          <div class="nav-links">
            <RouterLink to="/user" class="nav-link" active-class="is-active">
              <span>Users</span>
              <small>Directory access</small>
            </RouterLink>
            <RouterLink to="/products" class="nav-link" active-class="is-active">
              <span>Products</span>
              <small>Catalog and pricing</small>
            </RouterLink>
            <RouterLink to="/logout" class="nav-link" active-class="is-active">
              <span>Logout</span>
              <small>End current session</small>
            </RouterLink>
          </div>
        </details>

        <details class="nav-group" open>
          <summary class="nav-group-title">Roles</summary>
          <div class="nav-links">
            <RouterLink to="/role" class="nav-link" active-class="is-active">
              <span>Role list</span>
              <small>Permissions registry</small>
            </RouterLink>
            <RouterLink to="/role/create" class="nav-link" active-class="is-active">
              <span>Create role</span>
              <small>Build new access</small>
            </RouterLink>
          </div>
        </details>
      </nav>
    </div>

    <div class="sidebar-footer">
      <div class="avatar">RA</div>
      <div>
        <p class="user-name">Rashed Ahmed</p>
        <p class="user-role">System admin</p>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isCustomersOpen = computed(() => route.path.startsWith("/customers"));
</script>
