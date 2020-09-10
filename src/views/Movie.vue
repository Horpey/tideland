<template>
  <div>
    <div
      class="moviepreview"
      :style="
        'background: linear-gradient(rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), url(' +
          imgUrl + mvBack +
          ')'
      "
    >
      <div class="pt-3 pl-3 text-left">
        <p @click="$router.go(-1)" class="text-white" style="cursor: pointer">
          <ArrowLeftIcon />
        </p>
      </div>
      <div class="playdiv">
        <a href="#" class="playicon">
          <span class="fa fa-play"></span>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4 pr-0">
          <img
            :src="imgUrl+movieDetails.poster_path"
            class="img-fluid"
            style="border-radius: 6px; margin-top: -88px; border: 3px solid white;"
            :alt="movieDetails.original_title"
          />
        </div>
        <div class="col-8">
          <div class>
            <h6 class="font-weight-bold mb-1">{{movieDetails.original_title}}</h6>
            <p class="mvYear mb-2">{{movieDetails.release_date | getYear}}</p>
            <div class="row">
              <div class="col-4">
                <div class>
                  <vue-stars
                    :active-color="'#c3a900'"
                    :inactive-color="'#c7c7c7'"
                    :max="5"
                    :value="getRating(movieDetails.vote_average)"
                    :readonly="true"
                    char="★"
                    inactive-char
                    class
                  />
                </div>
              </div>
              <div class="col-8">
                <div class="text-right" style="margin-top: -20px;">
                  <span
                    v-if="!ifIncluded()"
                    @click="addToList()"
                    class="movieacct mr-2 text-dark d-inline-block mr-3"
                    style="cursor: pointer"
                  >
                    <PlusIcon size="1x"></PlusIcon>
                    <span class="d-block" style="font-size: 10px">My List</span>
                  </span>

                  <span
                    v-if="ifIncluded() || addedtoList"
                    @click="removefromList()"
                    class="movieacct mr-2 text-dark d-inline-block mr-3"
                    style="cursor: pointer"
                  >
                    <CheckIcon size="1x"></CheckIcon>
                    <span class="d-block" style="font-size: 10px">My List</span>
                  </span>

                  <span
                    @click="viewShare = !viewShare"
                    class="movieacct mr-2 text-dark d-inline-block"
                    style="cursor: pointer"
                  >
                    <Share2Icon size="1x"></Share2Icon>
                    <span class="d-block" style="font-size: 10px">Share</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4">
        <p class="small">{{movieDetails.overview}}</p>
        <p>
          <span
            class="releaseDate mr-1"
            v-for="(genre,index) in movieDetails.genres"
            :key="index"
          >{{genre.name}}</span>
        </p>
      </div>

      <tabs fill class="tabsSection" style="padding-bottom: 150px;">
        <div>
          <tab-pane>
            <span slot="title">Trailer & More</span>
            <div>
              <div class="mb-4" v-for="(vid,index) in videos" :key="index">
                <youtube
                  class="trailerPrev"
                  :video-id="vid.key"
                  player-width="100%"
                  player-height="200"
                ></youtube>
                <p class="small" style="font-weight: bold; color: black">{{vid.name}}</p>
              </div>
            </div>
          </tab-pane>

          <tab-pane title="More">
            <span slot="title">More Like this</span>
            <div>
              <RelatedMovies />
            </div>
          </tab-pane>
        </div>
      </tabs>
    </div>
    <div :class="{'sharePopUp': true,  'hideShare': !viewShare}" @click="viewShare = !viewShare">
      <div class>
        <div class="text-center" style="margin-top: 160px">
          <div class="closePopDiv">
            <div style="max-width: 200px; margin-top:10px; margin: 0 auto">
              <p class="font-weight-bold" style="color: white">Share to...</p>
              <ShareNetwork
                class="btn btn-white mb-3 text-capitalize mx-0"
                style="background-color: #23d366; border-color:  #23d366; color: white"
                network="whatsapp"
                :url="sitePath"
                :title="`Seen '${movieDetails.original_title}' on Tideland yet?`"
                hashtags="tideland,movies,imdb,series,tv"
              >
                <span class="fa fa-whatsapp mr-2"></span>
                Share on Whatsapp
              </ShareNetwork>
              <ShareNetwork
                class="btn btn-white mb-3 text-capitalize mx-0"
                style="background-color: #1a77f2; border-color:  #1a77f2; color: white"
                network="facebook"
                :url="sitePath"
                :title="`Seen '${movieDetails.original_title}' on Tideland yet?`"
                hashtags="tideland,movies,imdb,series,tv"
              >
                <span class="fa fa-facebook mr-2"></span>Share on Facebook
              </ShareNetwork>
              <ShareNetwork
                class="btn btn-white mb-3 text-capitalize mx-0"
                network="twitter"
                style="background-color: #1da2f1; border-color:  #1da2f1; color: white"
                :url="sitePath"
                :title="`Seen '${movieDetails.original_title}' on Tideland yet?`"
                hashtags="tideland,movies,imdb,series,tv"
              >
                <span class="fa fa-twitter mr-2"></span>Share on Twitter
              </ShareNetwork>
            </div>
            <XIcon
              class="closePop mt-5"
              style="cursor: pointer"
              @click="viewShare = !viewShare"
              size="4x"
            ></XIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from "../components/Tabs/Tab";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";
