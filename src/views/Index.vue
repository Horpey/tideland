<template>
  <div class>
    <div class="container">
      <homehead />
      <trending />
      <h6 class="mt-4 font-weight-bold">Latest Theatre Release</h6>
      <NowPlaying />
      <h6 class="mt-4 font-weight-bold">Tideland Movie List</h6>
      <Movielist style="padding-bottom: 300px;" />
    </div>
  </div>
</template>

<script>
import Homehead from "@/components/Homehead";
import Trending from "@/components/Trending";
import Movielist from "@/components/MovieList";
import NowPlaying from "@/components/NowPlaying";

export default {
  name: "index",
  components: { Homehead, Trending, Movielist, NowPlaying },
  mounted() {
    this.$store
      .dispatch("getConfigurations")
      .then((resp) => {})
      .catch((err) => {});
  },
};
</script>
