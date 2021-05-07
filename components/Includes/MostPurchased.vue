<template>
  <section
    class="grey lighten-5 most-purchased d-flex align-center"
    id="most-purchased"
  >
    <div class="mp-pelicula d-flex align-center">
  <v-container class="df-width ">
    <splide :options="options">
      <splide-slide v-for="item in allCourses" :key="item.id">
        <nuxt-link :to="'/cursos/' + item.slug">
        <v-card
          class="pa-0 white mx-auto elevation-3"
          max-width="260px"
          
        >
          <v-img
            :src="item.photo"
            lazy-src="@/assets/imagens/components/product_models.png"
            class="mp-img mb-2 mx-auto"
            alt="rafael-dias-frontend-ceo.jpg"
          />
          <v-card-text class="pa-5">
            <h3 class="mp_title grey--text text--darken-4">
              {{ item.title }}
            </h3>
            <div class="mb-2">{{ item.instructor.name }}</div>
            <div class="d-flex mb-10">
              <div class="pm_custom-span">{{ rating }}.0</div>

              <v-rating
                dense
                small
                color="#F4511E"
                v-model="rating"
                empty-icon="$ratingFull"
                half-increments
                hover
                readonly
              ></v-rating>
            </div>
            <div class="d-flex justify-end mp_price font-weight-bold">
              R${{ item.price }},00
            </div>
          </v-card-text>
        </v-card>
        </nuxt-link>
      </splide-slide>
    </splide>
  </v-container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allCourses: {
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
        fixedHeight: "380px",

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
.most-purchased {
  min-height: 100vh;
  background-image: url("~assets/imagens/Home/hero-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  z-index: -9;
}
.mp-pelicula {
  min-height: 100vh;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.797);
}

.mp-img {
  max-width: 260px;
  margin-top: 10px;
}
.mp_title {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 10px;
}
.mp_price {
  font-size: 1.625rem;
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
.pm_custom-span {
  padding: 1px 3px 0 0;
  color: #f4511e;
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
  grid-row-gap: 5px;
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
  color: var(v-primary-base) !important;
}
</style>
