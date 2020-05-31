<template>
  <div>
    <div
      class="moviepreview"
      :style="
        'background: linear-gradient(rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), url(' +
          movieimg +
          ')'
      "
    >
      <div class="pt-3 pl-3 text-left">
        <router-link to="/" class="text-white"> <ArrowLeftIcon /></router-link>
      </div>
      <div class="playdiv">
        <a href="#" class="playicon">
          <span class="fa fa-play"></span>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="mt-2">
        <h5 class="font-weight-bold">Jungle Cruise</h5>
        <div class="row">
          <div class="col-8">
            <p class="text-primary">
              Movie File size
              <span class="font-weight-bold">253 MB</span>
            </p>
          </div>
          <div class="col-4">
            <div class="mvrating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </div>
        <p class="small">
          Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff
          to take her down the Amazon in his ramshackle boat. Together, they
          search for an ancient tree that holds the power to heal — a discovery
          that will change the future of medicine.
        </p>
        <div class="row my-4">
          <div class="col-3 pr-0">
            <a href="#" class="movieacct mr-2 text-dark">
              <PlusIcon size="1.5x"></PlusIcon>
              <span class="d-block ml-2">My List</span>
            </a>
          </div>
          <div class="col-3 pl-0">
            <a href="#" class="movieacct mr-2 text-dark">
              <ThumbsUpIcon size="1.5x"></ThumbsUpIcon>
              <span class="d-block">Rate</span>
            </a>
          </div>
          <div class="col-3 pl-0">
            <a href="#" class="movieacct mr-2 text-dark">
              <Share2Icon size="1.5x"></Share2Icon>
              <span class="d-block">Share</span>
            </a>
          </div>
        </div>
        <button class="btn btn-custom btn-block text-capitalize">
          <DownloadIcon size="1x"></DownloadIcon>
          <span class="ml-1">Download</span>
        </button>
      </div>

      <h6 class="mt-4 font-weight-bold">More like this</h6>
      <RelatedMovies style="padding-bottom: 150px;" />
    </div>
  </div>
</template>
<script>
import {
  DownloadIcon,
  PlusIcon,
  Share2Icon,
  ThumbsUpIcon,
  ArrowLeftIcon,
} from "vue-feather-icons";
import RelatedMovies from "@/components/RelatedMovies";
export default {
  components: {
    DownloadIcon,
    PlusIcon,
    Share2Icon,
    ThumbsUpIcon,
    ArrowLeftIcon,
    RelatedMovies,
  },
  data() {
    return {
      movieimg: "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
    };
  },
};
</script>
<style></style>
