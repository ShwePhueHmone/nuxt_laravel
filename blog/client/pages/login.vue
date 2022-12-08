<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="text-info text-center mb-3">Please Sign In</h3>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  
                  class="form-control"
                  placeholder="Email"
                />
              </div>
             
              <div class="form-group mt-3">
                <input
                  type="password"
                  
                  class="form-control"
                  placeholder="Password"
                />
                
              </div>
              <button type="submit" class="btn btn-primary mt-3 btn-block">Login</button>
              <div class="text-xs">
                Not Registered?
                <nuxt-link class="text-blue-600" to="/register">Register</nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
