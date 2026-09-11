<template>
  <User :user="user" />
  <h2>Insecure Direct Object Reference (IDOR)</h2>
  <div class="main">
    <Banner v-show="show_banner" @click="show_banner = false" />
    <Preview v-for="i in items" :key="i.id" :item="i" @click="onClick(i)" />
  </div>
  <h2>Client-side bypassable access control</h2>
  <button @click="onAdminPage">Go to admin page</button>
  <h2>HTTP parameter tampering</h2>
  <p>You have {{ user.credits }} credits. You need at least 2 credit to execute this call</p>
  <button @click="onCreditCall">Execute call</button>


</template>

<script setup>
// ====================
// Import
// ====================
import {
  ref,
  onBeforeMount,
} from 'vue';

import { fetchJson } from '../utils/api.js';
import { useRouter } from 'vue-router';

import User from '../components/user.vue';
import Preview from '../components/preview.vue';
import Banner from '../components/banner.vue';


// ====================
// Consts
// ====================
const route = useRouter();

const items = ref({});
const user = ref({});
const show_banner = ref(false);


// ====================
// Functions
// ====================
function onAdminPage() {
  if (user.value.is_admin) {
    route.push({ name: 'admin-page' });
  } else {
    show_banner.value = true;
  }
}

function onClick(i) {
  if (i.is_premium) {
    show_banner.value = true;
  } else {
    route.push({ name: 'detail', params: { id: i.id } });
  }
}

function onCreditCall() {
  fetchJson("/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(user.value)
  });
}

// ====================
// Life cycle
// ====================
onBeforeMount(async () => {
  items.value = await fetchJson('/images');
  user.value = await fetchJson('/user');
});

</script>

<style>
.main {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10px;
}

button {
  height: 44px;
  padding: 0 18px;
  border: 1px solid #3b82c4;
  border-radius: 8px;
  background: #2563a6;
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

</style>
