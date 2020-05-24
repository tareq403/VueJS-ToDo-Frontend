<template>
  <div class="container" id="app">
    <div class="row vertical-center justify-content-center mt-50">
      <div class="col-md-6 mx-auto">
        <CreateToDo/>
        <ListToDo/>
      </div>
    </div>
  </div>
</template>

<script>
import CreateToDo from "./components/CreateToDo"
import ListToDo from "./components/ListToDo";

export default {
  name: 'App',
  components: {
    CreateToDo, ListToDo
  }
}
</script>

<style lang="scss">
  @import "node_modules/bootstrap/scss/bootstrap";
  @import "node_modules/bootstrap-vue/src/index.scss";

  .vertical-center {
    min-height: 100%;
    display: flex;
    align-items: center;
  }

  .todo_row {
    width: 400px;
  }
</style>
