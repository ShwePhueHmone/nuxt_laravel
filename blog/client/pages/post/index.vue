<template>
  <div class="container">
    <h5 class="mt-3">Post Lists</h5>
    <div class="row d-flex justify-content-start mt-3">
      <div class="col-md-6 mt-3">
        <NuxtLink to="../post/create">
          <button class="btn btn-sm btn-primary">
            Create <font-awesome-icon :icon="['fas', 'square-plus']" />
          </button>
        </NuxtLink>
      </div>
      <div class="col-md-6 mt-3">
        <form @submit.prevent="search()">
          <div class="input-group">
            <input type="text" placeholder="search" class="form-control" v-model="keyword" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary mb-3 justify-content-end">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <b-table striped id="my-table" :items="posts" :per-page="perPage" :current-page="currentPage" :fields="fields"
        :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="mb-5">
        <template #cell(image)="data">
          <img :src="`http://127.0.0.1:8000/storage/img/posts/${data.item.image}`" class="rounded img-fluid post-img"
            alt="post image" />
        </template>
        <template #cell(actions)="data">
          <NuxtLink :to="`../post/edit/${data.item.id}`">
            <button class="btn btn-sm btn-success my-2">
              <font-awesome-icon :icon="['fas', 'pen-to-square']" /> Edit
            </button>
          </NuxtLink>
          <button class="btn btn-sm btn-danger my-2" @click="deletePost(data.item.id)">
            <font-awesome-icon :icon="['fas', 'trash']" /> Delete
          </button>
        </template>
      </b-table>
      <small v-if="rows == 0 && keyword != ''" class="text-danger text-center">
        No post here!
      </small>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" :current-page="currentPage"
        first-text="First" prev-text="Prev" next-text="Next" last-text="Last" v-if="rows > 5"></b-pagination>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});
export default {
  head: {
    title: "Post",
  },
  data() {
    return {
      posts: [],
      keyword: "",
      fields: [
        { key: "id", label: "ID" },
        { key: "image", label: "Image" },
        { key: "categories", label: "Categories" },
        {
          key: "title",
          label: "Title",
          thStyle: { width: "20%" },
          tdClass: "semibolder",
        },
        { key: "description", label: "Description" },
        { key: "actions", label: "Actions", thStyle: { width: "20%" } },
      ],
      sortBy: "id",
      sortDesc: true,
      currentPage: 1,
      perPage: 5,
    };
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      await this.$axios
        .$get("api/posts?search=" + this.keyword)
        .then((res) => {
          console.log(res?.categories);
          this.posts = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deletePost(id) {
      if (confirm("Are you sure to delete?")) {
        this.$axios
          .$delete(`api/posts/${id}`)
          .then((res) => {
            this.posts = this.posts.filter((item) => {
              return item.id !== id;
            });
            Toast.fire({
              icon: "warning",
              title: "Deleted Successfully!",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
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

<style scoped>
@import '../../assets/css/main.css';
</style>>
