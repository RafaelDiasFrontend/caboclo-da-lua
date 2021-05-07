<template>
<div>
 <Breadcrumbs :pageTitleItem="pageTitle" class='pl-5' />
  <v-container>  
    <v-row justify="center">
      <v-col cols="12" md="4" lg='4' xl='3' v-for="n in 3" :key="n">
        <CardCourse />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script>
import CardCourse from "@/components/Cards/CardCourse";
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
export default {
  layout: "userLayout",
  components: {
    CardCourse,
    Breadcrumbs
  },
  data() {
    return {           
       pageTitle: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Meus Cursos',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },       
      ],
      CardCourseItem: [
        {
          title: "Título do Curso",
          progress: "62%",
          teacherName: "Nome do professor",
          photo: "",
        },
        {
          title: "Título do Curso",
          progress: "62%",
          teacherName: "Nome do professor",
          photo: "",
        },
        {
          title: "Título do Curso",
          progress: "62%",
          teacherName: "Nome do professor",
          photo: "",
        },
      ],
    };
  },
};
</script>