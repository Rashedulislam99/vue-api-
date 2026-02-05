<template>
  <div class="counter-card">
    <p class="badge">Signal adjuster</p>
    <div class="counter-value">{{ count }}</div>
    <div class="counter-actions">
      <button class="button-outline" type="button" @click="decrease">Decrease</button>
      <button class="button" type="button" @click="increase">Increase</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increase() {
  count.value += 1;
}

function decrease() {
  count.value -= 1;
}
</script>
