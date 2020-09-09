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
    };
  },
  mounted() {
    this.$store
      .dispatch("getTopRated")
      .then((resp) => {
        this.trending = resp.data.results;
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
