<template>
  <div class="container">
    <h1 class="title">✨ Koleksi Pilihan Nabila</h1>
    <p class="subtitle">Project & Produk Favorit 💅</p>

    <p class="count">Jumlah data: {{ products.length }}</p>

    <div class="grid">
      <div class="card" v-for="item in products" :key="item.id">
        <img :src="item.thumbnail" alt="" />

        <div class="content">
          <h3>{{ item.title }}</h3>
          <p class="category">{{ item.category }}</p>

          <p class="price">
            Rp {{ (item.price * 16000).toLocaleString('id-ID') }}
          </p>

          <router-link :to="'/detail/' + item.id">
            <button>✨ Lihat Detail</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      this.products = data.products
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px;
  background: #f5f1eb;
  min-height: 100vh;
}

.title {
  text-align: center;
  color: #5c4433;
}

.subtitle {
  text-align: center;
  margin-bottom: 20px;
  color: #7a6a5a;
}

.count {
  text-align: center;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}

.card {
  background: #fffaf5;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

.content {
  margin-top: 10px;
}

.category {
  font-size: 12px;
  color: gray;
}

.price {
  color: #b08968;
  font-weight: bold;
  margin: 8px 0;
}

button {
  width: 100%;
  background: linear-gradient(135deg, #b08968, #7f5539);
  border: none;
  padding: 8px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
</style>