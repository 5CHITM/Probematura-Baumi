<template>
  <div class="news">
    <v-carousel>
      <v-carousel-item v-for="el in slideshowItems" :key="el.location">
        <v-img :src="'http://127.0.0.1:3000/img/' + el.image"></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import slideshow from '@/assets/slideshow.json';

export default {
  data() {
    return {
      slideshowItems: slideshow,
    };
  },
  setup() {},
};
</script>
