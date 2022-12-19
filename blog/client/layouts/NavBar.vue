<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Logo</a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="menu">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link"
                to="../post/create">
                <svg class="px-6 py-6" aria-label="Write" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"></path>
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"></path>
                </svg>
                <span>Create Post</span>
              </NuxtLink>
            </li>
            <li class="nav-item nav-link active">
              <NuxtLink class="nav-link" to="/home">Home</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/category">Category</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/post">Post</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/register">Register</NuxtLink>
            </li>
            <li class="nav-item nav-link">
              <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
            </li>
            <li class="nav-item nav-link" tabindex="-1">
              <NuxtLink class="nav-link" to="/">Logout</NuxtLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import '../assets/css/menu.css';
</style>
<script>
export default {

}
</script>