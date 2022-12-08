<template>
    <div class="container">
        <h5 class="mt-3">Post Lists</h5>
        <div class="row">
            <div class="col-md-6">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModal">
                    Create
                    <font-awesome-icon :icon="['fas', 'square-plus']" />
                </button>
                <!-- Modal -->
                <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="postModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="postModalLabel">
                                    {{ !isEditMode ? "Create Post" : "Edit Post" }}
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="import-form">
                                    <div class="mb-3">
                                        <label for="title" class="col-form-label">Title:</label>
                                        <input class="form-control" type="text" name="tilte" id="title"
                                            placeholder="Enter title" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="file" class="col-form-label">Image:</label>
                                        <input class="form-control" type="file" name="file" id="file" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="col-form-label">Description:</label>
                                        <input class="form-control" type="text" name="description" id="description"
                                            placeholder="Enter description" />
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
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Dec 12,2022</td>
                            <td>
                                <button class="btn btn-success btn-sm" @click="edit">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Dec 12,2022</td>
                            <td>
                                <button class="btn btn-success btn-sm">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>dolor sit amet</td>
                            <td>Dec 12,2022</td>
                            <td>
                                <button class="btn btn-success btn-sm">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Lorem ipsum </td>
                            <td>Dec 12,2022</td>
                            <td>
                                <button class="btn btn-success btn-sm">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>Dec 12,2022</td>
                            <td>
                                <button class="btn btn-success btn-sm">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        create() {

        },
        cancel() {

        },
    }
}
</script>