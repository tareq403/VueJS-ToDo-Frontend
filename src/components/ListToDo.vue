<template>
    <div v-show="toDos.length>0" class="col align-self-center">
        <h3 class="pb-5 text-center underline">My Todo List</h3>
        <div class="form-row align-items-center" v-for="toDo in toDos" v-bind:key="toDo.id">
            <div class="col-auto my-1">
                <div class="input-group mb-3 todo_row">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <input
                                    type="checkbox"
                                    v-model="toDo.done"
                                    :checked="toDo.done"
                                    :value="toDo.done"
                                    v-on:change="updateToDo(toDo)"
                                    title="Mark as done?"
                            />
                        </span>
                    </div>
                    <input
                            type="text"
                            class="form-control"
                            :class="toDo.done?'todo_done':''"
                            v-model="toDo.name"
                            @click="toDo.done?'':editToDo(toDo)"
                            @keypress="toDo.editing=true"
                            @keyup.enter="updateToDo(toDo)"
                    />
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span
                                    class="input-group-addon addon-left"
                                    title="Delete Todo?"
                                    v-on:click="deleteToDo(toDo.id)"
                            >
                                X
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/create">Create New</router-link>
    </div>
</template>

<script>
    import bus from "../bus";

    export default {
        name: "ListToDo",
        data() {
            return {
                toDos: [],
                doneLoading: false
            }
        },
        created: function () {
            this.fetchToDo();
            this.listenToEvents();
        },
        watch: {
            $route: function () {
                let self = this;
                self.doneLoading = false;
                self.fetchToDo().then(() => {
                    self.doneLoading = true;
                })
            }
        },
        methods: {
            fetchToDo() {
                this.$http.get("/").then(response => {
                    this.toDos = response.data;
                })
            },
            editToDo(todo) {
                let id = todo.id;
                this.$router.push({name: "EditToDo", params: {id: id}});
            },
            updateToDo(todo) {
                let id = todo.id;
                this.$http.put(`/${id}`, todo).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
            },
            deleteToDo(id) {
                this.$http.delete(`/${id}`).then(() => {
                    this.fetchToDo();
                }).catch(error => {
                    console.log(error);
                })
            },
            listenToEvents() {
                bus.$on("refreshToDo", () => {
                    this.fetchToDo();
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .todo_done {
        text-decoration: line-through !important;
    }

    .no_border_left_right {
        border-left: 0px;
        border-right: 0px;
    }

    .flat_form {
        border-radius: 0px;
    }

    .mrb-10 {
        margin-bottom: 10px;
    }

    .addon-left {
        background-color: none !important;
        border-left: 0px !important;
        cursor: pointer !important;
    }

    .addon-right {
        background-color: none !important;
        border-right: 0px !important;
    }

    .underline {
        text-decoration: underline;
    }
</style>