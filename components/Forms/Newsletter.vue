<template>
  <section id="newsletter">
    <v-container class="newsletter">
      <v-row justify="center">
        <v-col
          cols="8"          
          md="5"
          xl='4'
          class="mx-auto text-center"
          style="max-width: 600px"
        >
          <h2 class="h2 mb-8">Fique por dentro das novidades</h2>
          <v-form class='news_form d-flex align-start' v-model="valid" >
            <v-text-field
              outlined
              :rules="emailRules"
              dense
              width="100%"
              flat
              class='news-text-field'
              placeholder="Digite o seu email aqui"
              v-model="email"
            />
            <v-btn @click="addToNewsletter"  color="primary" class='news_btn' elevation='0'>Enviar</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        (v) => !!v || "O email é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O email deve ser válido",
      ],
    };
  },
  methods: {
    async addToNewsletter() {
      try {
        let data = {
          email: this.email,
        };
        let newsletters = await this.$axios.$post("/api/newsletters", data);
        this.$swal(
          "Parabens!",
          "Seu email foi adicionado com sucesso!",
          "success"
        );
        this.newsletters.push(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#newsletter {
  background: #F4F4F4!important;
}
.newsletter {
  padding: 10.15em 0;
}
.news_title {
  font-size: 2rem;

}
.news_form {
  display: flex;
  align-items: flex-start; 
}
.news-text-field {
 border-top-right-radius: 0;
  position: relative;
  border-bottom-right-radius: 0;
}
.news_btn {  
  height: 40px!important;
  border-top-left-radius: 0;
  position: relative;
  border-bottom-left-radius: 0;
  opacity: 0.8;    
}
</style>
