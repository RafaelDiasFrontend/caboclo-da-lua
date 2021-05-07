<template>
  <div id="signin" class="signin_page">
    <v-container class="d-flex justify-center align-center pa-md-0 pa-12">
      <v-row justify="center">
        <v-col cols="12" xs='8' sm="6" md="7" class="custom-col pa-0">
          <v-card elevation="0">
            <h1 class="text-center signin_title font-weight-bold primary--text">
              Recuperar senha
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
              <v-btn block large color="primary" class='mb-5' elevation="5">
                Redefinir senha
              </v-btn>          
              <div class="text-center">
                ou
                <nuxt-link
                  to="/login"
                  class="font-weight-medium primary--text"
                  >Fazer o login</nuxt-link
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
      email: "",
    };
  },
};
</script>

<style scoped>
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