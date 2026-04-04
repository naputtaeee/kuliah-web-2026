<template>
  <div v-if="product">
    <h2>{{ product.title }}</h2>
    <img :src="product.thumbnail" style="width:200px">
    <p>{{ product.description }}</p>
    <p>Rp {{ product.price }}</p>

    <button @click="$router.back()">Kembali</button>
  </div>

  <p v-else>Loading...</p>
</template>

<script>
export default {
  data() {
    return { product: null }
  },
  
  async mounted() {
    const id = this.$route.params.id

    const res = await fetch(`https://dummyjson.com/products/${id}`)
    this.product = await res.json()
  }
}
</script>