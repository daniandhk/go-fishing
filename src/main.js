import { createApp } from "vue";
import App from "./App.vue";
import { Capacitor } from "@capacitor/core";
import router, { historyStack } from './router';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "./plugins/font-awesome";
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import i18n from './i18n';
import VueSimpleAlert from "vue3-simple-alert";
import 'sweetalert2/dist/sweetalert2.min.css';
import { encryptString, decryptString } from './encryption.js';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import CountryFlag from 'vue-country-flag-next';

// Custom CSS
import "./assets/css/custom.css";
import "./assets/css/badge-custom.css";

const app = createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(LoadingPlugin, {
        color: '#275D93',
    })
    .use(i18n)
    .use(VueSimpleAlert, {
        confirmButtonColor: '#275D93',
    })
    .use(FloatingVue)
    .component('CountryFlag', CountryFlag);

app.config.globalProperties.navigateBackOrHome = function () {
    const currentRoute = this.$route.fullPath;

    // Check if we can actually go back to a different page
    const lastVisitedRoute = historyStack.length > 1 ? historyStack[historyStack.length - 2] : null;

    if (lastVisitedRoute && lastVisitedRoute !== currentRoute) {
        this.$router.go(-1);  // Navigate back
    } else {
        this.$router.push({ name: 'Home' });  // Navigate to home
    }
};
app.config.globalProperties.appName = process.env.VUE_APP_NAME || 'Go Fishing';
app.config.globalProperties.$isCapacitor = () => {
    return typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
};
app.config.globalProperties.$vueAlert = VueSimpleAlert;
app.config.globalProperties.$encryptString = encryptString;
app.config.globalProperties.$decryptString = decryptString;

app.mount("#app");
