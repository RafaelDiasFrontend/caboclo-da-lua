<template>
  <v-app light>
    <v-container class="login-header">
      <nuxt-link  to="/" class='d-flex align-center back-text font-weight-bold'>
        <v-icon color='primary' class='font-weight-bold pr-2'>arrow_back</v-icon>
        Voltar</nuxt-link
      >
    </v-container>

    <div class="text-center login_logo">
      <img
        src="@/assets/imagens/Logos/logo_caboclo_da_lua.png"
        alt="logo_caboclo_da_lua"
      />
    </div>    
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  
};
</script>

<style>

 .login-header {
   padding-top: 50px!important;
   padding-bottom: 70px!important;
 }
 .back-text {
   font-size: 20px;
   font-weight: bold;
 }
.login_logo img {
  margin-bottom: 50px;
  width: 13rem;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 1440px) {
   .login-header {
   padding-top: 28px!important;
   padding-bottom: 50px!important;
 }
 .back-text {
   font-size: 20px;
   font-weight: bold;
 }
.login_logo {
  margin-bottom: 20px;
}
}
@media only screen and (max-width: 604px) {
 
}

 </style>