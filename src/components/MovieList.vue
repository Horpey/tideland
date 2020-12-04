<template>
  <div class="mt-3">
    <div class="movielist">
      <div class="row movierow">
        <div class="col-4" v-for="(movie, index) in movielist" :key="index">
          <router-link :to="'movie/' + movie.id">
            <div
              class="moviecard"
              :style="
                'background-image: url(' + imgUrl + movie.poster_path + ')'
              "
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
      page: 1,
      trendsScroll: "",
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
    this.getMovies();
    this.trendsScroll = this.$el.querySelector(".movielist");
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (
        document.documentElement.scrollTop +
          1.1 * document.documentElement.offsetHeight >=
        document.documentElement.scrollHeight
      ) {
        this.getNewList();
      }

      // if (
      //   document.documentElement.offsetHeight +
      //     document.documentElement.scrollTop >=
      //   document.documentElement.scrollHeight
      // ) {
      //   this.getMovies();
      // }
    },
    getMovies() {
      if (sessionStorage.getItem("popularMovies")) {
        this.movielist.push(
          JSON.parse(sessionStorage.getItem("popularMovies"))
        );
      } else {
        // this.getNewList();
      }
    },
    getNewList() {
      let page = this.page++;
      this.$store
        .dispatch("getPopular", page)
        .then((resp) => {
          for (let i = 0; i < resp.data.results.length; i++) {
            this.movielist.push(resp.data.results[i]);

            sessionStorage.setItem(
              "popularMovies",
              JSON.stringify(this.movielist)
            );
          }
        })
        .catch((err) => {});
    },
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
