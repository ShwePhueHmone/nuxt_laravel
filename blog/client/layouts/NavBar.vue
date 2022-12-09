<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container justify-between">
      <h3>Logo</h3>
      <NuxtLink class="nav-link" to="/">
      </NuxtLink>
      <div class="" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/home">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/category">Category</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/post">Post</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/register">Register</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Logout</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {

}
</script>