<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8">
                <div class="card mb-4 shadow-sm">
                    <img :src="`http://127.0.0.1:8000/storage/img/posts/${posts.image}`" class="img-fluid"
                        alt="post image" height="50%">
                    <div class="card-body">
                        <h6 class="card-text "> {{ posts.title }}</h6>
                        <div class="row">
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3">
                                    <font-awesome-icon :icon="['fas', 'clock']" />
                                    {{ new Date(posts.created_at).toDateString() }}
                                </p>
                            </div>
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3">
                                    <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                                </p>
                            </div>
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3" v-for="category in posts.categories"
                                    :key="category.id">
                                    <font-awesome-icon :icon="['fas', 'folder']" />
                                    {{ posts.categories }}
                                </p>
                            </div>
                        </div>
                        <p class="card-text">{{ posts.description }}</p>
                    </div>
                </div>
                <!--RELATED POSTS-->
                <!-- <div class="row border-bottom">
                    <div class="col-md-12" v-for="relatePosts in relatePosts" :key="relatePosts.id">
                        <h6 class="mt-3">RELATED POSTS</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <img src="`http://127.0.0.1:8000/storage/img/posts/${posts.image}`" class="img-fluid"
                            alt="post image">
                        <p>{{ posts.title }}</p>
                    </div>
                </div> -->
            </div>

            <div class="col-md-4">
                <form>
                    <div class="input-group">
                        <input type="text" placeholder="search" class="form-control" />
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-primary mb-3 justify-content-end"><font-awesome-icon
                                    :icon="['fas', 'magnifying-glass']" /></button>
                        </div>
                    </div>
                </form>
                <!--Latest Posts-->
                <div class="row">
                    <div class="col-md-6">
                        <h5>LATEST POSTS</h5>
                    </div>
                </div>
                <div class="row border-bottom" v-for="latestPost in latestPosts" :key="latestPost.id">
                    <div class="col-md-6 mt-2 mb-2">
                        <img :src="`http://127.0.0.1:8000/storage/img/posts/${latestPost.image}`" width="100px" height="100px"
                            alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">{{ latestPost.description }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 mt-3">
                        <h5>CATEGORIES</h5>
                        <div class="row mt-3 border-bottom">
                            <div class="col-md-6">
                                <a href="../category/_id" class="ml-2 text-secondary">Technology</a>
                            </div>
                            <div class="col-md-6 mt-2 text-right">
                                <p class="ml-4 text-secondary">10</p>
                            </div>
                        </div>
                        <div class="row border-bottom">
                            <div class="col-md-6 mt-2">
                                <a href="../category/_id" class="ml-2 text-secondary">Travel&Tour</a>
                            </div>
                            <div class="col-md-6 mt-2 text-right">
                                <p class="ml-4 text-secondary">10</p>
                            </div>
                        </div>

                        <div class="row border-bottom">
                            <div class="col-md-6 mt-2">
                                <a href="../category/_id" class="ml-2 text-secondary">Restaurant</a>
                            </div>
                            <div class="col-md-6 mt-2 text-right">
                                <p class="ml-4 text-secondary">10</p>
                            </div>
                        </div>

                        <div class="row border-bottom">
                            <div class="col-md-6 mt-2">
                                <a href="../category/_id" class="ml-2 text-secondary">Property</a>
                            </div>
                            <div class="col-md-6 mt-2 text-right">
                                <p class="ml-4 text-secondary">10</p>
                            </div>
                        </div>

                        <div class="row border-bottom">
                            <div class="col-md-6 mt-2">
                                <a href="../category/_id" class="ml-2 text-secondary">Car Rental Services</a>
                            </div>
                            <div class="col-md-6 mt-2 text-right">
                                <p class="ml-4 text-secondary">10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    head: {
        title: "Post Details",
    },
    data() {
        return {
            posts: {
                categories: {},
            },
            relatedPost: [],
            latestPosts: [],
        };
    },
    mounted() {
        this.getPost();
        this.getLatestPosts();
    },
    methods: {
        async getPost() {
            await this.$axios
                .$get(`http://127.0.0.1:8000/api/posts/show/${this.$route.params.id}`)
                .then((res) => {
                    console.log(res?.categories);
                    this.posts = res.posts;
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
    },
};
</script>