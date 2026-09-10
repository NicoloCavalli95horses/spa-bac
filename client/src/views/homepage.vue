<template>
  <User @isAdmin="val => is_admin = val" />
  <h2>Insecure Direct Object Reference (IDOR)</h2>
  <div class="main">
    <Banner v-show="show_banner" @click="show_banner = false" />
    <Preview v-for="i in items" :key="i.id" :item="i" @click="onClick(i)" />
  </div>
  <h2>Client-side bypassable access control</h2>
  <button class="secret" @click="onSecretPage">Go to secret page</button>

</template>

<script setup>
// ====================
// Import
// ====================
import {
  ref,
  onBeforeMount,
} from 'vue';
import { useRouter } from 'vue-router';
import User from '../components/user.vue';
import Preview from '../components/preview.vue';
import Banner from '../components/banner.vue';


// ====================
// Consts
// ====================
const items = ref();
const route = useRouter();
const is_admin = ref(false);
const show_banner = ref(false);


// ====================
// Functions
// ====================
function onSecretPage() {
  if (is_admin.value) {
    route.push({ name: 'secret-page' });
  } else {
    show_banner.value = true;
  }
}

async function getData() {
  const url = "http://localhost:3456/api/images";
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

function onClick(i) {
  if (i.is_premium) {
    show_banner.value = true;
  } else {
    route.push({ name: 'detail', params: { id: i.id } });
  }
}

// ====================
// Life cycle
// ====================
onBeforeMount(async () => {
  items.value = await getData();
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

button.secret {
  height: 44px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
