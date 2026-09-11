<template>
  <div class="admin-page">
    <header class="admin-header">
      <div>
        <span class="badge">ADMIN AREA</span>
        <h1>Administration</h1>
        <p>Manage your application and administrative features.</p>
      </div>

      <div class="admin-image">🔧</div>
    </header>

    <section class="welcome-card">
      <div class="icon">✓</div>

      <div>
        <h2>Congratulations!</h2>
        <p>You successfully accessed the administration area.From here you can manage privileged application features.</p>
      </div>
    </section>

    <section class="features">
      <h2>Admin functionality</h2>

      <div class="feature-grid">
        <button class="feature-card">
          <span class="feature-icon">&#128100;</span>
          <span>
            <strong>User management</strong>
            <small>Manage users and permissions</small>
          </span>
        </button>

        <button class="feature-card">
          <span class="feature-icon">📊</span>
          <span>
            <strong>System statistics</strong>
            <small>View application statistics</small>
          </span>
        </button>

        <button class="feature-card">
          <span class="feature-icon">🔧</span>
          <span>
            <strong>System configuration</strong>
            <small>Configure application settings</small>
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1,h2 {
  color: #fefefe;
}
.admin-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  color: #1f2937;
}

.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.admin-header h1 {
  margin: 8px 0;
  font-size: 32px;
}

.admin-header p {
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

.admin-image {
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background-color: #fefefe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .admin-header {
    align-items: flex-start;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>