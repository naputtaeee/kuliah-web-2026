<template>
  <div>
    <nav class="nav">
      <router-link to="/">Profil</router-link>
      <router-link to="/users">Koleksi ✨</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  background: #f5f1eb;
  font-family: 'Poppins', sans-serif;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 18px;
  background: #fffaf5;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav a {
  text-decoration: none;
  color: #7f5539;
  font-weight: 500;
}

.nav a.router-link-active {
  border-bottom: 2px solid #b08968;
}
</style>