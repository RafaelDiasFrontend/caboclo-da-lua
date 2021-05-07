<template>
  <v-app id="kpax">
    <v-container>
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        flat
        color="white"
        class="align-center"
        height="80"
      >
        <v-toolbar-title class="ml-12 pl-4">
          <a
            href="#hero-img"
            class="d-flex align-center"
            v-smooth-scroll="{ duration: 2000 }"
          >
            <img
              src="@/assets/imagens/Logos/logo_caboclo_da_lua_default.png"
              alt=""
            />
          </a>
        </v-toolbar-title>

        <ul
          class="k-nav ml-12 pr-4 grey--text text--darken-4 hidden-sm-and-down"
        >
          <a href="#about" v-smooth-scroll="{ duration: 1800 }">
            <li>Sobre</li>
          </a>

          <a href="#courses" v-smooth-scroll="{ duration: 1800 }">
            <li>Cursos</li>
          </a>

          <a href="#howItWorks" v-smooth-scroll="{ duration: 1800 }">
            <li>Como funciona</li>
          </a>

          <a href="#teachers" v-smooth-scroll="{ duration: 1800 }">
            <li>Instrutores</li>
          </a>
          <a href="#FAQ" v-smooth-scroll="{ duration: 1800 }">
            <li>FAQ</li>
          </a>
          <a href="#contactr" v-smooth-scroll="{ duration: 1800 }">
            <li>Contato</li>
          </a>
        </ul>
        <v-spacer></v-spacer>

        
          <v-badge color="primary" content="6" class="mr-10" v-model='getCartLength'>
            <v-icon color='primary'>mdi-cart-outline</v-icon>
          </v-badge>

          <v-btn href="/login" outlined tile class="mr-4 px-4" color="primary"
            >Fazer login</v-btn
          >
          <v-btn tile href="/cadastre-se" color="primary" class="mr-4 px-4"
            >Cadastre-se</v-btn
          >
      

        <v-app-bar-nav-icon
          class="hidden-md-and-up mr-12"
          color="primary"
          light
          @click.stop="drawer = !drawer"
        />

        <template>
          <div class="white--text"></div>
        </template>
      </v-app-bar>
    </v-container>

    <v-navigation-drawer
      class="hidden-md-and-up"
      color="white"
      right
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndDown"
      app
      tile
      flat
      temporary
      light
    >
      <v-list dense class="pt-12">
        <!-- <a :href="slugs"></a> -->
        <template v-for="item in items" router :to="item.route">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>

          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              router
              :to="child.route"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" router :to="item.route">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "@/components/layouts/Footer";
export default {
  components: {
    Footer,
  },
  props: {
    source: String,
  },
  methods: {
    async signOut() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(["getCartLength"]),
  },
  data: () => ({
    menu: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],

    messages: 11,
    dialog: false,
    themePrimary: true,
    themeDark: false,

    themePrimary: true,
    drawer: false,
    slugs: "",

    DashFirstData: [
      {
        icon: "face",
        text: "99",
        name: "Perfil",
        route: "/admin/perfil",
      },
      {
        icon: "assignment",
        text: "99",
        name: "Orca",
        route: "/admin/perfil",
      },
    ],
    items: [
      {
        icon: "dashboard",
        text: "Home",
        name: "Home",
        route: "/",
      },
      {
        icon: "directions_car",
        text: "Serviços",
        name: "Serviços",
        route: "/servicos",
      },
    ],
  }),
};
</script>

<style>
#kpax .theme--light.v-btn:hover::before {
  opacity: 0;
}
.k-nav {
  display: flex;
}
.k-nav li {
  color: #212121;
  font-weight: 600;
  justify-content: flex-start;
  margin-right: 1.7em;
  font-size: 1.05rem;
  white-space: nowrap;
}
.k-nav li:hover {
  color: var(--v-primary-base);
  transition: all 0.3s ease;
}

.k-nav .v-btn:hover {
  background: none;
  color: black;
}

.text-logo {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 5px;
  font-family: var(--primary-font);
}

.theme-color-change {
  padding-top: 8.6em;
}
.darkColor {
  background-color: #161616 !important;
}
.lightColor {
  background-color: #c9c9c9 !important;
}
.inspire {
  background-color: #6a737d !important;
}
.bg-content {
  background-color: #f1f2f7;
}
.width-95 {
  max-width: 95%;
}
.custom-padding {
  padding: 5em 1em !important;
}
.custom-card {
  padding: 3.8em 0 5.2em 0em;
}
.pa-custom {
  padding: 1.6em 1em;
}
.k-footer {
  background: #ebf8ff !important;
  color: var(--primary-color) !important;
}
@media only screen and (max-width: 1004px) {
  .menu_buttons {
    display: none;
  }
}
</style>
