<script setup>
import { ref } from "vue";
import Counter from "../../components/Counter.vue";

const kpis = [
  { label: "Active roles", value: "42", meta: "3 pending review" },
  { label: "Approval queues", value: "18", meta: "4 urgent" },
  { label: "Open tickets", value: "126", meta: "96 resolved this week" },
  { label: "Data exports", value: "9", meta: "Last run 2 hours ago" },
];

const activities = [
  { title: "Finance Lead role updated", time: "Today, 09:14", status: "Approved" },
  { title: "Vendor access request", time: "Today, 08:48", status: "In review" },
  { title: "Customer support queue expanded", time: "Yesterday, 16:22", status: "Scheduled" },
  { title: "Policy audit completed", time: "Yesterday, 12:05", status: "Archived" },
];

const focusMode = ref(true);

const toggleFocus = () => {
  focusMode.value = !focusMode.value;
};
</script>

<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Operational snapshot</h2>
        <p>Stay aligned with access health, approvals, and team activity.</p>
      </div>
      <div class="page-actions">
        <span class="badge">Live sync</span>
        <button class="button" type="button">Generate report</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
        <p>{{ kpi.label }}</p>
        <h3>{{ kpi.value }}</h3>
        <small>{{ kpi.meta }}</small>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <div class="page-head">
          <div>
            <h2>Approval flow</h2>
            <p>Latest decisions across teams and vendors.</p>
          </div>
          <button class="button-outline" type="button">View all</button>
        </div>
        <div class="activity-list">
          <div v-for="activity in activities" :key="activity.title" class="activity-item">
            <div>
              <p>{{ activity.title }}</p>
              <small>{{ activity.time }}</small>
            </div>
            <span class="chip">{{ activity.status }}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="page-head">
          <div>
            <h2>Ops control</h2>
            <p>Adjust focus mode and keep counters in sync.</p>
          </div>
        </div>
        <div class="activity-list">
          <div class="activity-item">
            <div>
              <p>Focus mode</p>
              <small>{{ focusMode ? "Priority alerts only" : "All alerts enabled" }}</small>
            </div>
            <button class="button-outline" type="button" @click="toggleFocus">
              {{ focusMode ? "Disable" : "Enable" }}
            </button>
          </div>
          <Counter />
        </div>
      </div>
    </div>
  </section>
</template>
