<template>
  <div class="container mt-4">
    <div class="searchcard">
      <p class="font-weight-bold mb-2">
        <MessageSquareIcon class="mr-2" />Tell friends about Tideland.
      </p>
      <p class="small">
        Share this link so that all your favorite TV shows and movies can be
        joined by your friends.
      </p>
      <div class="row">
        <div class="col-8">
          <input
            disabled
            value="https://tideland.web.app"
            class="form-control form-control-sm"
          />
        </div>
        <div class="col-3 pl-0">
          <button class="btn btn-custom btn-sm text-capitalize">
            Copy link
          </button>
        </div>
      </div>
    </div>

    <div class="searchcard">
      <p class="small">
        <a href="#" class="text-dark">About Tideland</a>
      </p>
      <p class="small">
        <a href="#" class="text-dark">Contributors</a>
      </p>
      <p class="small">
        <a href="#" class="text-dark">Github</a>
      </p>
      <p class="small">
        <a href="#" class="text-dark">Dribbble Design</a>
      </p>
    </div>
    <div class="text-right">
      <p class="small mb-0 mt-3">
        Author: <a href="https://horpey.com" target="_blank">Horpey</a>
      </p>
      <p class="small">Tideland v.1.0</p>
    </div>
  </div>
</template>
<script>
import { MessageSquareIcon } from "vue-feather-icons";
import MyList from "@/components/MyList";
export default {
  components: {
    MessageSquareIcon,
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
