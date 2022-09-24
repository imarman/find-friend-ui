import * as VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Teams from "@/pages/Teams.vue";
import User from "@/pages/User.vue";
import Search from "@/pages/Search.vue";
import UserEditPage from "@/pages/UserEditPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/teams", component: Teams },
  { path: "/user", component: User },
  { path: "/search", component: Search },
  { path: "/user/edit", component: UserEditPage },
];

const router: VueRouter.Router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
