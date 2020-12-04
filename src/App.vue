<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <keep-alive>
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </fade-transition>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
