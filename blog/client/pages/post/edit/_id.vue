<template>
    <div class="container mt-5">
        <div class="card">
            <h4 class="card-header text-info">Edit Post</h4>
            <div class="card-body">
                <form method="POST" @submit.prevent="edit()">
                    <div class="select-box">
                        Select Category:
                        <select v-model="post.categories" name="categories[]" multiple class="form-select">
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <img :src="`http://localhost:8000/storage/images/${post.image}`" class="mt-3" id="frame" alt="post image"
                        width="100px" height="100px" /><br>
                    Image:
                    <b-form-file v-model="image" @change="imageChange" class="mt-3" enctype="multipart/form-data"
                        plain></b-form-file>
                    <div class="form-group mt-3">
                        <label> Title:</label>
                        <input v-model="post.title" type="text" class="form-control" />
                    </div>
                    <div class="text-danger mb-3" v-if="Error">*{{ Error.title }}</div>
                    <div class="form-group">
                        <label> Description:</label>
                        <input v-model="post.description" type="text" class="form-control" />
                    </div>
                    <div class="text-danger mb-3" v-if="Error">*{{ Error.description }}</div>
                    <div class="text-danger mb-3"></div>
                    <button type="submit" class="btn btn-primary">
                        Save
                        <font-awesome-icon :icon="['fas', 'floppy-disk']" />
                    </button>
                </form>
            </div>
            <div class="footer"></div>
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
            Error: "",
            post: {
                id: "",
                categories: [],
                image: null,
                title: "",
                description: "",
            },
            image: null,
            categories: [],
        };
    },
    mounted() {
        this.getCategories();
        this.getPost();
    },
    methods: {
        imageChange(event) {
            let frame = document.getElementById("frame");
            frame.setAttribute("src", URL.createObjectURL(event.target.files[0]));
        },
        async getCategories() {
            await this.$axios
                .$get("http://127.0.0.1:8000/api/category")
                .then((res) => {
                    this.categories = res;
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        async getPost() {
            await this.$axios
                .$get("http://127.0.0.1:8000/api/post/" + this.$route.params.id)
                .then((res) => {
                    this.post = res.posts;
                    this.post.categories = res.categories;
                    console.log(res);
                });
        },
        edit(id) {
            const formData = new FormData();
            formData.append("categories", this.post.categories);
            formData.append("image", this.image);
            formData.append("title", this.post.title);
            formData.append("dsecription", this.post.description);
            this.$axios
                .post(`http://127.0.0.1:8000/api/posts/${this.post.id}`, formData)
                .then((response) => {
                    this.post = "";
                    this.$router.push({
                        path: "/post",
                    })
                        .catch((error) => {
                            this.Error = error.response.data.errors;
                        });
                });
        },
    },
};
</script>
  