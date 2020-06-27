<template>
    <div class="container" id="app">
        <div class="row vertical-center justify-content-center mt-50">
            <div class="col-md-6 mx-auto">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
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

    .form-control {
        margin-bottom: 10px;
    }
</style>
