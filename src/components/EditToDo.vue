<template>
    <div class="col align-self-center">
        <h3 class="pb-5 text-center underline">Update Todo</h3>
        <form class="sign-in" @submit.prevent>
            <div class="form-group todo_row">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        v-model="name"
                />
                <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                ></textarea>
                <input
                        type="submit"
                        class="btn btn-primary"
                        value="Save Todo"
                        @click="updateToDo()"
                />
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "EditToDo",
        data() {
            return {
                id: "",
                name: "Loading...",
                details: "Loading...",
                done: false,
                doneLoading: false
            }
        },
        mounted() {
            console.log("Edit mounted.")
            this.id = this.$route.params.id;
            console.log("Id found: " + this.id);
            this.fetchToDo(this.id);
        },
        methods: {
            fetchToDo(id) {
                this.$http
                    .get(`/${id}`)
                    .then(response => {
                        this.name = response.data.name;
                        this.details = response.data.details;
                        this.done = response.data.done;
                        this.doneLoading = true;
                    })
            },
            updateToDo() {
                if (!this.doneLoading) {
                    return;
                }
                let todo = {
                    name: this.name,
                    details: this.details,
                    done: false
                };
                let id = this.id;
                this.$http
                    .put(`/${id}`, todo)
                    .then(() => {
                        this.goToList();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            goToList() {
                this.$router.push({name: "ListToDo"});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .underline {
        text-decoration: underline;
    }
</style>