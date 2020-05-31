<template>
  <div>
    <div class="bottomcard">
      <div class="bottomNav">
        <router-link to="/" active-class="active" exact>
          <div class="navitemm">
            <HomeIcon size="1.5x"></HomeIcon>
            <p>Home</p>
          </div>
        </router-link>
      </div>

      <div class="bottomNav">
        <router-link to="/search" active-class="active" exact>
          <div class="navitemm">
            <SearchIcon size="1.5x"></SearchIcon>
            <p>Search</p>
          </div>
        </router-link>
      </div>

      <div class="bottomNav">
        <router-link to="/my-list" active-class="active" exact>
          <div class="navitemm">
            <PlusCircleIcon size="1.5x"></PlusCircleIcon>
            <p>My List</p>
          </div>
        </router-link>
      </div>

      <div class="bottomNav">
        <router-link to="/more" active-class="active" exact>
          <div class="navitemm">
            <MenuIcon size="1.5x"></MenuIcon>
            <p>More</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HomeIcon,
  SearchIcon,
  MenuIcon,
  PlusCircleIcon,
} from "vue-feather-icons";
export default {
  components: {
    HomeIcon,
    SearchIcon,
    MenuIcon,
    PlusCircleIcon,
  },
  data() {
    return {
      navlinks: [
        { title: "Home", icon: "home.svg", route: "/" },
        { title: "Search", icon: "search.svg", route: "/search" },
        { title: "Saved", icon: "file-text.svg", route: "/saved" },
        { title: "Likes", icon: "heart.svg", route: "/likes" },
        { title: "Profile", icon: "user.svg", route: "/profile" },
      ],
    };
  },
};
</script>
<style></style>
