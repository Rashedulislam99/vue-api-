<script setup>
const roles = [
  { name: "Operations Lead", summary: "Approvals and daily workflow control", status: "Active" },
  { name: "Finance Steward", summary: "Billing, reporting, and vendor compliance", status: "Active" },
  { name: "Support Captain", summary: "Escalations, queues, and customer health", status: "Review" },
  { name: "Growth Analyst", summary: "Read-only analytics access", status: "Draft" },
];
</script>

<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Role registry</h2>
        <p>Keep role coverage balanced across teams and regions.</p>
      </div>
      <div class="page-actions">
        <button class="button-outline" type="button">Export</button>
        <button class="button" type="button">Create role</button>
      </div>
    </div>

    <div class="panel">
      <div class="activity-list">
        <div v-for="role in roles" :key="role.name" class="activity-item">
          <div>
            <p>{{ role.name }}</p>
            <small>{{ role.summary }}</small>
          </div>
          <span class="chip">{{ role.status }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
