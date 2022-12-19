<template>
  <div class="container">
    <div class="">
      <div class="row">
        <div class="col-md-6 mt-5" v-for="post in posts" :key="post.id">
          <div class="card mb-4 shadow-sm">
            <div class="" style="height: 200px;overflow: hidden;">
              <img :src="`http://127.0.0.1:8000/storage/img/posts/${post.image}`" class="card-img-top block"
                alt="post image" height="100%" />
            </div>
            <div class="card-body text-sm">
              <h6 class="card-title">
                {{ post.title }}
              </h6>
              <div class="row">
                <div class="col-md-6 mt-3">
                  <p class="ml-2 text-secondary">
                    <font-awesome-icon :icon="['fas', 'clock']" />
                    {{ new Date(post.created_at).toDateString() }}
                  </p>
                </div>
                <div class="col-md-6 mt-3">
                  <p class="ml-2 text-secondary">
                    <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p class="ml-2 text-secondary">
                    <font-awesome-icon :icon="['fas', 'folder']" />
                    {{post.categories[0].name }}
                  </p>
                </div>
              </div>
              <p class="card-text text-truncate">
                {{ post.description }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-primary">
                    <nuxt-link :to="`/post/${post.id}`" class="text-white">
                      Read More
                    </nuxt-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5 left-blog">
        <form @submit.prevent="search()">
          <div class="input-group">
            <input type="text" placeholder="search" class="form-control" v-model="keyword" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary mb-3 justify-content-end">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
          </div>
        </form>
        <!--Latest Posts-->
        <div class="row">
          <div class="col-md-6 mb-2">
            <h5>LATEST POSTS</h5>
          </div>
        </div>
        <div class="row border-bottom">
          <div class="col-md-12" v-for="latestPost in latestPosts" :key="latestPost.id">
            <div class="float-left mb-4">
              <img :src="`http://127.0.0.1:8000/storage/img/posts/${latestPost.image}`"
                width="50px" height="50px" />
            </div>
            <div class="float-right">{{ latestPost.description }}</div>
          </div>
        </div>
      </div>

    </div>

    <!-- <div class="row">
      <h5>CATEGORIES</h5>
      <div class="col-md-4" v-for="category in categories" :key="category.id">
        <div class="row border-bottom">
          <div class="col-md-6">
            <a href="./category/_id" class="ml-2 text-secondary">{{category.name}}</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>
      </div>
    </div> -->
    <small v-if="rows == 0 && keyword != ''" class="text-danger text-center">
      No post here!
    </small>
    <b-pagination class="pagination justify-content-center" v-model="currentPage" :total-rows="rows" :per-page="perPage"
      :current-page="currentPage" first-text="<<" prev-text="<" next-text=">" last-text=">>" v-if="rows > 5">
    </b-pagination>
  </div>
</template>
<style scoped>
@import '../assets/css/main.css';
</style>
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
        .$get("http://localhost:8000/api/posts?search=" + this.keyword)
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
<style>
.text-sm{
  font-size: 1em !important;
}
</style>
  