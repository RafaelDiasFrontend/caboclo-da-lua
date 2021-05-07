<template>
  <div class="single-course">
    <v-container class="df-width">
      <h1 class="h2 mt-12 mb-4 grey--text text--darken-4 text-uppercase">
        {{ course.title }}
      </h1>
      <div class="sg_grid">
        <!-- Video -->
        <div
          class="sg_video grey darken-4 white--text d-flex justify-center h2 align-center"
        >
          video aqui
        </div>
        <!-- buy now -->
        <v-card elevation="0">
          <v-container class="sg_card_box">
            <h3 class="sg_card-title">R$ {{ course.price }},00</h3>
            <!-- <span class="sg_card_subtitle">ou em 10x de 28,21 *no cartão</span> -->
            <v-btn
              dark
              block
              large
              elevation="3"
              color="grey darken-4"
              class="mt-4"
              @click="addCourseToCart(course)"
            >
              <v-icon left>mdi-cart-outline</v-icon> Compre Agora
            </v-btn>
            <div class="d-flex justify-space-between align-end mt-4">
              <div class="d-flex align-baseline">
                <span class="caption orange--custom mr-2">
                  ({{ rating }})
                </span>
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
              <div class="sg_card_subtitle">(11 Avaliações)</div>
            </div>
            <ul class="pa-0 mt-4 grey--text text--darken-4">
              <li
                class="d-flex align-center font-weight-medium mb-2"
                v-for="item in descriptionItems"
                :key="item.id"
              >
                <v-icon color="#212121" small class="pr-2 font-weight-bold"
                  >check</v-icon
                >
                <div class="pt-1-custom">{{ item.text }}</div>
              </li>
            </ul>
          </v-container>
        </v-card>

        <!-- 2 row -->
        <div class="d-flex align-center">
          <v-img :src="course.photo" class="sg_img" />
          <div class="pl-5">
            <p v-html="course.description" />
            <v-btn outlined @click="expandDescription = !expandDescription">
              <v-icon left>mdi-plus</v-icon>
              Ler mais
            </v-btn>
          </div>
        </div>
        <div></div>
        <template v-if="expandDescription">
          <div>
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of
            </p>
            <p>
              Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
        </template>
        <div class="div"></div>
      </div>
      <!-- End grid -->

      <div class="sg_grid_2 mt-15">
        <div class="div">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="grey darken-4"
            grow
          >
            <v-tab
              v-for="item in productsDetails"
              :key="item"
              class="text-capitalize"
            >
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <h3 class="title mb-5">Como vai funcionar o Curso?</h3>
                  <v-container>
                    <v-row>
                      <v-col cols="6" class="pl-0">
                        <p>
                          Auctor eu augue ut lectus. Erat velit scelerisque in
                          dictum non consectetur a erat namurso. Odio tempor
                          orci dapibus ultrices. Auctor eu augue ut lectus. Erat
                          velit scelerisque in dictum non consectetur a erat
                          namurso. Commodo odio aenean sed adipiscing diam.
                          Tincidunt augue interdum
                        </p>
                      </v-col>
                      <v-col cols="6">
                        <p>
                          Auctor eu augue ut lectus. Erat velit scelerisque in
                          dictum non consectetur a erat namurso. Odio tempor
                          orci dapibus ultrices. Auctor eu augue ut lectus. Erat
                          velit scelerisque in dictum non consectetur a erat
                          namurso. Commodo odio aenean sed adipiscing diam.
                          Tincidunt augue interdum
                        </p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <ul>
                          <li class="body-1 font-weight-bold">Autor</li>
                          <li class="mb-10">{{ course.instructor.name }}</li>
                          <li class="body-1 font-weight-bold">Duração</li>
                          <li>4 horas</li>
                        </ul>
                      </v-col>

                      <v-col cols="6">
                        <ul>
                          <li class="body-1 font-weight-bold">Idioma</li>
                          <li class="mb-10">Português</li>
                          <li class="body-1 font-weight-bold">
                            Numero de Aulas
                          </li>
                          <li>XX</li>
                        </ul>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>

        <!-- Avalicaçoes -->
        <v-container class="mt-12">
          <h3 class="headline ml-1 font-weight-medium mb-5">Avaliações</h3>
          <v-row class="sg_rating">
            <v-col cols="3">
              <div>{{ rating }}</div>
            </v-col>

            <v-col cols="5" class="d-flex flex-column">
              <v-rating
                large
                color="#F4511E"
                v-model="rating"
                empty-icon="$ratingFull"
                half-increments
                hover
                dense
                readonly
              ></v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card flat class="pa-5">
                <v-card-text>
                  <v-rating
                    dense                    
                    color="#F4511E"
                    v-model="rating"
                    empty-icon="$ratingFull"
                    class='mb-4 ml-n1'
                    half-increments
                    hover
                    readonly
                  ></v-rating>
                  Eu só tenho a agradecer as meninas, pelo carinho e dedicação
                  com a gente, o curso foi maravilhoso realizei um sonho em
                  fazer o curso, pois admiro muito o trabalho de vocês meninas,
                  com o curso aprendi muitas técnicas que com certeza levarei
                  para outros temas e será de grande valia.
                </v-card-text>
                <v-card-actions class="ml-2">
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="subtitle font-weight-medium grey--text ml-3">
                    Aluno</span
                  >
                </v-card-actions>
              </v-card>
            </v-col>
                   <v-col cols="6">
              <v-card flat class="pa-5">
                <v-card-text>
                  <v-rating
                    dense                    
                    color="#F4511E"
                    v-model="rating"
                    empty-icon="$ratingFull"
                    class='mb-4 ml-n1'
                    half-increments
                    hover
                    readonly
                  ></v-rating>
                  Eu só tenho a agradecer as meninas, pelo carinho e dedicação
                  com a gente, o curso foi maravilhoso realizei um sonho em
                  fazer o curso, pois admiro muito o trabalho de vocês meninas,
                  com o curso aprendi muitas técnicas que com certeza levarei
                  para outros temas e será de grande valia.
                </v-card-text>
                <v-card-actions class="ml-2">
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="subtitle font-weight-medium grey--text ml-3">
                    Aluno</span
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>




