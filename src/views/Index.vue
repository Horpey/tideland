<template>
  <div class>
    <div class="container">
      <homehead />
      <trending />
      <h6 class="mt-4 font-weight-bold">Latest Theatre Release</h6>
      <NowPlaying />
      <h6 class="mt-2 font-weight-bold">Top rated Movies</h6>
      <TopRated />
      <h6 class="mt-4 font-weight-bold">Popular Movies</h6>
      <Movielist style="padding-bottom: 100px;" />
    </div>
  </div>
</template>

<script>
import Homehead from "@/components/Homehead";
import Trending from "@/components/Trending";
import Movielist from "@/components/MovieList";
import NowPlaying from "@/components/NowPlaying";
import TopRated from "@/components/TopRated";

export default {
  name: "index",
  components: { Homehead, Trending, Movielist, NowPlaying, TopRated },
  mounted() {
    // this.$store
    //   .dispatch("getConfigurations")
    //   .then((resp) => {})
    //   .catch((err) => {});
  },
};
</script>
