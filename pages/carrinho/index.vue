<template>
  <section class="cart mt-3 grey lighten-5">
    <v-container class="df-width">
      <v-row>
        <v-col cols="12" lg="8" md="7" sm="6">
          <h1 class="h2 primary-color font-weight-bold mb-7">Carrinho de compras</h1>

          <h2 class='headline grey--text text--darken-2 ml-1'>{{ getCartLength }} &nbsp;curso no carrinho</h2>

          <v-card flat>
                teste
          </v-card>

          <div class="pa-md-5">
            <form action="#" method="post">
              <div class="sc-list-head">
                <div class="text-right a-spacing-top-micro">
                  <span class="a-color-secondary">Preço</span>
                </div>
              </div>
              <!-- List of the item -->
              <div class="mb-2" v-for="product in getCart" :key="product._id">
                <v-row>
                  <!-- Product's Image -->
                  <v-col cols="12" sm="2">
                    <a href="#" class="a-link-normal">
                      <v-img :src="product.photo" />
                    </a>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <!-- Product's Title -->
                    <div class="a-spacing-mini">
                      <a href="#"
                        ><h2 class="h3 font-weight-bold">
                          {{ product.title }}
                        </h2></a
                      >
                      <!-- Product's Owner name -->
                      <span class="text-details">Nome Do vendedor</span>
                    </div>
                    <div>
                      <span class="a-color-secondary font-weight-bold"></span>
                    </div>
                    <div></div>
                    <div
                      class="a-checkbox a-align-top a-size-small a-spacing-top-micro"
                    >
                      <div class="d-flex align-center mb-3">
                        <v-icon color="success" lass="mr-3">check</v-icon>
                        <v-icon color="primary" class="mr-3"
                          >card_giftcard</v-icon
                        >
                        <input type="checkbox" name="checkbox" />
                        <span class="ml-2 text-details">
                          Esse pedido contem um presente
                        </span>
                      </div>
                      <v-btn color="primary" class="mb-5" small
                        >Saiba Mais</v-btn
                      >
                    </div>

                    <div class="d-flex align-center">
                      <select @change="onChangeQuantity($event, product)">
                        <option
                          v-for="i in 10"
                          :key="i"
                          :value="i"
                          :selected="checkQty(product.quantity, i)"
                        >
                          Qtd: &nbsp; {{ i }}
                        </option>
                      </select>
                      &nbsp;&nbsp;
                      <span>|</span>
                      &nbsp;
                      <!-- Delete button -->
                      <v-icon
                        @click="$store.commit('removeProduct', product)"
                        color="error"
                        size="19"
                        class="ml-1 pt-1 pb-1"
                        >delete</v-icon
                      >
                      &nbsp; &nbsp;
                    </div>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <!-- Product's Price -->
                    <p class="a-spacing-small">
                      <span
                        class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"
                        >R$ {{ product.price * product.quantity }},00</span
                      >
                    </p>
                  </v-col>
                </v-row>
              </div>

              <!-- List of the item -->
              <div class="text-right">
                <!-- Cart Subtotal -->
                <p class="a-spacing-none a-spacing-top-mini">
                  <span class="a-size-medium">{{ getCartLength }}</span>
                  <span class="a-color-price a-text-bold">
                    <!-- Cart Total Price -->
                    <span class="a-size-medium a-color-price"
                      >R${{ getCartTotalPrice }}</span
                    >
                  </span>
                </p>
              </div>
            </form>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="5" sm="6">
          <v-card flat>
            <v-card-title class="primary--text d-flex">
              <span class="text-left"
                >Total de produtos:{{ getCartLength }}</span
              >
              <span>Total:${{ getCartTotalPrice }}</span>
            </v-card-title>
           

            <v-btn color="primary" large block href="#" class=""
              >Finalizar Pagamento</v-btn>
          </v-card>

         
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isAGift: "",
      product: [],
    };
  },
  computed: {
    ...mapGetters(["getCart", "getCartLength", "getCartTotalPrice"]),
  },
  methods: {
    onChangeQuantity(event, product) {
      let qty = parseInt(event.target.value);
      this.$store.commit("changeQty", { product, qty });
    },
    checkQty(prodQty, qty) {
      if (parseInt(prodQty) === parseInt(qty)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.text-details {
  font-size: 12px;
}
</style>

