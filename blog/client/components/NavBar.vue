<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">Logo</a>
      </div>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="menu">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="../post/create">
                <svg
                  class="px-6 py-6"
                  aria-label="Write"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span>Create Post</span>
              </NuxtLink>
            </li>
            <li class="nav-item nav-link active">
              <NuxtLink class="nav-link" to="/" v-if="!$auth.loggedIn">Home</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/test" v-if="!$auth.loggedIn"
                >About</NuxtLink
              >
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/category" v-if="!$auth.loggedIn"
                >Category</NuxtLink
              >
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/post" v-if="!$auth.loggedIn">Post</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/register" v-if="!$auth.loggedIn"
                >Register</NuxtLink
              >
            </li>
            <li class="nav-item nav-link dropdown" v-if="$auth.loggedIn">
              <a
                class="nav-link dropdown-toggle text-uppercase"
                href="#"
                id="dropdown07XL"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                >{{ $auth.user.name }}</a
              >
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdown07XL"
                data-bs-popper="none"
              >
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <span @click="logout" class="dropdown-item">Logout</span>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import "../assets/css/menu.css";
</style>
<script>
export default {
  middleware: "auth",
  methods: {
    async logout() {
      this.$nuxt.$loading.start();
      await this.$auth.logout();
      this.$nuxt.$loading.finish();
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
