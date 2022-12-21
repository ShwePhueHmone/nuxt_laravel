<template>
  <div class="post col-8 px-3 mx-auto mt-5">
    <div class="card shadow-lg">
      <div class="card-header">
        <h4 class="text-info">Edit Post</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-3 text-center">
            <img v-if="url" :src="url" class="rounded img-fluid" alt="default image" />
            <img
              v-if="post.image && !url"
              :src="`http://127.0.0.1:8000/storage/img/posts/${post.image}`"
              class="rounded img-fluid post-img"
              alt="post image"
            />
            <img
              v-if="!post.image && !url"
              src="../../../assets/img/default-img.jpg"
              class="rounded img-fluid post-img"
              alt="default image"
            />
          </div>
          <div class="col-9">
            <form @submit.prevent="edit()" id="form">
              <div class="mb-3">
                <label for="formFile" class="form-label fw-semibold">Choose Image</label>
                <input
                  class="form-control"
                  type="file"
                  name="image"
                  id="image"
                  @change="changeImage"
                />
                <small class="text-danger" v-if="errors.image != null"
                  >*{{ errors.image[0] }}</small
                >
              </div>
              <div class="select-box">
                Select Category:
                <select
                  v-model="post.categories"
                  name="category[]"
                  class="form-select mt-2"
                  aria-label="Default select example"
                >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="title" class="fw-semibold">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  v-model="post.title"
                />
                <small class="text-danger" v-if="errors.title != null"
                  >*{{ errors.title[0] }}</small
                >
              </div>
              <div class="form-group mb-3">
                <label for="description" class="fw-semibold">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Enter description"
                  v-model="post.description"
                ></textarea>
                <small class="text-danger" v-if="errors.description != null"
                  >*{{ errors.description[0] }}</small
                >
              </div>
              <div class="text-center">
                <button class="btn btn-primary" type="submit">
                  <font-awesome-icon :icon="['fas', 'floppy-disk']" />Update
                </button>
                <button class="btn btn-secondary" type="reset">
                  <font-awesome-icon :icon="['fas', 'xmark']" />Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      url: null,
      categories: [],
      errors: {},
      post: [],
    };
  },
  async fetch() {
    await this.getAllPost();
    await this.getAllCategories();
  },
  methods: {
    async getAllPost() {
      await this.$axios.$get("api/posts/" + this.$route.params.id).then((res) => {
        this.post = res.posts;
        this.post.categories = res.categories;
        console.log(res);
      });
    },

    async getAllCategories() {
      await this.$axios
        .$get("api/categories")
        .then((res) => {
          this.categories = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeImage(e) {
      this.post.image = e.target.files[0];
      let file = e.target.files[0];
      if (!file.type.includes("image")) {
        this.url = null;
      } else {
        this.url = URL.createObjectURL(file);
      }
    },
    async edit() {
      let form = new FormData(document.getElementById("form"));
      await this.$axios
        .$post(`api/posts/edit/${this.post.id}`, form)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: "Updated Successfully!",
          });
          this.$router.push({
            path: "/post",
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
