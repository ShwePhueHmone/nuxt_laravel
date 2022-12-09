<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mt-5">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="card-img-top" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6 mt-3">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
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
                  Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  <nuxt-link :to="`./post/_id`" class="text-white">
                    Read More
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="img-fluid" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
                </p>
              </div>
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'folder']" />
                  Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mt-5 left-blog">
        <form>
          <div class="input-group">
            <input type="text" placeholder="search" class="form-control" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary mb-3 justify-content-end">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-md-6 mb-2">
            <h5>LATEST POSTS</h5>
          </div>
        </div>
        <div class="row border-bottom">
          <div class="col-md-12">
            <div class="float-left mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                width="50px" height="50px" />
            </div>
            <div class="float-right">Lorem ipsum</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="float-left mt-2 mb-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                width="50px" height="50px" />
            </div>
            <div class="float-right">Lorem ipsum</div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-12">
            <div class="float-left mb-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                width="50px" height="50px" />
            </div>
            <div class="float-right">Lorem ipsum</div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-12">
            <div class="float-left mb-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                width="50px" height="50px" />
            </div>
            <div class="float-right">Lorem ipsum</div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-12">
            <div class="float-left mb-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                width="50px" height="50px" />
            </div>
            <div class="float-right">Lorem ipsum</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="img-fluid" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
                </p>
              </div>
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'folder']" />Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="img-fluid" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
                </p>
              </div>
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'folder']" />Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h5>CATEGORIES</h5>
        <div class="row border-bottom">
          <div class="col-md-6">
            <a href="./category/_id" class="ml-2 text-secondary"> Technology</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>

        <div class="row border-bottom">
          <div class="col-md-6 mt-2">
            <a href="./category/_id" class="ml-2 text-secondary">Travel&Tour</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>

        <div class="row border-bottom">
          <div class="col-md-6 mt-2">
            <a href="./category/_id" class="ml-2 text-secondary">Restaurant</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>

        <div class="row border-bottom">
          <div class="col-md-6 mt-2">
            <a href="./category/_id" class="ml-2 text-secondary">Property</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>

        <div class="row border-bottom">
          <div class="col-md-6 mt-2">
            <a href="./category/_id" class="ml-2 text-secondary">Car Rental Services</a>
          </div>
          <div class="col-md-6 mt-2 text-right">
            <p class="ml-4 text-secondary">10</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="img-fluid" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
                </p>
              </div>
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'folder']" />Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1661918785233-f8d5c8d0f03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="img-fluid" alt="post image" height="50%" />
          <div class="card-body">
            <h6 class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </h6>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                  Dec 6 2022
                </p>
              </div>
              <div class="col-md-6">
                <p class="ml-2 text-secondary mt-3">
                  <font-awesome-icon :icon="['fas', 'user']" />Mg Mg
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p class="ml-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'folder']" />Technology
                </p>
              </div>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
@import '../assets/css/main.css';
</style>
<script>
export default {
  name: "Home",
};
</script>
  