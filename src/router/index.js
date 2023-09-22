import Vue from "vue";
import Router from "vue-router";

//Pages
import Layout from '@/views/layouts/Layout.vue';
import Home from '@/views/pages/Home.vue';
import About from "@/views/pages/About.vue";
import News from "@/views/pages/News.vue";
import Contact from "@/views/pages/Contact.vue";
import Service from '@/views/pages/Service.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "aboutus",
          name: "About",
          component: About,
        },
        {
          path: "news",
          name: "News",
          component: News,
        },
        {
          path: "service",
          name: "Service",
          component: Service,
        },
        {
          path: "contact",
          name: "Contact",
          component: Contact,
        },
      ],
    },
  ],
});

export default router;
