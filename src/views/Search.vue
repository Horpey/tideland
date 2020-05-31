<template>
  <div class="container mt-4">
    <base-input
      placeholder="Search movie"
      addon-left-icon="fa fa-search"
      class="searchinput"
    ></base-input>
    <h6 class="mt-4 font-weight-bold">TV Shows & Movies</h6>
    <div class="">
      <SearchResult />
    </div>
  </div>
</template>
<script>
import { DownloadIcon } from "vue-feather-icons";
import SearchResult from "@/components/SearchResult";
export default {
  components: {
    DownloadIcon,
    SearchResult,
  },
  data() {
    return {
      movieimg: "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
    };
  },
};
</script>
<style></style>
