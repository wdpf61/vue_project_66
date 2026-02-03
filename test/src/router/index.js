import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customers/CustomerList.vue";
import CreateCustomer from "../pages/customers/CreateCustomer.vue";
import EditCustomer from "../pages/customers/EditCustomer.vue";
import Products from "../pages/product/Products.vue";



const routes=[
    {path:"/", component:Dashboard},
    {path:"/role", component:RoleList},
    {path:"/role/create", component:CreateRole},
    {path:"/role/edit/:id", component:EditRole},

    {path:"/customers", component:CustomerList},
    {path:"/customers/create", component:CreateCustomer},
    {path:"/customers/edit/:id", component:EditCustomer},


    {path:"/products", component:Products},


]


export const router = createRouter({
    history:createWebHistory(),
    routes
});