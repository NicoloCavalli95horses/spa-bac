<template>
  <button class="box" :class="{'premium': item.is_premium}">
    {{ item.is_premium ? "premium 🔒" : "free" }}
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

<style>
.box {
  width: 150px;
  height: 150px;
  background-color: green;
  display: grid;
  place-content: center;
  font-size: 22px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: none;
}

.box.premium {
  background-color: orangered;
}
</style>