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
        <p class="nav-label">Core</p>
        <RouterLink to="/" class="nav-link" active-class="is-active">
          <span>Dashboard</span>
          <small>Overview and stats</small>
        </RouterLink>
        <RouterLink to="/customers" class="nav-link" active-class="is-active">
          <span>Customer</span>
          <small>Accounts and contacts</small>
        </RouterLink>
        <RouterLink to="/user" class="nav-link" active-class="is-active">
          <span>User</span>
          <small>Directory access</small>
        </RouterLink>
        <RouterLink to="/role" class="nav-link" active-class="is-active">
          <span>Roles</span>
          <small>Permissions registry</small>
        </RouterLink>
        <RouterLink to="/role/create" class="nav-link" active-class="is-active">
          <span>Create role</span>
          <small>Build new access</small>
        </RouterLink>
      </nav>

      <div class="sidebar-card">
        <p class="card-title">Quick action</p>
        <p class="card-text">Invite teammates to a new role in two clicks.</p>
        <button class="card-button" type="button">Invite team</button>
      </div>
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
</script>
