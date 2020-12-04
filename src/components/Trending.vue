<template>
  <div class="mt-3">
    <div class="trends">
      <div class="trendcard" v-for="(trend, index) in trending" :key="index">
        <div @click="routetoMovie(trend.id)">
          <div class="mvView">
            <div>
              <kinesis-container class="posterGrp">
                <kinesis-element
                  :strength="12"
                  type="depth_inv"
                  class="posterimg frontImg"
                  :style="
                    'background-image: url(' + imgUrl + trend.poster_path + ')'
                  "
                ></kinesis-element>
                <kinesis-element
                  :strength="8"
                  type="depth"
                  class="posterimg backBlur"
                  :style="
                    'background-image: url(' + imgUrl + trend.poster_path + ')'
                  "
                ></kinesis-element>
              </kinesis-container>
            </div>
          </div>
        </div>

        <div class="trendact">
          <div class>
            <div class="row">
              <div class="col-9 pr-0">
                <router-link :to="'movie/' + trend.id">
                  <p class="font-weight-bold text-dark mb-0 text-left">
                    {{ trend.original_title || trend.name | truncate(17) }}
                  </p>
                  <div class="text-left">
                    <!-- <p class="releaseDate">{{ trend.release_date || trend.first_air_date}}</p> -->
                    <p>
                      <span
                        class="releaseDate mr-1"
                        v-for="(genre, index) in trend.genre_ids"
                        v-if="index < 2 && checkAvailGenre(genre)"
                        :key="index"
                        >{{ checkGenres(genre) }}</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div class="col-3 pl-0">
                <div class="pt-2">
                  <router-link :to="'movie/' + trend.id" class="mr-2 text-dark">
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
      page: 1,
      trendsScroll: "",
    };
  },
  mounted() {
    this.getTrends();
    this.trendsScroll = this.$el.querySelector(".trends");
    this.trendsScroll.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (
        this.trendsScroll.offsetWidth + this.trendsScroll.scrollLeft + 30 >=
        this.trendsScroll.scrollWidth
      ) {
        this.getTrends();
      }
    },
    routetoMovie(id) {
      sessionStorage.setItem("trendingLeft", this.trendsScroll.scrollLeft);
      this.$router.push("/movie/" + id);
    },
    getTrends() {
      let page = this.page++;
      this.$store
        .dispatch("getTrending", page)
        .then((resp) => {
          for (let i = 0; i < resp.data.results.length; i++) {
            this.trending.push(resp.data.results[i]);
          }

          let TrendsScroll = document.querySelector(".trends");
          console.log(document.querySelector(".trends").scrollLeft);

          console.log(document.querySelector(".trends").scrollLeft);

          // document.querySelector(".trends").scrollLeft = 665;
          // 2244
          // if (sessionStorage.getItem("trendingLeft")) {
          //   let TrendsScroll = document.querySelector(".trends");
          //   TrendsScroll.scrollTo(trendingLeft, 0);
          // }
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
