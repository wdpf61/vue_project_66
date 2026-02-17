import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customers/CustomerList.vue";
import CreateCustomer from "../pages/customers/CreateCustomer.vue";
import EditCustomer from "../pages/customers/EditCustomer.vue";
import Products from "../pages/product/Products.vue";
import City from "../pages/city/City.vue";
import DistrictList from "../pages/city/DistrictList.vue";
import Parent from "../pages/emit/Parent.vue";
import Main from "../layouts/Main.vue";
import Login from "../pages/login/Login.vue";
import LoginTemplate from "../layouts/LoginTemplate.vue";
import Register from "../pages/login/Register.vue";
import Auth from "../services/auth";
import TypeScript from "../typescript/TypeScript.vue";
import DistrictsList from "../pages/district/DistrictsList.vue";
import EditDistrict from "../pages/district/EditDistrict.vue";
import CreateDistrict from "../pages/district/createDistrict.vue";

const routes = [
  {
    path: "/login",
    component: LoginTemplate,
    children: [
      { path: "/login", component: Login },
      { path: "/register", component: Register },
    ],
  },

  {
    path: "/",
    component: Main,
    children: [
      { path: "/", component: Dashboard, meta: { requiresAuth: true } },
      { path: "/role", component: RoleList, meta: { guest: true } },
      { path: "/role/create", component: CreateRole },
      { path: "/role/edit/:id", component: EditRole },

      { path: "/customers", component: CustomerList },
      { path: "/customers/create", component: CreateCustomer },
      { path: "/customers/edit/:id", component: EditCustomer },

      { path: "/products", component: Products },
      { path: "/city", component: City },

      { path: "/district", component: DistrictsList },
       { path: "/district/edit/:id", component: EditDistrict },
        { path: "/district/create", component: CreateDistrict },

      { path: "/emit", component: Parent },
      { path: "/type", component: TypeScript },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next)=>{

  const logged = Auth.isAuthenticated();

  if(to.meta.requiresAuth && !logged){
    return next("/login");
  }

  if(to.meta.guest && logged){
    return next("/");
  }

  next();

  
});
