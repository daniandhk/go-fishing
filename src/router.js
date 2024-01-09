import { createWebHistory, createRouter } from "vue-router";
import i82n from './i18n';
import { Capacitor } from "@capacitor/core";
import { Keyboard } from '@capacitor/keyboard';
import Home from "./components/home/HomeIndex.vue";

export let historyStack = [];

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    historyStack.push(to.fullPath);

    if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
        Keyboard.hide();
    }

    let route_name = i82n.global.t(to.name);
    let app_name = process.env.VUE_APP_NAME || 'Go Fishing';
    document.title = route_name + ' | ' + app_name;
    to.meta.title = route_name;

    next();
});

export default router;