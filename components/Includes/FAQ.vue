<template>
  <section id="FAQ">
    <v-container>
      <v-row class="df-width py-5 mt-6" justify='center'>
        <v-col cols="12" md="12" sm='8' lg="12" class="px-0 mx-auto">
          <h2 class="h2 text-center mb-12">Dúvidas Frequentes</h2>       

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header>
                <h4 class="grey--text text--darken-4 faq-title">
                  {{ item.title }}
                </h4></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <p class="grey--text text--darken-2 p">{{ item.text }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Como funciona a plataforma",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title:
            "Como Comprar um Curso",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Como Compartilhar no WhatsApp",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Estou tendo problemas em logar na minha conta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          title: "Vou receber um certificado?",
          text:
            "R: Sim e poderá fazer download do certificado",
        },
        {
          title:
            "Estou tendo problemas em efetuar o pagamento?",
           text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },    
      
        {
          title: "Como entrar em contato?",
          text:
            "R: O profissional que fornecer o menor Orçamento será o executante da obra.",
        },
      ],
    };
  },
};
</script>

<style scoped>
#FAQ {
  padding: 6.3em 0;
  display: grid;
}

.faq-title {
    font-size: 1.25rem;
}

.pb-custom {
  padding-bottom: 2em;
}

.btn-width {
  width: 350px;
}

.register-free {
  padding: 8.4em 0;
}

@media only screen and (max-width: 1380px) {
  #is-simple-to-begin {
    padding: 2.3em 0 0 0;
    display: grid;
  }
}
</style>
