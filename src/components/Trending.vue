<template>
  <div class="mt-3">
    <div class="trends">
      <div class="trendcard" v-for="(trend, index) in trends" :key="index">
        <router-link :to="'movie/' + trend.title">
          <div
            class="posterimg"
            :style="'background-image: url(' + trend.poster + ')'"
          ></div>
          <p class="font-weight-bold text-dark">{{ trend.title }}</p>
        </router-link>

        <div class="trendact">
          <div class="">
            <div class="row">
              <div class="col-3 pr-0">
                <a href="#" class="mr-2 text-dark">
                  <PlusIcon size="1.5x"></PlusIcon>
                  <span class="d-block ml-2">My List</span>
                </a>
              </div>
              <div class="col-6">
                <button class="btn btn-block btn-custom text-capitalize">
                  <DownloadIcon size="1.5x"></DownloadIcon>
                </button>
              </div>
              <div class="col-3 pl-0">
                <a href="#" class="mr-2 text-dark">
                  <InfoIcon size="1.5x"></InfoIcon>
                  <span class="d-block">My List</span>
                </a>
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

export default {
  components: {
    PlusIcon,
    InfoIcon,
    DownloadIcon,
  },
  data() {
    return {
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
};
</script>
<style lang="scss"></style>
