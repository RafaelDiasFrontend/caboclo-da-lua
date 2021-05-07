<template>
  <div class="home_page">
    <!-- hero -->
    <section id="hero-home" class="hero_home">
      <div class="hero-pelicula d-flex align-center">
        <v-container class="df-width">
          <v-row align="center">
            <v-col cols="12" md="4" class="hero-col-1 white--text">
              <h1 class="hero-title mb-2">Umbanda para todos</h1>
              <p class="hero-p">
                Aprenda sobre nossa cultura e adquira conhecimento de uma
                maneira simples e eficaz
              </p>
              <v-btn tile class="hero_btn primary--text body-1" elevation="3"
                >Ver cursos</v-btn
              >
            </v-col>
            <v-col offset="2" cols="12" md="4" sm="12" class="mx-auto pt-sm-5">
              <img
                src="@/assets/imagens/Home/hero-home.png"
                alt="hero"
                class="elevation-13 hero-img-course"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="grey lighten-5">
      <v-container class="df-width about">
        <v-row align="center">
          <v-col cols="12" sm="12" xs="12" md="6" justify="center">
            <img
              src="@/assets/imagens/Home/about.png"
              alt="about"
              class="about-img"
            />
          </v-col>
          <v-col cols="12" sm="12" md="5" class="ml-md-16">
            <h2 class="h2-title">
              Evolua seu conhecimento através de nossos
              <span class="primary--text">cursos</span>
            </h2>
            <p class="body-1 grey--text my-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam
            </p>
            <button class="learn-more mt-2">
              <nuxt-link to="/blog/como-envio-um-orcamento">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Saiba Mais</span>
              </nuxt-link>
            </button>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <MostPurchased :allCourses="courses" />
     <MostPurchased2 :allCourses="courses" />

    <!-- Casa Luz Esperanca Caboclo da Lua -->
    <section id="about" class="grey lighten-5">
      <v-container class="df-width about">
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <h2 class="h2-title">
              Casa luz e esperança
              <span class="primary--text">caboclo da lua</span>
            </h2>
            <p class="body-1 grey--text my-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam
            </p>
            <button class="learn-more mt-2">
              <nuxt-link to="#">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Saiba Mais</span>
              </nuxt-link>
            </button>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            xs="12"
            md="5"
            justify="center"
            class="ml-md-16"
          >
            <img
              src="@/assets/imagens/Home/about2.png"
              alt="about"
              class="about2-img"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How it works -->
    <section id="how-it-works">
      <div class="hiw-pelicula d-flex align-center">
        <v-container class="df-width text-center white--text">
          <h2 class="h2 white--text mb-12">Veja como funciona a plataforma</h2>
          <div class="hiw_grid">
            <div v-for="item in howItWorkItems" :key="item.id" cols="12" md="2">
              <div class="div">
                <div class="hiw_card"></div>
                <img src="" alt="" />
                <h3 class="title mb-4">{{ item.id }}º Passo</h3>
                <p class="body-1">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </section>
    <Instructors :allInstructors="instructors" />
    <FAQ /> 

    <Contact />
    <Newsletter />
  </div>
</template>

<script>
import CardMPCourse from "@/components/Cards/CardMPCourse";
import Newsletter from "../components/Forms/Newsletter.vue";
import FAQ from "@/components/Includes/FAQ";
import Contact from "@/components/Includes/Contact";
import Testimonial from "@/components/Includes/Testimonial";
import Instructors from "@/components/Includes/Instructors";
import MostPurchased from "@/components/Includes/MostPurchased";

