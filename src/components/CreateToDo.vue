<template>
    <div class="col align-self-center">
        <h3 class="pb-5 text-left underline">Create ToDo</h3>
        <form class="sign-in" @submit.prevent>
            <div class="form-group todo_row">
                <input
                        type="text"
                        class="form-control"
                        placeholder="What is in your mind?"
                        v-model="name"
                        @keypress="typing=true"
                        @keyup.enter="addToDo($event)"
                />
                <small class="form-text text-muted" v-show="typing">Press 'Enter' to save.</small>
            </div>
        </form>
    </div>
</template>

<script>
    import bus from "../bus";

    export default {
        name: "CreateToDo",
        data() {
            return {
                name: "",
                typing: false
            }
        },
        methods: {
            addToDo(event) {
                if (event) event.preventDefault();
                let todo = {
                    name: this.name,
                    done: false
                };
                this.$http
                    .post("/", todo)
                    .then(response => {
                        this.clearToDo();
                        this.refreshToDo();
                        this.typing = false;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            clearToDo() {
                this.name = ""
            },
            refreshToDo() {
                bus.$emit("refreshToDo");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .underline {
        text-decoration: underline;
    }
</style>