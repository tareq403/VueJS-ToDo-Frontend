<template>
    <div class="col align-self-center">
        <h3 class="pb-5 text-center underline">Create new Todo</h3>
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
                    @click="addToDo()"
                />
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreateToDo",
        data() {
            return {
                name: "",
                details: ""
            }
        },
        methods: {
            addToDo() {
                let todo = {
                    name: this.name,
                    "details": this.details,
                    done: false
                };
                this.$http
                    .post("/", todo)
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