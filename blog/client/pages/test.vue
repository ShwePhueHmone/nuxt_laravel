<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4">.col-sm-4</div>
      <div class="col-sm-4">.col-sm-4</div>
      <div class="col-sm-4">
        <form @submit.prevent="search()">
          <div class="input-group">
            <input
              type="text"
              placeholder="search"
              class="form-control"
              v-model="keyword"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary mb-3 justify-content-end">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "Post",
  },
  data() {
    return {
      categories: [],
      posts: [],
      latestPosts: [],
      keyword: "",
      currentPage: 1,
      perPage: 5,
    };
  },
  mounted() {
    this.getAllPosts();
    this.getCategories();
    this.getLatestPosts();
  },
  methods: {
    async getAllPosts() {
      await this.$axios
        .$get("/api/posts/?search=" + this.keyword)
        .then((res) => {
          console.log(res?.categories);
          this.posts = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getLatestPosts() {
      await this.$axios
        .$get("http://127.0.0.1:8000/api/posts")
        .then((res) => {
          this.latestPosts = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getCategories() {
      await this.$axios
        .$get("/category?search=" + this.keyword)
        .then((res) => {
          this.categories = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    search() {
      this.getAllPosts();
    },
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },
};
</script>
