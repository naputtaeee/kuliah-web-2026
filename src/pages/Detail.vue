<template>
  <div class="container" v-if="product">
    <div class="card">
      <img :src="product.thumbnail" alt="" />

      <h1>{{ product.title }}</h1>
      <p class="category">{{ product.category }}</p>

      <p class="desc">{{ product.description }}</p>

      <p class="price">
        Rp {{ (product.price * 16000).toLocaleString('id-ID') }}
      </p>

      <button @click="$router.back()">⬅ Kembali</button>
    </div>
  </div>

  <p v-else class="loading">Loading...</p>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },

  async mounted() {
    const id = this.$route.params.id

    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      this.product = data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f1eb;
}

.card {
  background: #fffaf5;
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

img {
  width: 200px;
  margin-bottom: 20px;
}

.category {
  color: gray;
  margin-bottom: 10px;
}

.desc {
  margin: 15px 0;
  color: #5c4433;
}

.price {
  font-size: 20px;
  color: #b08968;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  background: #7f5539;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.loading {
  text-align: center;
  margin-top: 100px;
}
</style>