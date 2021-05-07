<template>
  <div class="single__product">
    <!-- breadcrumbs -->
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="product.photo"
            alt="Nome do produto"
            class="product__img elevation-5"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <v-container class="product_description-container">
            <h2 class="h2 py-2">{{ product.title }}</h2>
            <v-chip class="h4 grey--text">Esgotado</v-chip>
            <span class="h4 grey--text">{{ product.price }}</span>
            <p v-if="product.description" class="p-small my-2">
              {{ product.description }}
            </p>
            <v-form @submit.prevent="addProductToCart(product)">
              <div class="v-field">
                <div class="v-control">
                  <div class="select my-2">
                    <select style="width: 100%" name id>
                      <option>{{ product.stockQuantity }}</option>
                    </select>
                  </div>
                </div>
                <v-btn large type="submit" width="100%" color="primary"
                  >Adicionar ao Carrinho</v-btn
                >
              </div>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
      <v-row style="max-width: 1398px" class="mx-auto mt-5">
        <v-col cols="12" md="10">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="primary"
            grow
          >
            <v-tab v-for="item in productsDetails" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>descricao</v-card-text>
              </v-card>
            </v-tab-item>
              <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>informacao adicional</v-card-text>
              </v-card>
            </v-tab-item>
              <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>Classificacao</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      productID: null,
      categoryID: null,
      ownerID: null,
      categories: [],
      products: [],
      owners: [],
      tab: null,
      productsDetails: ["Descrição", "Informação Adicional", "Classificação"],
      productDescription: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  },

  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/courses/${params.slug}`);
      console.log(response);
      return {
        product: response.course,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions(["addProductToCart"]),
  },
};
</script>




<style scoped>
.single__product {
  margin: 6em 0;
}
.product__img {
  max-width: 480px;
  max-height: 480px;
  margin: 0 auto;
}
.product_description-container {
  max-width: 480px;
  margin: 0;
}
</style>