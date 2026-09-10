<template>
  <div class="main">
    ID: {{ user.id }}, admin: {{ user.admin }}
    <div class="user">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
          fill="#000000" />
        <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000" />
      </svg>
    </div>
  </div>
</template>

<script setup>
// ====================
// Import
// ====================
import { ref } from 'vue';
import { onBeforeMount } from 'vue';

// ====================
// Consts
// ====================
const user = ref({});

const emit = defineEmits({
  isAdmin: false,
})

// ====================
// Functions
// ====================

async function getUserData() {
  const url = "http://localhost:3456/api/user";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

// ====================
// Life cycle
// ====================
onBeforeMount(async () => {
  user.value = await getUserData();
  emit("isAdmin", user.value.admin);
});
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user svg {
  width: 30px;
}
</style>