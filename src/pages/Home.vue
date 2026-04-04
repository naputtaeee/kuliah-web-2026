<template>
  <div class="container">
    <h1 class="title">things i’ve been working on ✨</h1>

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
            <button>see detail</button>
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
      const result = await res.json()
      this.products = result.products
    } catch (error) {
      console.error("ERROR API:", error)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 40px;
  background: #f5f1eb;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* ✨ JUDUL */
.title {
  text-align: center;
  margin-bottom: 10px;
  color: #5c4433;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 28px;
}

/* jumlah data */
.count {
  text-align: center;
  color: #a08976;
  margin-bottom: 30px;
  font-size: 13px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

/* CARD */
.card {
  background: #fffaf5;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.07);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
}

/* IMAGE */
img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}

/* CONTENT */
.content {
  margin-top: 10px;
}

h3 {
  font-size: 14px;
  color: #5c4433;
  margin-bottom: 4px;
}

/* CATEGORY */
.category {
  font-size: 12px;
  color: #b7a99a;
}

/* PRICE */
.price {
  color: #b08968;
  font-weight: bold;
  margin: 10px 0;
}

/* BUTTON */
button {
  width: 100%;
  background: linear-gradient(135deg, #c8a98d, #a98467);
  border: none;
  padding: 9px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

button:hover {
  opacity: 0.9;
}
</style>