<template>
  <div class="mt-3">
    <div class="trends">
      <div
        class="theatrelease"
        style="margin-right: 10px;
    width: 125px;"
        v-for="(trend, index) in trending"
        :key="index"
      >
        <router-link :to="'movie/' + trend.id">
          <div class="mvView theatt">
            <div
              type="depth_inv"
              class="posterimg frontImg"
              style="border-radius: 10px;"
              :style="'background-image: url('+imgUrl + trend.poster_path + ')'"
            ></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { PlusIcon, InfoIcon, DownloadIcon } from "vue-feather-icons";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {
    PlusIcon,
    InfoIcon,
    DownloadIcon,
    KinesisContainer,
    KinesisElement,
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
      page: 1,
      trendsScroll: "",
    };
  },
  mounted() {
    this.getTopRated();
    this.trendsScroll = this.$el.querySelector(".trends");
    this.trendsScroll.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (
        this.trendsScroll.offsetWidth + this.trendsScroll.scrollLeft + 30 >=
        this.trendsScroll.scrollWidth
      ) {
        this.getTopRated();
      }
    },
    getTopRated() {
      let page = this.page++;
      this.$store
        .dispatch("getTopRated", page)
        .then((resp) => {
          for (let i = 0; i < resp.data.results.length; i++) {
            this.trending.push(resp.data.results[i]);
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
