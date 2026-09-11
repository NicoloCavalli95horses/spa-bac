<template>
  <div class="backdrop">
    <div class="banner">
      <div class="icon">🔒</div>
      <div class="content">
        <h3>Access restricted</h3>
        <p>You don't have permission to access this content.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(3px);
}

.banner {
  width: min(90%, 480px);
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: #1e1e1e;
  color: #f5f5f5;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #2a2a2a;
  font-size: 22px;
}

.content h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
}

.content p {
  margin: 0;
  color: #a8a8a8;
  font-size: 14px;
  line-height: 1.5;
}
</style>