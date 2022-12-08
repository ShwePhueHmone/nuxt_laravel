<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="text-info text-center mb-3">Sign Up</h3>
            <form >
              <div class="form-group">
                <input type="text" class="form-control" v-model="form.name" placeholder="Name"/>
              </div>
              
              <div class="form-group">
                <input type="text" class="form-control" v-model="form.email" placeholder="Email"/>
              </div>
              
              <div class="form-group mt-3">
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password"
                  placeholder="Password"
                />
              </div>
              
              <div class="form-group mt-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" class="btn btn-primary mt-3 btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: "guest",
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        _token: "",
      },
      errors: [],
    };
  },
  mounted() {
    this.$axios.$get("/sanctum/csrf-cookie");
  },
  methods: {
    register() {
      this.$axios
        .post("http://127.0.0.1:8000/register", this.form)
        .then((response) => {
          this.$router.push({
            path: "/login",
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