export default {
  components: {
    CardMPCourse,
    Newsletter,
    FAQ,
    Contact,
    Testimonial,
    Instructors,
    MostPurchased,
  
  },
  // async asyncData({ $axios }) {
  //   try {
  //     let response = await $axios.$get("/api/instructors");
  //     return {
  //       instructors: response.instructors,
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  async asyncData({ $axios }) {
    try {
      let courses = $axios.$get("/api/courses");
      let instructors = $axios.$get("/api/instructors");

      const [coursesResponse, instResponse] = await Promise.all([
        courses,
        instructors,
      ]);
      console.log([coursesResponse, instResponse]);
      return {
        courses: coursesResponse.courses,
        instructors: instResponse.instructors,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      dialog: false,
      instructors: [],
      courses: [],
      email: "",
      howItWorkItems: [
        {
          id: "1",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          id: "2",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          id: "3",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          id: "4",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          id: "5",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
      ],
      DashFirstData: [
        {
          icon: "domain_disabled",
          name: "Industrial",
          route: "/orcamentos/industrial",
        },
        {
          icon: "apartment",
          text: "30",
          name: "Predial",
          route: "/orcamentos/predial",
        },
        {
          icon: "house",
          text: "15",
          name: "residencial",
          route: "/orcamentos/residencial",
        },
        {
          icon: "location_city",
          text: "99",
          name: "Arquitetura",
          route: "/orcamentos/arquitetura",
        },
      ],
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

<style scoped>
/* Hero  */
#hero-home {
  background-image: url("~assets/imagens/Home/hero-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 101vh;
  z-index: -999;
  margin-top: -89px;
  width: 100%;
  max-height: 101vh;
  z-index: -9999;
}
.hero-pelicula {
  min-height: 101vh;
  z-index: 1;
  margin-top: -89px;
  width: 100%;
  max-height: 101vh;
  background-color: rgba(0, 0, 0, 0.797);
}
.hero-img-course {
  width: 30em;
  height: auto;
}
.hero-title {
  font-size: 3.25rem;
  text-rendering: optimizeLegibility;
  line-height: 1.2;
}
.hero_btn {
  margin-top: 10px;
  padding: 1.5em 5.5em !important;
  text-transform: initial;
}
.hero-p {
  font-size: 1.375rem;
  text-rendering: optimizeLegibility;
  line-height: 1.3;
  max-width: 300px;
  opacity: 0.8;
}

/* about */
.about {
  min-height: 100vh;
  display: grid;
  align-items: center;
}
.about-img {
  max-width: 667px;
  width: 100%;
  height: auto;
}
.about2-img {
  max-width: 533px;
  width: 100%;
  height: auto;
}
.about_col-2 {
  margin-left: 5em;
}

/* How It WORKS */

#how-it-works {
  background-image: url("~assets/imagens/Home/como_funciona_plataforma.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  min-height: 100vh;
}
.hiw_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
  gap: 1em;
}
.hiw_card {
  border: 2px solid #fff !important;
  background: transparent !important;
  max-width: 260px;
  height: 260px !important;
}
.hiw-pelicula {
  background: rgba(0, 0, 0, 0.7);
  min-height: 100vh;
}

/* Casa Luz Esperanca */
.casa_luz_esperanca {
  padding: 11.6875em 0;
}

/* Most Purchased */
.most_purchased {
  padding: 11em 0;
}
.mp_grid {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  gap: 3px;
  margin: 0 auto !important;
  justify-content: center;
}

/* Desktop */
@media only screen and (max-width: 1370px) {
  .p-custom {
    font-size: 1rem;
    line-height: 0.6;
    font-weight: 400;
  }

  .h1-custom {
    font-size: 1.5rem;
  }

  .btn-custom {
    height: 49px !important;
    font-size: 12px;
    width: 140px;
  }
}

/* large Desktop */
@media only screen and (max-width: 2600px) {
  .intro {
    /* background-image: url('~assets/imagens/integrace_banner-large.png'); */
    background-position: center;
    background-size: cover;
  }
}

@media only screen and (max-width: 900px) {
  .about {
    min-height: auto;
    padding: 8em 0;
  }
  .h1-custom {
    font-size: 1.4rem;
  }

  .width-500 {
    max-width: 270px;
  }
  .hero-img-course {
    padding-top: 1em;
    max-width: 362px;
  }
}

/* Mobile */
@media screen and (max-width: 500px) {
  .intro {
    /* background-image: url('~assets/imagens/integrace_banner-mobile.png'); */
    background-position: center;
    background-size: cover;
  }

  .btn-custom {
    width: 105px !important;
    height: 39px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 7px !important;
  }

  .btn_custom-text {
    font-size: 0.6rem !important;
  }
  .span-custom {
    font-size: 0.75rem !important;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--secondary-color) !important;
  }
  .grid-slide-text {
    display: grid;
    justify-content: center;
    align-content: end;
    grid-gap: 0;
    text-align: center !important;
    max-width: 420px;
    margin-left: 0;
    height: 84vh;
    align-items: center;
  }

  .h1-custom {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 1.39rem;
    text-align: center !important;
  }

  .mobile-card {
    width: 220px !important;
  }
}
</style>
