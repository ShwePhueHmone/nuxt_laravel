<template>
    <div class="container mt-3">
      <div class="card">
        <h4 class="card-header text-info">Create Post</h4>
        <div class="card-body">
          <form method="POST" @submit.prevent="store()" id="categoryForm">
            <div class="select-box">
              Select Category:
              <select v-model="post.category" name="category[]" multiple class="form-select mt-2" aria-label="Default select example">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <img  id="frame" alt="post image" width="100px" height="100px" class="mt-2"/><br>
            Choose Image:
            <b-form-file v-model="post.image" id="img" name="images" @change="preview" enctype="multipart/form-data" class="mt-3" plain>
            </b-form-file>
            <div class="text-danger" v-if="Error">*{{ Error.image[0] }}</div>
            <div class="form-group mt-3">
              <label> Title:</label>
              <input v-model="post.title" type="text" class="form-control" />
            </div>
            <div class="text-danger mb-3" v-if="Error">*{{ Error.title[0] }}</div>
            <div class="form-group">
              <label> Description:</label>
              <textarea v-model="post.description" type="text" class="form-control">
              </textarea>
            </div>
            <div class="text-danger mb-3" v-if="Error">*{{ Error.description[0] }}</div>
            <div class="text-danger mb-3"></div>
            <button type="submit" class="btn btn-primary">
              Save
              <font-awesome-icon :icon="['fas', 'floppy-disk']" />
            </button>
            <b-button variant="danger" href="../post" @click="clearErrMessage">
              Cancel
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </b-button>
          </form>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Post",
    data() {
      return {
        post: {
          id: "",
          category: [],
          image: null,
          title: "",
          description: "",
        },
        posts: {},
        url: "",
        Error: "",
        categories: [],
      };
    },
    mounted() {
      this.getCategories();
    },
    methods: {
      async getCategories() {
        await this.$axios
          .$get("api/category")
          .then((res) => {
            this.categories = res;
          })
          .catch((err) => {
            console.error(err);
          });
      },
      preview(event) {
        let frame = document.getElementById("frame");
        frame.setAttribute("src", URL.createObjectURL(event.target.files[0]));
      },
      async store() {
        const formData = new FormData();
        formData.append("categories", this.post.category);
        formData.append("image", this.post.image);
        formData.append("title", this.post.title);
        formData.append("description", this.post.description);
        this.$axios
          .post("api/posts", formData)
          .then((response) => {
            this.post = "";
            this.$router.push({
              path: "/post",
            });
          })
          .catch((error) => {
            this.Error = error.response.data.errors;
          });
      },
      clearErrMessage(){
      this.errors = null;
      let form = document.getElementById("categoryForm");
      form.reset();
  
      },
    },
  };
  </script>