<template>
  <!-- contact -->
  <section id="contact" class="d-flex align-center grey lighten-5">
    <v-container class="df-width">
      <div class="contact_grid">
        <div class="contact_col-1">
          <img
            class="responsive"
            src="@/assets/imagens/components/contact.png"
            
          />
        </div>

        <div class="contact_col-2">
          <h2 class="h2 dark--text">Mande uma mensagem para nós</h2>
          <h3 class="contact-subtitle mb-6">
            Nos fale o que está achando da plataforma
          </h3>
          <v-form>
            <span class="label">Nome</span>
            <v-text-field
              class="mt-2"
              dense
              outlined
              placeholder="João da Silva"
              v-model="name"
            />
            <span class="label">Email</span>
            <v-text-field
              class="mt-2"
              type="email"
              dense
              outlined
              placeholder="joãodasilva@gmail.com"
              v-model="email"
            />
            <span class="label">Assunto</span>
            <v-text-field
              dense
              class="mt-2"
              outlined
              placeholder="Assunto"
              v-model="subject"
            />
            <span class="label">Mensagem</span>
            <v-textarea
              height="177"
              class="mt-2"
              v-model="message"
              dense
              outlined
              placeholder="Digite a sua mensagem aqui..."
            ></v-textarea>
            <v-btn @click="postContact" block elevation="3" color="primary" tile
              >Enviar Mensagem</v-btn
            >
          </v-form>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async postContact() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        let response = await this.$axios.$post("/api/contacts", data);
        console.log(response);

        if (response.success) {
          this.$swal(
            "Parabens!",
            "Sua Mensagem foi enviada com sucesso, em breve entraremos em contato =)",
            "success"
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#contact {
  min-height: 100vh; 
}
.contact_grid {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 20%;
}
.v-input__slot {
  background: white !important;
}
.contact-subtitle {
  margin-top: 8px;
  font-size: 1.37rem;
}

.contact_grid {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 20%;
}

@media only screen and (max-width: 1024px) {
  #contact {
    min-height: auto;
    padding: 5em 0;
  }
  .contact_col-1 {
    display: flex;
    justify-content: center;
  }
  #contact img {
    max-width: 400px;
  }
  #contact h2, h3 {
    text-align: center;
  }
  .contact_grid {
    max-width: 400px;
    gap: 5em;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 600px) { 
 
  #contact img {
    max-width: 300px;
  }
  #contact h2, h3 {
    text-align: center;
  }
  .contact_grid {
    max-width: none;
    gap: 5em;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 480px) { 
 
  #contact img {
    max-width: 180px;
  }
  
}
</style>