<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8">
                <div class="card mb-4 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        class="img-fluid" alt="post image" height="50%">
                    <div class="card-body">
                        <h6 class="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                            ullamco
                        </h6>
                        <div class="row">
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3">
                                    <font-awesome-icon :icon="['fas', 'clock']" />
                                    Dec 6 2022
                                </p>
                            </div>
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3">
                                    <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                                </p>
                            </div>
                            <div class="col-md-4">
                                <p class="ml-2 text-secondary mt-3">
                                    <font-awesome-icon :icon="['fas', 'folder']" />
                                    Technology
                                </p>
                            </div>
                        </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                            ullamco
                        </p>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-12">
                        <h6 class="mt-3">RELATED POSTS</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            class="img-fluid" alt="post image">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </p>
                    </div>
                    <div class="col-md-4 mt-3">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            class="img-fluid" alt="post image">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </p>
                    </div>
                    <div class="col-md-4 mt-3">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            class="img-fluid" alt="post image">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </p>
                    </div>
                </div>

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
                <div class="row">
                    <div class="col-md-6">
                        <h5>LATEST POSTS</h5>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-6 mt-2">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            width="50px" height="50px" alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">Lorem ipsum dolor sit amet, ea legere sententiae scriptorem quo,
                        </p>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-6 mt-2">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            width="50px" height="50px" alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">Lorem ipsum dolor sit amet, ea legere sententiae scriptorem quo,
                        </p>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-6 mt-2">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            width="50px" height="50px" alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">Lorem ipsum dolor sit amet, ea legere sententiae scriptorem quo,
                        </p>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-6 mt-2">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            width="50px" height="50px" alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">Lorem ipsum dolor sit amet, ea legere sententiae scriptorem quo,
                        </p>
                    </div>
                </div>
                <div class="row border-bottom">
                    <div class="col-md-6 mt-2">
                        <img src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            width="50px" height="50px" alt="post image">
                    </div>
                    <div class="col-md-6 mt-2 ">
                        <p class="ml-4 text-secondary">Lorem ipsum dolor sit amet, ea legere sententiae scriptorem quo,
                        </p>
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
export default {}
</script>