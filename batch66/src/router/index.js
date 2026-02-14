import { createRouter, createWebHistory } from "vue-router";
import Main from "../layouts/Main.vue";
import LoginTemplate from "../layouts/LoginTemplate.vue";
import Login from "../login/Login.vue";
import Logout from "../login/Logout.vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customer/CustomerList.vue";
import CreateCustomer from "../pages/customer/CreateCustomer.vue";
import EditCustomer from "../pages/customer/EditCustomer.vue";
import UserList from "../pages/user/UserList.vue";
import ProductsList from "../pages/product/ProductsCard.vue";
import Auth from "../services/auth";

const routes = [
  {
    path: "/login",
    component: LoginTemplate,
    children: [{ path: "", name: "login", component: Login, meta: { guest: true } }],
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    component: Main,
    meta: { requiresAuth: true },
    children: [
      { path: "", component: Dashboard },
      { path: "role", component: RoleList },
      { path: "role/create", component: CreateRole },
      { path: "role/edit/:id", component: EditRole },
      { path: "customers", component: CustomerList },
      { path: "customers/create", component: CreateCustomer },
      { path: "customers/edit/:id", component: EditCustomer },
      { path: "user", component: UserList },
      { path: "products", component: ProductsList },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = Auth.isAuthenticated();

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    return next("/login");
  }

  if (to.matched.some((record) => record.meta.guest) && loggedIn) {
    return next("/");
  }

  return next();
});
