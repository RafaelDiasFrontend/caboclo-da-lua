<template>
  <div class='white breadcrumbs'>
    <v-breadcrumbs :items="pageTitleItem"></v-breadcrumbs>
    <h3 class='breadcrumb_title'>{{ pageTitleItem[1].text }}</h3>
  </div>
</template>


<script>
export default {
  props: {
    pageTitleItem: {
      required: true,
      type: Array,
    },    
  },
};
</script>

<style>
.breadcrumbs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}
.breadcrumb_title {
  font-size: 2em;
  font-weight: bold; 
  padding-left: 23px;
  margin-top: -19px;
  padding-bottom: 1em;
}
</style>