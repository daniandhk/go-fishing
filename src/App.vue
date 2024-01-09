<template>
    <div id="app" style="background-color:  #e9ecef;">
        <router-view />
    </div>
</template>

<script>
import { App as CapacitorApp } from '@capacitor/app';

export default {
    computed: {
        // 
    },
    methods: {
        // 
    },
    mounted() {
        CapacitorApp.addListener('backButton', () => {
            if (this.$route.path === '/' || this.$route.path === '/login') {
                CapacitorApp.exitApp();
            } else {
                this.$router.go(-1);
            }
        });
    },
    unmounted() {
        // Cleanup: remove event listener if needed
        CapacitorApp.removeAllListeners();
    },
};
</script>
