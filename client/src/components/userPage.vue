<template>
  <div class="user-page">
    <header class="header">
      <div>
        <span class="badge">User page</span>
        <h1>User page</h1>
        <p>This is a regular user page.</p>
      </div>
    </header>
    
    <section class="welcome-card">
      <div>
        <h3>Welcome, user!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum doloremque voluptates magni maxime
          rerum, distinctio commodi laboriosam voluptate vel sed est atque accusantium et? Voluptas temporibus pariatur
          non odio. </p>
        </div>
      </section>
      <a href="/">Back to homepage</a>
  </div>
</template>

<script setup>
// ====================
// Import
// ====================
import { onBeforeMount, ref } from 'vue';


// ====================
// Const
// ====================
const data = ref({});

// ====================
// Life cycle
// ====================
onBeforeMount(() => {
  const raw = localStorage.getItem("user");
  if (raw) {
    data.value = JSON.parse(raw);
  }

  if (!data.value.admin) {
    return;
  }
})

</script>

<style scoped>
h1,
h2 {
  color: #fefefe;
}

.user-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  color: #1f2937;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.header h1 {
  margin: 8px 0;
  font-size: 32px;
}

.header p {
  margin: 0;
  color: #6b7280;
}

.badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 6px;
  background: #ede9fe;
  color: #6d28d9;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.welcome-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px;
  margin-bottom: 36px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f9fafb;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #dcfce7;
  color: #16a34a;
  font-size: 22px;
  font-weight: bold;
}

.welcome-card h2 {
  margin: 0 0 6px;
  font-size: 20px;
}

.welcome-card p {
  margin: 0;
  color: #6b7280;
  line-height: 1.5;
}

.features h2 {
  margin-bottom: 16px;
  font-size: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
}

.feature-card:hover {
  border-color: #a78bfa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 22px;
}

.feature-card strong,
.feature-card small {
  display: block;
}

.feature-card strong {
  margin-bottom: 6px;
}

.feature-card small {
  color: #6b7280;
  line-height: 1.4;
}

@media (max-width: 700px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>