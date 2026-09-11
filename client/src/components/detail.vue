<template>
  <div class="page">
    <div class="container">

      <!-- Header -->
      <div class="header">
        <div>
          <span class="category">Content detail</span>
          <h1>{{ title }}</h1>
          <p class="subtitle">Explore this exclusive content and discover more details below.</p>
        </div>

        <span class="badge" :class="{ premium: item?.is_premium }">
          {{ item?.is_premium ? "Premium 🔒" : "Free" }}
        </span>
      </div>

      <!-- Content -->
      <div class="content-card" :class="item?.is_premium ? 'premium' : 'free'">
        <div class="content-body">
          <h2>About this content</h2>
          <p>{{ content }}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer vitae justo nec lorem consequat tincidunt. Praesent vel neque at erat consectetur tincidunt.</p>

          <div class="metadata">
            <div>
              <span>Content ID</span>
              <strong>{{ id }}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>Featured</strong>
            </div>

            <div>
              <span>Access</span>
              <strong> {{ item?.is_premium ? "Premium" : "Free" }} </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchJson } from "../utils/api.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = ref();
const content = ref("");
const title = ref("Content details");
const item = ref(null);

onMounted(async () => {
  id.value = route.params.id;
  item.value = await fetchJson(`/images/${id.value}`);
  content.value = item.value.content;
  title.value = `Content #${id.value}`;
});

</script>

<style scoped>
.page {
  min-height: calc(100vh - 80px);
  padding: 50px 30px;
  background: #151515;
  color: #f5f5f5;
}

.container {
  width: min(100%, 900px);
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
}

.category {
  display: block;
  margin-bottom: 8px;
  color: #4d8dcc;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
}

.subtitle {
  margin: 10px 0 0;
  color: #999;
  font-size: 15px;
}

.badge {
  padding: 7px 12px;
  border: 1px solid #444;
  border-radius: 20px;
  background: #252525;
  color: #bbb;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge.premium {
  border-color: #8a6d3b;
  color: #e6d3a3;
}

.content-card {
  overflow: hidden;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.content-card.free {
  background-color: rgb(53, 91, 0);
}
.content-card.premium {
  background-color: rgb(121, 80, 4);
}

.content-body {
  padding: 30px;
}

.content-body h2 {
  margin: 0 0 14px;
  font-size: 19px;
  font-weight: 600;
}

.content-body p {
  margin: 0 0 16px;
  color: #aaa;
  font-size: 15px;
  line-height: 1.7;
}

.metadata {
  display: flex;
  gap: 40px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.metadata div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.metadata span {
  color: #777;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.metadata strong {
  color: #ddd;
  font-size: 14px;
  font-weight: 500;
}
</style>