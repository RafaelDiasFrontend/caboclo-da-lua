<template>
  <v-card class="mx-auto bd-radius-20" elevation="3" max-width="260">
    <v-img
      height="168"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

<v-container>

</v-container>f
    <h3 class="card_title-course">Título do Curso</h3>

    <div class="subtitle text-left">Professor</div>

    <v-card-actions>
      <v-rating
        v-model="rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        hover
        small
      ></v-rating>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      value: 10,
      rating: 5,
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
.bd-radius-20 {
  border-radius: 10px;
}
</style>