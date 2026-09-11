<template>
  <button class="box" :class="{ 'premium': item.is_premium }">
    <span class="label">{{ item.is_premium ? "Premium" : "Free" }}</span>
    <span v-if="item.is_premium" class="lock">🔒</span>
  </button>
</template>

<script setup>
// ====================
// Props
// ====================
defineProps({
  item: Object,
});
</script>

<style scoped>
.box {
  width: 150px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #2a2a2a;
  color: #e5e5e5;
  border: 1px solid #444;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
}


.box.premium {
  background: #252525;
  border-color: #8a6d3b;
  color: #e6d3a3;
}

.lock {
  font-size: 14px;
}
</style>