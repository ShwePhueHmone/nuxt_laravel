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