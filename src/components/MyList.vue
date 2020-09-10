<template>
  <div class="mt-3">
    <div class="movielist">
      <div class="row movierow">
        <div class="col-4" v-for="(movie, index) in movielist.slice().reverse()" :key="index">
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
  data() {
    return {
      movielist: [],
    };
  },
  computed: {
    imgUrl() {
      return "http://image.tmdb.org/t/p/w500/";
    },
  },
  mounted() {
    this.movielist = JSON.parse(localStorage.getItem("tidelandList"));
  },
};
</script>
<style lang="scss"></style>
