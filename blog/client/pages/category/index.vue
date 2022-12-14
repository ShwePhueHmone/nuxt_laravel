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
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="form" @submit.prevent="saveOrUpdate">
                  <div class="mb-3">
                    <label for="name" class="col-form-label">Name:</label>
                    <input class="form-control" type="text" name="name" v-model="category.name" id="name"
                      placeholder="Enter name" />
                    <div class="text-danger" v-if="Error">{{ Error[0] }}</div>
                  </div>

                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">
                      <font-awesome-icon :icon="['fas', 'floppy-disk']" />
                      Save
                    </button>
                    <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Search-->
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
      <div class="col-md-12">
        <b-table striped hover id="my-table" small :fields="fields" :items="categories" :per-page="perPage" :current-page="currentPage">
          <template #cell(actions)="{ item }">
            <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#categoryModal"
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
        <p v-if="rows == 0 && keyword != ''" class="text-danger text-center">
          No category here!
        </p>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" :current-page="currentPage"
          aria-controls="my-table" v-if="rows > 5"></b-pagination>
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
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "created_at", label: "Date" },
        "Actions",
      ],
      isEditMode: false,
      category: {
        id: "",
        name: "",
      },
      categories: [],
      Error: "",
      errors: null,
      keyword: "",
    };
  },
  methods: {
    rows() {
      return this.categories.length;
    },
    search() {
      this.getCategories();
    },
    async getCategories() {
      await this.$axios
        .$get("/api/category?search=" + this.keyword)
        .then((res) => {
          this.categories = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    saveOrUpdate() {
      this.isEditMode ? this.update() : this.create();
    },
    async create() {
      this.isEditMode = false;
      await this.$axios
        .$post("/api/category", this.category)
        .then(async (res) => {
          this.categories.unshift(res.data);
          this.category.name = "";
          this.closeModalBox()
          form.reset()
          Toast.fire({
            icon: "success",
            title: "Created Successfully!",
          });
        })
        .catch((error) => {
          this.Error = error.response.data.errors.name;
        });
    },
    async update() {
      await this.$axios
        .$put(`api/category/${this.category.id}`, this.category)
        .then(async (res) => {
          this.closeModalBox()
          form.reset()
          Toast.fire({
            icon: "success",
            title: "Updated Successfully!",
          });
        })
        .catch((error) => {
          this.Error = error.response.data.errors.name;
        });
    },
    editForm(items) {
      this.isEditMode = true;
      this.category = items;
    },
    closeModalBox() {
      var modalEL = document.getElementById('categoryModal');
      var modal = bootstrap.Modal.getInstance(modalEL)
      modal.hide();
    },
    clear() {

    },
    async destroy(category) {
      if (confirm("Are you sure you want to delete?"))
        await this.$axios
          .delete(`api/category/${category.id}`)
          .then(async () => {
            this.categories = this.categories.filter((item) => {
              return item.id !== category.id;
            });
            Toast.fire({
              icon: "warning",
              title: "Deleted Successfully!",
            });
          });
    }
  },
  async fetch() {
    this.categories = await fetch("http://127.0.0.1:8000/api/category").then((res) =>
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