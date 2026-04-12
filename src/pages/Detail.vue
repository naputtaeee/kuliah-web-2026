<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  product.value = await res.json()
})
</script>

<template>
  <div class="container" v-if="product">

    <img :src="product.thumbnail" class="img" />

    <h1>{{ product.title }}</h1>

    <p class="desc">{{ product.description }}</p>

    <p class="price">
      Rp {{ (product.price * 15000).toLocaleString('id-ID') }}
    </p>

    <router-link to="/users" class="btn">⬅ Kembali</router-link>

  </div>

  <p v-else class="loading">Loading...</p>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 30px;
  text-align: center;
}

.img {
  width: 250px;
  margin-bottom: 20px;
}

.desc {
  margin: 15px 0;
  color: #555;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #7f5539;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 16px;
  background: #b08968;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}

.loading {
  text-align: center;
  margin-top: 100px;
}
</style>