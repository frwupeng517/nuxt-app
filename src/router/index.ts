import { createRouter, createWebHashHistory } from "vue-router";
// 1. 定义路由组件
// import Home from "@/views/home/index.vue";
// import MyCenter from "@/views/my/index.vue";
const Home = () => import("@/views/home/index.vue");
const MyCenter = () => import("@/views/my/index.vue");

// 2. 定义一些路由
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // meta: {
    //   title: '',
    //   keepAlive: false,
    // }
  },
  {
    path: "/my",
    name: "MyCenter",
    component: MyCenter,
  },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  routes,
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
  history: createWebHashHistory(),
});

export default router;
