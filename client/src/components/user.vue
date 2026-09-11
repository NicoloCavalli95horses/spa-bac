<template>
  <div class="main-user">
    <div class="user-info">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{{ user.id }}</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>{{ user.admin ? "Yes" : "No" }}</td>
          </tr>
          <tr>
            <td>Credits</td>
            <td>{{ user.credits }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="user">
      <svg viewBox="0 0 16 16">
        <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"/>
        <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.main-user {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.user-info table {
  border-collapse: collapse;
  font-size: 13px;
}

.user-info td {
  padding: 2px 8px;
}

.user-info td:first-child {
  text-transform: uppercase;
  font-weight: 600;
  color: #888;
  text-align: right;
}

.user-info td:last-child {
  color: #e5e5e5;
  font-weight: 500;
  text-align: left;
}

.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b82c4;
  background: #2563a6;
}

.user svg {
  width: 30px;
  fill: white;
}
</style>