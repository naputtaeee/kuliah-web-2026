<template>
  <div>
    <h1 style="text-align:center; margin-top:20px;">
      Web Nabila
    </h1>

    <div style="text-align:center; margin-bottom:20px;">
      <router-link to="/">Profil</router-link> |
      <router-link to="/api">Data API</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>