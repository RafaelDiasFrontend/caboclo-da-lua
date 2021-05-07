<template>
  <div id="signin" class="signin_page">
    <v-container class="d-flex justify-center align-center pa-md-0 pa-12">
      <v-row justify="center">
        <v-col cols="12" xs='8' sm="6" md="7" class="custom-col pa-0">
          <v-card elevation="0">
            <h1 class="text-center signin_title font-weight-bold primary--text">
               Login
            </h1>
            <v-form>
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
                <v-checkbox
                  v-model="checkbox"
                  class="my-0 ml-checkbox"
                ></v-checkbox>
                <div class="span-check">Memorizar senha</div>
              </div>

              <v-btn block large color="primary" elevation="5" @click='login'>
                Fazer login
              </v-btn>
              <v-btn to='cadastre-se' outlined large block color="primary" class="my-5">
                Cadastre-se
              </v-btn>
              <div class="text-center">
                ou
                <nuxt-link
                  to="recuperar-senha"
                  class="font-weight-medium primary--text"
                  >Esqueci minha senha</nuxt-link
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
  layout: 'LoginRegister',
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      show1: false,
      email: "",
      password: "",
      checkbox: "",
      // Rules
      emailRules: [
        (v) => !!v || "O email é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O email deve ser válido",
      ],
    };
  },
 methods: {
    async login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Login efetuado com sucesso",
            showConfirmButton: true,
            timer: 1000,
          });
           if
             (this.$store.state.auth.user.user.ability === 'admin') {
              this.$router.push({
              path: this.$route.query.redirect  || '/admin'
            })
          } else {
          this.$router.push("/dashboard");
          }           
        })
        .catch(() => {
          this.$swal({
            position: "top-end",
            icon: "error",
            title: "Não foi possível fazer o login",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$router.push("/login");
        });
    },
  },

};
</script>



<style>
.label_custom {
  font-size: 0.88rem !important;
  font-weight: bold !important;
}
.signin_title {
  font-size: 1.85rem;
  margin-bottom: 50px;
}
.custom-col {
  max-width: 561px;
}
.span-check {
  margin-top: 2px;
  margin-left: -3px;
}
.ml-checkbox {
  margin-left: 3px; 
}
@media only screen and (max-width: 1440px) {

}

@media only screen and (max-width: 604px) {
  
}

</style>