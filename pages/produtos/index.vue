<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddProduct" class="default-form">
      <v-container fluid class="w-85 mt-3 center">
        <h1 class="h3 my-5">Todos os Produtos</h1>
<!-- 
        <GetAllProducts :products="products" /> -->
      </v-container>
    </v-form>
  </div>
</template>

<script>
// import GetAllProducts from "@/components/Products/GetAllProducts";
export default {
  components: {
    GetAllProducts,
  },
  data() {
    return {
      categories: [],
      products: [],
      owners: [],
    };
  },
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("/api/categories");
      let owners = $axios.$get("/api/owners");
      let products = $axios.$get("/api/products");

      const [catResponse, ownerResponse, prodResponse] = await Promise.all([
        categories,
        owners,
        products,
      ]);
      console.log([catResponse, ownerResponse, prodResponse]);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        products: prodResponse.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>
