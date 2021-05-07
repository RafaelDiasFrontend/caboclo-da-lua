<template>
  <div id="footer">
    <v-container class="df-width pt-11 pb-8 pa-0">
      <div class="footer_grid">
        <!-- col 1 -->
        <ul class="k-nav pa-0 primary--text pa-0 ma-0">
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
          <a href="#contact" v-smooth-scroll="{ duration: 1800 }">
            <li>Contato</li>
          </a>
        </ul>
        <!-- col 2-->
        <div class="text-center">
          <v-btn v-for="item in icons" :key="item.id" class="mx-2" icon>
            <a :href="item.link" target="_blank">
              <v-icon color="primary">
                {{ item.icon }}
              </v-icon>
            </a>
          </v-btn>
        </div>
        <!-- col 3-->
        <div class="body-2 ml-16">
          <h3 class="font-weight-bold primary--text">
            Casa luz esperança caboclo da lua
          </h3>
          <div class="py-3">
            Contato: caboclodaluz@gmail.com l (13) 3227-2778
          </div>
        </div>

        <!-- col-4 -->
        <div class="body-2">
          Todos os Direitos reservados para Casa Luz e esperança caboclo da lua
        </div>
        <div class="body-2 grey--text d-flex align-baseline mx-auto">
          Desenvolvido por agência
          <a
            class="font-weight-bold ml-1"
            href="http://agenciakpax.com.br"
            target="_blank"
          >
            Kpax</a
          >
        </div>

        <div class="ml-16">
          Rua Lorem Ipsum Slor, 1492 - Centro de Santos/SP - 0457-228
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/solaris.contabilidade",
        },
        {
          icon: "mdi-whatsapp",
          link:
            "https://api.whatsapp.com/send?phone=5513992147997&fbclid=IwAR2QlXU-h3TbYiPBWk-yIKABujuiYpZkj3BQX8yAK9TjOWsSPFEiGaOyU0Q",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.instagram.com/solaris.contabilidade/",
        },
        {
          icon: "mdi-email",
          link: "mailto:contato@solariscontabilidade.com.br",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer_grid {
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: auto;
  justify-content: center;
  align-items: baseline;
}
#footer ul li {
  font-size: 0.875rem;
  color: var(--v-primary-base);
}
</style>