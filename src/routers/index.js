import Router from "vue-router";
import ListToDo from "../components/ListToDo";
import CreateToDo from "../components/CreateToDo";
import EditToDo from "../components/EditToDo";

export default new Router({
    routes: [
        {
            path: "/",
            name: "ListToDo",
            component: ListToDo
        },
        {
            path: "/create",
            name: "CreateToDo",
            component: CreateToDo
        },
        {
            path: "/update/:id",
            name: "EditToDo",
            component: EditToDo
        }
    ]
});