<script>
import { mapActions } from "vuex";
export default {
  layout: "userLayout",
  data() {
    return {
      course: [],
      rating: 4.7,
      expandDescription: false,
      tab: null,
      productsDetails: ["Vantagens", "Detalhes"],
      productDescription: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      descriptionItems: [
        { text: " Garantia de 7 dias" },
        { text: "Certificado de Conclusão" },
        { text: "15 aulas e 4 horas de conteúdo original" },
      ],
      h1: "Título do Curso",
      courseDetails:
        "<p>A umbanda é uma religião surgida nos subúrbios do Rio de Janeiro.<p><p> Em 15 de novembro de 1908, Zélio Fernandino de Moraes, nascido em São Gonçalo/RJ, teria incorporado o Caboclo das Sete Encruzilhadas.</p> Este espírito o teria ajudado a criar a religião de Umbanda. <p> Rapidamente, ela se espalhou por todo Brasil e outros países da América Latina.<br> Suas crenças misturam elementos do candomblé, do espiritismo e do catolicismo. Por isso, para muitos estudiosos, a Umbanda seria uma espécie de candomblé sem sacrifícios de animais, algo que seria mais aceito pela população branca e urbana da época A umbanda é uma religião surgida nos subúrbios do Rio de Janeiro. </p><p>Em 15 de novembro de 1908, Zélio Fernandino de Moraes, nascido em São Gonçalo/RJ, teria incorporado o Caboclo das Sete Encruzilhadas. Este espírito o teria ajudado a criar a religião de Umbanda. Rapidamente, ela se espalhou por todo Brasil e outros países da América Latina.<br> Suas crenças misturam elementos do candomblé, do espiritismo e do catolicismo. </p>Por isso, para muitos estudiosos, a Umbanda seria uma espécie de candomblé sem sacrifícios de animais, algo que seria mais aceito pela população branca e urbana da época..A umbanda é uma religião surgida nos subúrbios do Rio de Janeiro.",
    };
  },
  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/courses/${params.slug}`);
      console.log(response);
      return {
        course: response.course,
      };
    } catch (err) {
      console.log(err);
    }
  },
   methods: {
    ...mapActions(["addCourseToCart"]),
  },
};
</script>
<style scoped>
.sg_grid {
  display: grid;
  grid-template-columns: 70% 30%;
  row-gap: 20px;
  column-gap: 17px;
}
.sg_grid_2 {
  display: grid;
  grid-template-columns: 70%;
  row-gap: 20px;
  column-gap: 17px;
}
.sg_rating {
  font-size: 9rem;
}

.sg_card_box {
  padding: 5em 3em;
}
.sg_img {
  width: 304px;
  height: 310px;
}
.sg-title {
  margin-top: 3.59em;
}
.sg_card-title {
  font-size: 2.625rem;
  font-weight: bold;
}
.sg_card_subtitle {
  font-size: 1rem;
  color: #2b2b2b;
}
.pt-1-custom {
  padding-top: 1px;
}
</style>