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
            v-model="siteLink"
            disabled
            class="form-control form-control-sm"
          />
        </div>
        <div class="col-3 pl-0">
          <button
            v-clipboard:copy="siteLink"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            class="btn btn-custom btn-sm text-capitalize"
          >
            <span v-if="hvCopied"
              >Copied
              <span class="ml-1 fa fa-check"></span>
            </span>
            <span v-else>Copy Link</span>
          </button>
        </div>
      </div>
    </div>

    <div class="searchcard">
      <!-- <p class="small">
        <a href="javascript:void()" class="text-dark">About Tideland</a>
      </p> -->
      <p class="small">
        <a
          href="https://forms.gle/i5U1Hg6nN7WsA1keA"
          target="_blank"
          class="text-dark"
          >Suggest Improvement</a
        >
      </p>
      <p class="small">
        <a href="https://github.com/Horpey" target="_blank" class="text-dark"
          >Github</a
        >
      </p>
      <p class="small">
        <a
          href="https://dribbble.com/tha_ui_guy_"
          target="_blank"
          class="text-dark"
          >Dribbble Profile</a
        >
      </p>
      <a
        href="https://paystack.com/pay/tideland"
        target="_blank"
        class="btn btn-dark text-capitalize"
      >
        <span class="fa fa-coffee mr-2"></span> Buy me a Coffee
      </a>
    </div>
    <div class="text-right">
      <p class="small mb-0 mt-3">
        Developed with ❤️ by
        <a href="https://horpey.com" target="_blank">Horpey</a>
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
      hvCopied: false,
      siteLink: "https://tideland.xyz/",
      movieimg: "http://www.impawards.com/2020/posters/jungle_cruise_ver4.jpg",
    };
  },
  methods: {
    onCopy: function (e) {
      this.hvCopied = true;
    },
    onError: function (e) {},
  },
};
</script>
<style></style>
