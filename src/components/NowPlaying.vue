<template>
  <div class="mt-3">
    <div class="trends">
      <div class="theatrelease" v-for="(trend, index) in trending" :key="index">
        <router-link :to="'movie/' + trend.depth_inv">
          <div class="mvView theatt">
            <div
              type="depth_inv"
              class="posterimg frontImg"
              :style="'background-image: url('+imgUrl + trend.backdrop_path + ')'"
            ></div>
            <p>{{trend.original_title || trend.name}}</p>
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
      trends: [
        {
          poster:
            "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
          title: "Jungle Cruise",
        },
        {
          poster: "http://www.impawards.com/2020/posters/mulan_ver21.jpg",
          title: "Mulan",
        },
        {
          poster: "http://www.impawards.com/2020/posters/after_midnight.jpg",
          title: "After Midnight",
        },
      ],
    };
  },
  mounted() {
    this.$store
      .dispatch("getNowPlaying")
      .then((resp) => {
        this.trending = resp.data.results;
        console.log(resp.data);
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
