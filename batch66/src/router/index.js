

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customer/CustomerList.vue";
import UserList from "../pages/user/UserList.vue";
import CreateCustomer from "../pages/customer/CreateCustomer.vue";
import EditCustomer from "../pages/customer/EditCustomer.vue";
import ProductsList from "../pages/product/ProductsList.vue";



const routes=[
    {path:"/", component:Dashboard},
    {path:"/role", component:RoleList},
    {path:"/role/create", component:CreateRole},
    {path:"/role/edit/:id", component:EditRole},



    {path:"/customers", component:CustomerList},
    {path:"/customers/create", component:CreateCustomer},
    {path:"/customers/edit/:id", component:EditCustomer},



    {path:"/user", component:UserList},




     {path:"/products", component:ProductsList},
   









]




export const router = createRouter({
    history:createWebHistory(),
    routes
});