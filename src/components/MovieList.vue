<template>
  <div class="mt-3">
    <div class="movielist">
      <div class="row movierow">
        <div class="col-4" v-for="(movie, index) in movielist" :key="index">
          <router-link :to="'movie/' + movie.id">
            <div
              class="moviecard"
              :style="'background-image: url('+imgUrl  + movie.poster_path + ')'"
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
    genres() {
      return this.$store.getters.genres;
    },
  },
  mounted() {
    this.$store
      .dispatch("getPopular")
      .then((resp) => {
        this.movielist = resp.data.results;
        console.log(this.movielist);
      })
      .catch((err) => {});
  },
  methods: {
    checkAvailGenre(genre) {
      let genreObj = this.genres.find((x) => x.id === genre);
      if (genreObj) {
        return true;
      } else {
        return false;
      }
    },
    checkGenres(genre) {
      let genreObj = this.genres.find((x) => x.id === genre);
      if (genreObj) {
        return genreObj.name;
      }
    },
  },
};
</script>
<style lang="scss"></style>
