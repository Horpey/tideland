<template>
  <div class="container mt-4">
    <h6 class="mt-4 font-weight-bold">My Tideland List</h6>
    <div class>
      <MyList />
    </div>
  </div>
</template>
<script>
import { DownloadIcon } from "vue-feather-icons";
import MyList from "@/components/MyList";
export default {
  components: {
    DownloadIcon,
    MyList,
  },
  data() {
    return {
      movieimg: "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
    };
  },
};
</script>
<style></style>
