<template>
  <div class="container">
    <h5 class="mt-3">Post Lists</h5>
    <div class="row">
      <div class="col-md-6">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#postModal"
        >
          Create
          <font-awesome-icon :icon="['fas', 'square-plus']" />
        </button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="postModal"
          tabindex="-1"
          aria-labelledby="postModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="postModalLabel">
                  {{ !isEditMode ? "Create Post" : "Edit Post" }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="form">
                  <div class="mb-3">
                    <label for="title" class="col-form-label">Title:</label>
                    <input
                      class="form-control"
                      type="text"
                      name="tilte"
                      id="title"
                      placeholder="Enter title"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="file" class="col-form-label">Image:</label>
                    <input class="form-control" type="file" name="file" id="file" />
                  </div>
                  <div class="mb-3">
                    <label for="description" class="col-form-label">Description:</label>
                    <input
                      class="form-control"
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter description"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  <font-awesome-icon :icon="['fas', 'floppy-disk']" />
                  Save
                </button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
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
      </div>
      <div class="col-md-12">
        <b-table striped hover id="my-table" small :fields="fields" :items="categories">
          <template #cell(actions)="{ item }">
            <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#postModal"
              @click="editForm(item)">
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
              Edit
            </button>
            <button class="btn btn-danger btn-sm" @click="destroy(item)">
              <font-awesome-icon :icon="['fas', 'trash']" />
              Delete
            </button>
          </template>
        </b-table>
        <div class="overflow-auto">
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
          </b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
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
      perPage: 5,
      currentPage: 1,
      fields: [
        "id",
        { key: "id", label: "id" },
        "image",
        { key: "image", label: "image" },
        "title",
        { key: "title", label: "title" },
        "description",
        { key: "description", label: "description" },
        "Actions",
      ],
      post: {
        id: null,
        image: "",
        title: "",
        description:"",
      },
      posts: {},
      errors: null
    };
  },
};
</script>