import {
  DownloadIcon,
  PlusIcon,
  Share2Icon,
  ThumbsUpIcon,
  CheckIcon,
  ArrowLeftIcon,
  XIcon,
} from "vue-feather-icons";
import RelatedMovies from "@/components/RelatedMovies";
export default {
  components: {
    DownloadIcon,
    PlusIcon,
    Share2Icon,
    ThumbsUpIcon,
    ArrowLeftIcon,
    CheckIcon,
    XIcon,
    RelatedMovies,
    tabs: Tabs,
    "tab-pane": TabPane,
    Tab,
  },
  data() {
    return {
      movieimg: "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
      movieDetails: "",
      viewShare: false,
      addedtoList: false,
      sitePath: window.location.href,
      mvBack: "",
      videos: [],
      similarMovies: [],
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
    let id = this.$route.params.id;
    this.getVideos();
    this.getSimilar();
    this.$store
      .dispatch("getMovieDetails", id)
      .then((resp) => {
        this.movieDetails = resp.data;
        this.getBackDrop();
      })
      .catch((err) => {});
  },
  methods: {
    shareMovie() {
      this.viewShare = true;
    },
    ifIncluded() {
      if (localStorage.getItem("tidelandList")) {
        var mvlist = JSON.parse(localStorage.getItem("tidelandList"));
        let checkL = mvlist.filter((list) => list.id === this.movieDetails.id);
        if (checkL.length >= 1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    removefromList() {
      this.addedtoList = false;
      let addMovie = {
        id: this.movieDetails.id,
      };
      var mvlist = JSON.parse(localStorage.getItem("tidelandList"));
      mvlist = mvlist.filter(function (list) {
        return list.id !== addMovie.id;
      });
      localStorage.setItem("tidelandList", JSON.stringify(mvlist));
      this.ifIncluded();
    },
    addToList() {
      this.addedtoList = true;
      let addMovie = {
        id: this.movieDetails.id,
        title: this.movieDetails.original_title,
        poster_path: this.movieDetails.poster_path,
        overview: this.movieDetails.overview,
      };
      if (localStorage.getItem("tidelandList")) {
        var mvlist = JSON.parse(localStorage.getItem("tidelandList"));
        let checkL = mvlist.filter((list) => list.id === this.movieDetails.id);
        if (checkL.length >= 1) {
          console.log("Already In List");
        } else {
          mvlist.push(addMovie);
          localStorage.setItem("tidelandList", JSON.stringify(mvlist));
        }
      } else {
        var mvlist = [];
        mvlist.push(addMovie);
        localStorage.setItem("tidelandList", JSON.stringify(mvlist));
      }

      // console.log(JSON.parse(localStorage.getItem("tidelandList")));
    },
    getSimilar() {
      let id = this.$route.params.id;
      this.$store
        .dispatch("getSimilar", id)
        .then((resp) => {
          this.similarMovies = resp.data.results;
          this.$store.commit("setSimilarMovies", this.similarMovies);
        })
        .catch((err) => {});
    },
    getVideos() {
      let id = this.$route.params.id;
      this.$store
        .dispatch("getVideos", id)
        .then((resp) => {
          this.videos = resp.data.results;
        })
        .catch((err) => {});
      // this.videos
    },
    getRating(rating) {
      let nRating = rating / 2;
      return Math.ceil(nRating);
    },
    getBackDrop() {
      if (this.movieDetails.backdrop_path) {
        this.mvBack = this.movieDetails.backdrop_path;
      } else {
        this.mvBack = this.movieDetails.poster_path;
      }
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
<style>
.ytp-chrome-top,
.ytp-chrome-bottom {
  display: none !important;
}
</style>
