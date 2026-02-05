<script lang="ts" setup>
const users = [
  { id: "U-1024", name: "Nadia Rahman", role: "Operations Lead", status: "Active" },
  { id: "U-1041", name: "Tariq Hasan", role: "Finance Steward", status: "Active" },
  { id: "U-1099", name: "Lamia Chowdhury", role: "Support Captain", status: "Review" },
  { id: "U-1137", name: "Rafiul Karim", role: "Growth Analyst", status: "Paused" },
];
</script>

<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>User directory</h2>
        <p>Search, verify, and manage user access across teams.</p>
      </div>
      <div class="page-actions">
        <button class="button-outline" type="button">Sync users</button>
        <button class="button" type="button">Invite user</button>
      </div>
    </div>

    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              <strong>{{ user.name }}</strong>
              <div class="section-sub">{{ user.id }}</div>
            </td>
            <td>{{ user.role }}</td>
            <td><span class="chip">{{ user.status }}</span></td>
            <td>
              <div class="table-actions">
                <button class="button-outline" type="button">Profile</button>
                <button class="button" type="button">Message</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
