<template>
  <v-card class="mx-auto bd-radius-20 my-12" elevation='3' max-width="398">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="256"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="mb-5 card_title-course">Título do Curso</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>
      <v-progress-linear class="custom-progress" value="60"></v-progress-linear>
    </v-card-text>

    <v-card-actions>
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              class="avatar-img"
              alt="John"
            />
          </v-avatar>
          <div class="subtitle ml-2">Nome do Professor</div>
        </div>

        <div class="d-flex flex-column align-center primary--text">
          <span class="title">62%</span>
          <span class='subtitle-2 font-weight-light'>Concluído</span>
        </div>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      value: 10,

      interval: 0,
    };
  },

  watch: {
    value(val) {
      if (val < 100) return;

      this.value = 0;
      this.bufferValue = 10;
      this.startBuffer();
    },
  },

  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.value += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 2000);
    },
  },
};
</script>

<style scoped>
 
.custom-progress {
  height: 10px !important;
  border-radius: 20px;
}
.card_title-course {
  font-size: 1.125rem !important;
}
.card_teacher-name {
  font-size: 1rem;
}
.avatar-img {
  width: 46px !important;
  height: auto;
}
.bd-radius-20  {
    border-radius: 10px;
}
</style>