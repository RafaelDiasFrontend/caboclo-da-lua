<template>
  <section
    class="grey lighten-5 instructors d-flex align-center"
    id="instructors"
  >
    <v-container class="df-width">
      <h2 class="h2 text-center">Instrutores</h2>
      <splide :options="options">
        <splide-slide v-for="item in allInstructors" :key="item.id">
          <v-card class="ma-2" elevation="0" color="transparent">
            <div>
              <v-img
                :src="item.photo"
                :lazy-src="item.photo"
                class="team-img mb-2 mx-auto"
                alt="rafael-dias-frontend-ceo.jpg"
              />
              <h3
                class="title grey--text text--darken-4 font-weight-medium text-center mt-2"
              >
                {{ item.name }}
              </h3>
            </div>
          </v-card>
        </splide-slide>
      </splide>   
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    allInstructors: {
      required: true,
      type: Array,
    },
  },
 data() {
    return {
      rating: 5,
      options: {
        type: "slide",
        rewind: true,
        perPage: 4,
        gap: "10px",
        autoplay: true,
        paginaperMove: 1,
        cover: true,
        fixedHeight: "250px",

        updateOnMove: true,
        breakpoints: {
          1260: {
            perPage: 3,
          },
          900: {
            perPage: 2,
          },
            600: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>

<style>
.instructors {
  min-height: 100vh;
}
.team-img {
  margin-top: 10px;
  width: 150px;
  height: 150px;
  border-radius: 100px;
}

.img-wrapper img {
  margin: auto;
  width: 40px;
  height: auto;
  background-color: red;
}

.mt-slick {
  margin-top: 3.2em;
}

.quotation-marks {
  transform: rotateY(3.142rad);
}

.quote-title {
  font-size: 0.94rem;
  line-height: 1.4;
}

.testimonials-card-grid {
  display: grid;
  grid-template-rows: 30px 120px 30px;
  padding: 1em;  
  margin-left: 0.4em;
}

.testimonials-card-header {
  display: flex;
  align-items: center;
}

.testimonials-card-body {
  display: flex;
  align-items: center !important;
}

.testimonials-card-footer {
  align-items: center !important;
}

.slick-prev:before,
.slick-next:before {
  color: var(--v-primary-base) !important;
}
</style>
