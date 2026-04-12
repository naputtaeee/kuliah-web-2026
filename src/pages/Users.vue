<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

function formatRupiah(price) {
  return "Rp " + (price * 16000).toLocaleString("id-ID")
}
</script>

<template>
  <div class="container">
    <h1 class="title">✨ Koleksi Pilihan Nabila</h1>
    <p class="subtitle">Temukan item favorit dengan tampilan elegan 💖</p>

    <div class="grid">
      <div v-for="item in products" :key="item.id" class="card">

        <div class="img-box">
          <img :src="item.thumbnail" />
        </div>

        <div class="content">
          <h3 class="name">{{ item.title }}</h3>

          <p class="price">
            {{ formatRupiah(item.price) }}
          </p>

          <router-link :to="`/detail/${item.id}`" class="btn">
            Lihat Detail
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 30px 20px;
  text-align: center;
}

/* TITLE */
.title {
  color: #5c4433;
  margin-bottom: 5px;
}

.subtitle {
  color: #8b6f47;
  margin-bottom: 25px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

/* CARD */
.card {
  background: #fffaf5;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

/* IMAGE */
.img-box {
  background: #f3e9dc;
  padding: 20px;
}

.img-box img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}

/* CONTENT */
.content {
  padding: 15px;
}

.name {
  font-size: 14px;
  color: #5c4433;
  min-height: 40px;
}

.price {
  color: #b08968;
  font-weight: bold;
  margin: 10px 0;
}

/* BUTTON */
.btn {
  display: inline-block;
  padding: 8px 14px;
  background: #b08968;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.btn:hover {
  background: #7f5539;
}
</style>