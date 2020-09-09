<template>
  <div class="mt-3">
    <div class="searchcard" v-for="(trend, index) in trending" :key="index">
      <div class="row">
        <div class="col-4 pr-0">
          <router-link :to="'movie/' + trend.title">
            <div class="posterimg" :style="'background-image: url(' + trend.poster + ')'"></div>
          </router-link>
        </div>
        <div class="col-8">
          <p class="font-weight-bold m-0 small">{{ trend.title }}</p>
          <p class="mvdesc">A New York detective investigates the death of his daughter…</p>
          <div class="filesizep">
            <p class="small text-primary font-weight-bold m-0">243 MB</p>
            <div class="mvrating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
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
    genres() {
      return this.$store.getters.genres;
    },
  },
  data() {
    return {
      trending: [],
    };
  },
  mounted() {
    this.$store
      .dispatch("getTrending")
      .then((resp) => {
        this.trending = resp.data.results;
        console.log(this.trending);
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
