<template>
  <div id="signup" class="signup_page">
    <v-container class="d-flex justify-center align-center pa-md-0 pa-12">
      <v-row justify="center">
        <v-col cols="12" xs="8" sm="6" md="7" class="custom-col pa-0">
          <v-card elevation="0">
            <h1 class="text-center signin_title font-weight-bold primary--text">
              Cadastre-se
            </h1>
            <v-form @submit.prevent="register">
              <span class="label">Nome Completo</span>
              <v-text-field
                class="mt-2"
                outlined
                v-model="name"
                placeholder="nome@seuemail.com"
                append-icon="mdi-face"
              />
              <span class="label">Email</span>
              <v-text-field
                class="mt-2"
                outlined
                v-model="email"
                placeholder="seunome@seuemail.com"
                append-icon="mdi-email"
              />
              <span class="label">Senha</span>
              <v-text-field
                v-model="password"
                class="mt-2"
                outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                placeholder="Digite a sua senha"
                @click:append="show1 = !show1"
              ></v-text-field>
              <div class="d-flex align-start">
                <span class='mb-4 mt-1'
                  >Ao clicar em Cadastre-se, você concorda com nossos
                  <nuxt-link to="/termos">Termos,</nuxt-link>
                  <nuxt-link to="/termos">Politica de Dados</nuxt-link> e             
                  <nuxt-link to="/termos">Politica de Cookies</nuxt-link>
                </span>
              </div>

              <v-btn block large color="primary" type='submit' class='mb-5' elevation="5">
                Cadastre-se
              </v-btn>            
              <div class="text-center">
                ou
                <nuxt-link
                  to="/login"
                  class="font-weight-medium primary--text"
                  >Voltar ao login</nuxt-link
                >
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "LoginRegister",
  data() {
    return {
      show1: false,
      password: "",
      name: "",
      email: "",      
      ability: "user",
    };
  },
 methods: {
    async register() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          ability: this.ability,
        };

        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$swal(
            "Parabens!",
            "Seu cadastro foi efetuado com sucesso",
            "success"
          );
          this.$router.push("/dash");
        }
      } catch (err) {
        console.log(err);
      }
    },
 }
};
</script>

<style scoped>

</style>