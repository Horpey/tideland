<template>
  <div class="mt-3">
    <div class="searchcard" v-for="(trend, index) in trends" :key="index">
      <div class="row">
        <div class="col-4 pr-0">
          <router-link :to="'movie/' + trend.title">
            <div
              class="posterimg"
              :style="'background-image: url(' + trend.poster + ')'"
            ></div>
          </router-link>
        </div>
        <div class="col-8">
          <p class="font-weight-bold m-0 small">{{ trend.title }}</p>
          <p class="mvdesc">
            A New York detective investigates the death of his daughter…
          </p>
          <div class="filesizep">
            <p class="small text-primary font-weight-bold m-0">
              243 MB
            </p>
            <div class="mvrating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
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
