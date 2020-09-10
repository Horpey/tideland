<template>
  <div class="mt-3">
    <div class="movielist">
      <div class="row movierow">
        <div class="col-4" v-for="(movie, index) in similarMovies" :key="index" v-if="index <12">
          <router-link :to="'/movie/' + movie.id">
            <div
              class="moviecard"
              :style="'background-image: url('+imgUrl + movie.poster_path + ')'"
            ></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {
    imgUrl() {
      return "http://image.tmdb.org/t/p/w500/";
    },
    similarMovies() {
      return this.$store.getters.similarMovies;
    },
  },
};
</script>
<style lang="scss"></style>
