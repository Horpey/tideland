<template>
  <div class="container mt-4">
    <base-input
      placeholder="Search movie"
      @input="searchMovie()"
      v-model="searchField"
      addon-left-icon="fa fa-search"
      class="searchinput"
    ></base-input>
    <h6 class="mt-4 font-weight-bold">TV Shows & Movies</h6>
    <div class="mt-3">
      <div class="movielist" v-if="searchField">
        <div class="row movierow">
          <div class="col-4" v-for="(movie, index) in searchResult" :key="index" v-if="index <12">
            <router-link :to="'/movie/' + movie.id">
              <div
                class="moviecard"
                :style="'background-image: url('+imgUrl + movie.poster_path + ')'"
              ></div>
            </router-link>
          </div>
          <div class="demarc"></div>
        </div>
      </div>

      <div v-else>
        <div class="searchcard" v-for="(trend, index) in trending" :key="index" v-if="index <3">
          <router-link :to="'/movie/' + trend.id" class="text-dark">
            <div class="row">
              <div class="col-4 pr-0">
                <div
                  class="posterimg"
                  :style="'background-image: url('+imgUrl + trend.poster_path + ')'"
                ></div>
              </div>
              <div class="col-8">
                <p class="font-weight-bold m-0 small">{{ trend.original_title || trend.name }}</p>
                <p class="mvdesc">{{trend.overview | truncate(150)}}</p>
                <div class>
                  <p class="mvYear mb-2">{{trend.release_date | getYear}}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DownloadIcon } from "vue-feather-icons";

export default {
  components: {
    DownloadIcon,
  },
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
      searchResult: [],
      searchField: "",
    };
  },
  mounted() {
    this.$store
      .dispatch("getLatest")
      .then((resp) => {
        this.trending = resp.data.results;
      })
      .catch((err) => {});
  },
  methods: {
    searchMovie() {
      let search = this.searchField;
      this.$store
        .dispatch("searchMovie", search)
        .then((resp) => {
          this.searchResult = resp.data.results;
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
<style></style>
