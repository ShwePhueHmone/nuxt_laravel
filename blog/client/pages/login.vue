<template>
  <div class="container">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Form</p>
            <form @submit.prevent="login()">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  v-model="form.email"
                  placeholder="Email"
                  class="form-control form-control-lg"
                />
                <small class="text-danger mb-3" v-if="errors.email">
                  *{{ errors.email[0] }}
                </small>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  v-model="form.password"
                  placeholder="Password"
                />
                <small class="text-danger mb-3" v-if="errors.password">
                  *{{ errors.password[0] }}
                </small>
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <!-- Checkbox -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                Log in
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                class="btn btn-primary btn-lg btn-block"
                style="background-color: #3b5998"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
              </a>
              <a
                class="btn btn-primary btn-lg btn-block"
                style="background-color: #55acee"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter me-2"></i>Continue with Twitter</a
              >
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
@import "../assets/css/login.css";
</style>
<script>
export default {
  auth: "guest",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errors: {},
    };
  },
  mounted() {
    this.$axios.$get("http://127.0.0.1:8000/sanctum/csrf-cookie");
  },
  methods: {
    async login() {
      this.errors = {};
      this.$nuxt.$loading.start();
      try {
        await this.$auth.loginWith("laravelSanctum", { data: this.form });
        await this.$router.push({
          path: "/",
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.$nuxt.$loading.finish();
    },
  },
};
</script>
