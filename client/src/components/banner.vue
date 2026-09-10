<template>
  <div class="backdrop">
    <div class="banner">
      <h3>You are not allowed to access this content</h3>
    </div>
  </div>
</template>

<script setup>
</script>


<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.banner {
  z-index: 2;
  position: fixed;
  width: 50%;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(22,22,22);
  display: grid;
  place-items: center;
  border: 2px solid red;
  border-radius: 8px;
}
</style>