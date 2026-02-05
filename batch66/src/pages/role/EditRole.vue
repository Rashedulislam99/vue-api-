<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Edit role</h2>
        <p>Update access tiers and routing for the selected role.</p>
      </div>
      <div class="page-actions">
        <button class="button-outline" type="button">Archive</button>
        <button class="button" type="button">Save changes</button>
      </div>
    </div>

    <div class="panel">
      <div class="form-grid">
        <label class="field">
          <span>Role name</span>
          <input type="text" value="Operations Lead" />
        </label>
        <label class="field">
          <span>Role code</span>
          <input type="text" value="OPS-LEAD" />
        </label>
        <label class="field">
          <span>Status</span>
          <select>
            <option>Active</option>
            <option>Review</option>
            <option>Paused</option>
          </select>
        </label>
        <label class="field">
          <span>Approval tier</span>
          <select>
            <option>Guided</option>
            <option>Independent</option>
            <option>Review required</option>
          </select>
        </label>
        <label class="field full">
          <span>Role summary</span>
          <textarea rows="3">Balanced access with elevated visibility across operations.</textarea>
        </label>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>
