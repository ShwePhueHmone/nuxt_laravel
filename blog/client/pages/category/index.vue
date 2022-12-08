<template>
    <div class="container">
        <h5 class="mt-3">Category Lists</h5>
        <div class="row">
            <div class="col-md-6 mt-3">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    Create
                    <font-awesome-icon :icon="['fas', 'square-plus']" />
                </button>
                <!-- Modal -->
                <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="categoryModalLabel">
                                    {{ !isEditMode ? "Create Category" : "Edit Category" }}
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="import-form">
                                    <div class="mb-3">
                                        <label for="name" class="col-form-label">Name:</label>
                                        <input class="form-control" type="text" name="name" id="name"
                                            placeholder="Enter name" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">
                                    <font-awesome-icon :icon="['fas', 'floppy-disk']" />
                                    Save
                                </button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
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
                                <font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-12">
                <b-table id="my-table" small :fields="fields" :items="categories">
          <template #cell(actions)>
            <button class="btn btn-success btn-sm">
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
              Edit
            </button>
            <button class="btn btn-danger btn-sm">
              <font-awesome-icon :icon="['fas', 'trash']" />
              Delete
            </button>
          </template>
        </b-table>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        "id",
        { key: "id", label: "id" },
        "name",
        { key: "name", label: "name" },
        { key: "date", label: "Date" },
        "Actions",
      ],
      isEditMode: false,
      category: {
        id: "",
        name: "",
      },
      categories: [],
    //   Error: "",
    //   errors: null,
    //   keyword: "",
    };
  },
  methods: {
    // rows() {
    //   return this.categories.length;
    // },
    async getCategories() {
      await this.$axios
        .$get("http://localhost:8000/api/category")
        .then((res) => {
          this.categories = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    
     },
  async fetch() {
    this.categories = await fetch("http://localhost:8000/api/category").then((res) =>
      res.json()
    );
  },
  computed: {
    rows() {
      return this.categories.length;
    },
  },
    
}
</script>