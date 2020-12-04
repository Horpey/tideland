import Vue from "vue";
import Router from "vue-router";
import MenuBar from "./layout/MenuBar";
import Index from "./views/Index.vue";
import Movie from "./views/Movie.vue";
import Search from "./views/Search.vue";
import MyList from "./views/MyList.vue";
import More from "./views/More.vue";
import ThanksSupport from "./views/ThanksSupport.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Index",
      components: {
        default: Index,
        footer: MenuBar,
      },
    },
    {
      path: "/movie/:id",
      name: "Movie",
      components: {
        default: Movie,
        footer: MenuBar,
      },
    },
    {
      path: "/search",
      name: "Search",
      components: {
        default: Search,
        footer: MenuBar,
      },
    },
    {
      path: "/my-list",
      name: "MyList",
      components: {
        default: MyList,
        footer: MenuBar,
      },
    },
    {
      path: "/more",
      name: "More",
      components: {
        default: More,
        footer: MenuBar,
      },
    },
    {
      path: "/thanks-for-support",
      name: "thanks-for-support",
      components: {
        default: ThanksSupport,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      setTimeout(function() {
        console.log(savedPosition);

        window.scrollTo(savedPosition.x, savedPosition.y);
      }, 500);

      // window.scrollTo(savedPosition.x, savedPosition.y);

      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
  // scrollBehavior: (to) => {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash,
  //     };
  //   } else {
  //     return {
  //       x: 0,
  //       y: 0,
  //     };
  //   }
  // },
});
