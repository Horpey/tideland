<template>
  <div class="mt-3">
    <div class="trends">
      <div class="trendcard" v-for="(trend, index) in trending" :key="index">
        <router-link :to="'movie/' + trend.depth_inv">
          <div class="mvView">
            <div>
              <kinesis-container class="posterGrp">
                <kinesis-element
                  :strength="12"
                  type="depth_inv"
                  class="posterimg frontImg"
                  :style="'background-image: url('+imgUrl + trend.poster_path + ')'"
                ></kinesis-element>
                <kinesis-element
                  :strength="8"
                  type="depth"
                  class="posterimg backBlur"
                  :style="'background-image: url('+imgUrl + trend.poster_path + ')'"
                ></kinesis-element>
              </kinesis-container>
            </div>
          </div>
        </router-link>

        <div class="trendact">
          <div class>
            <div class="row">
              <div class="col-9 pr-0">
                <router-link :to="'movie/' + trend.depth_inv">
                  <p
                    class="font-weight-bold text-dark mb-0 text-left"
                  >{{ trend.original_title || trend.name | truncate(17) }}</p>
                  <div class="text-left">
                    <!-- <p class="releaseDate">{{ trend.release_date || trend.first_air_date}}</p> -->
                    <p>
                      <span
                        class="releaseDate mr-1"
                        v-for="(genre,index) in trend.genre_ids"
                        v-if="index <2 && checkAvailGenre(genre)"
                        :key="index"
                      >{{checkGenres(genre)}}</span>
                    </p>
                  </div>
                </router-link>
              </div>

              <div class="col-3 pl-0">
                <div class="pt-2">
                  <router-link :to="'movie/' + trend.depth_inv" class="mr-2 text-dark">
                    <InfoIcon size="1.7x"></InfoIcon>
                    <span class="d-block">Info</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      .dispatch("getTrending")
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
