<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="6"
      height="80px"
      class="white header_user pl-6 pr-6"
    >
      <nuxt-link to="/user-dash">
        <img
          src="@/assets/imagens/Logos/logo_caboclo_da_lua_default.png"
          alt=""
        />
      </nuxt-link>
      <v-spacer />
      <v-row>
        <v-col cols="8" class="pt-6">
          <v-form>
            <v-text-field
              v-model="message"
              append-icon="search"
              prepend-icon="icon"
              outlined
              placeholder="Pesquisar"
              dense
              type="text"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>

      <v-btn icon class="mx-1">
        <v-icon size="26">mdi-bell-outline</v-icon>
      </v-btn>
      <!-- Cart -->
      <div class="text-center mx-1">
        <nuxt-link :to="{ name: 'carrinho' }">
          <v-badge
            color="#111"
            :content="getCartLength"
            right
            transition="slide-x-transition"
          >
            <v-icon size="26">mdi-cart-outline</v-icon>
          </v-badge>
        </nuxt-link>
      </div>

      <v-avatar size="50" class="mx-2">
        <img
          src="https://kpaxexperience.s3.amazonaws.com/avatar-admin.png"
          alt="Avatar"
        />
      </v-avatar>
      <v-toolbar-title v-text="userName" class="user-name" />

      <!-- Menu -->
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon light>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <nuxt-link :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
          <v-list-item>
            <a href="" @click.prevent='logout'>
            <v-list-item-title>Sair</v-list-item-title>
            </a>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    source: String,
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(["getCartLength"]),
  },
  data() {
    return {
      message: "",
      clipped: false,
      drawer: false,
      fixed: false,
      userName: "Rafael Dias",

      items: [],
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Dados Pessoais",
          to: "/dados-pessoais",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Contato",
          to: "/contato",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Professores",
          to: "/professores",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>


<style scoped>
.user-name {
  color: #2b2b2b;
  font-size: 1.125rem;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 1px;
}
</style>
