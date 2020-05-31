<template>
  <div class="mt-3">
    <div class="movielist">
      <div class="row movierow">
        <div class="col-4" v-for="(movie, index) in movielist" :key="index">
          <router-link :to="'movie/' + movie.title">
            <div
              class="moviecard"
              :style="'background-image: url(' + movie.poster + ')'"
            ></div
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      movielist: [
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
