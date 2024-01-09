<template>
    <ContainerLayout :loading="loading">
        <div class="content">
            <div class="row mx-0">
                <div class="col-lg-12">
                    //
                </div>
            </div>
        </div>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from "../ContainerLayout.vue";
import fishSizes from '@/assets/json/fishSizes.json';
import fishColors from '@/assets/json/fishColors.json';

export default {
    name: "HomeIndex",
    components: {
        ContainerLayout,
    },
    computed: {
        //savedSessions is array of objects of initialSession
        savedSessions() {
            return localStorage.getItem('savedSessions') ? JSON.parse(localStorage.getItem('savedSessions')) : null;
        },
    },
    data() {
        return {
            loading: false,
            forecastData: {
                sizes: {},
                colors: {}
            },
            forecastString: '',
            initialSession: {
                id: '',
                name: '',
                gold: 100,
                pole: null,
                baits: [],
                baitsCount: 0,
                fish: [],
                fishCount: 0,
                fishValue: 0,
                status: 'draw', // draw, win, lose
                date: '',
            }
        };
    },
    setup() {
        //
    },
    created() {
        this.generateRandomForecast();
    },
    methods: {
        clearData() {
            localStorage.clear();
        },

        generateRandomForecast() {
            fishSizes.sizes.forEach(size => {
                this.forecastData.sizes[size["id"]] = Math.floor(Math.random() * 10) + 1;
            });

            let remainingPercentage = 100;
            fishColors.colors.forEach((color, index) => {
                if (index === fishColors.colors.length - 1) {
                    this.forecastData.colors[color["id"]] = remainingPercentage;
                } else {
                    let colorPercentage = Math.floor(Math.random() * (remainingPercentage + 1));
                    this.forecastData.colors[color["id"]] = colorPercentage;
                    remainingPercentage -= colorPercentage;
                }
            });

            this.formatForecastString();
        },

        formatForecastString() {
            let sizesString = Object.entries(this.forecastData.sizes)
                .map(([size, count]) => `${count} ${size} fish`)
                .join(', ');

            let colorsString = Object.entries(this.forecastData.colors)
                .map(([color, percentage]) => `${percentage}% of the fish are ${color}`)
                .join(', ');

            this.forecastString = `Today, we are seeing ${sizesString}. ${colorsString}.`;
            // this.$vueAlert.alert(this.forecastString, null, null);
        }
    },
};
</script>

<style scoped>
/*  */
</style>