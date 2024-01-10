<template>
    <ContainerLayout :loading="loading">
        <div class="content">
            <div class="row mx-0">
                <div class="col-lg-4">
                    <div class="card m-1" style="background-color: #F7F7F7; !important;">
                        <div class="py-2 px-1">
                            <div class="row mx-0">
                                <div class="col-12">
                                    <div class="card my-1" style="box-shadow: none !important;">
                                        <div class="p-2">
                                            <div class="d-flex flex-column">
                                                <small class="mb-2 d-flex justify-content-center font-weight-bold">
                                                    Today's Forecast
                                                </small>
                                                <div class="w-100 row mx-0">
                                                    <div class="col-12">
                                                        <div class="d-flex flex-column align-items-center text-center">
                                                            <small class="my-1">{{ forecastString }}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="card my-1" style="box-shadow: none !important;">
                                        <div class="p-2">
                                            <div class="d-flex flex-column">
                                                <small class="mb-2 d-flex justify-content-center font-weight-bold">
                                                    Leaderboard
                                                </small>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center">Rank</th>
                                                            <th class="text-center">Name</th>
                                                            <th class="text-center">Gold</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(session, index) in leaderboard" :key="index">
                                                            <td class="text-center">{{ index + 1 }}</td>
                                                            <td class="text-center">{{ session.name }}</td>
                                                            <td class="text-center">{{ session.gold }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <button class="btn btn-sm btn-outline-danger" @click="clearData">
                                            Clear Data
                                        </button>
                                        <div class="ml-auto">
                                            <button class="btn btn-sm btn-secondary" @click="viewLeaderboard">
                                                View All
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card m-1">
                        //
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card m-1" style="background-color: #F7F7F7; !important;">
                        <div class="py-2 px-1">
                            <div class="row mx-0">
                                <div class="col-lg-6 col-md-6">
                                    <div class="card my-1" style="!important; box-shadow: none !important;">
                                        <div class="p-2">
                                            <div class="d-flex flex-column justify-content-center align-items-center">
                                                <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                                    Gear
                                                </small>
                                                <div class="w-100 row mx-0">
                                                    <div class="col-6">
                                                        <div class="d-flex flex-column align-items-center text-center">
                                                            <font-awesome-icon icon="coins" class="text-dark" />
                                                            <small class="my-1">Gold</small>
                                                            <small id="gold" class="font-weight-bold">{{
                                                                initialSession.gold
                                                            }}</small>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="d-flex flex-column align-items-center text-center">
                                                            <font-awesome-icon icon="toolbox" class="text-dark" />
                                                            <small class="my-1">Fishing Pole</small>
                                                            <small id="pole" class="font-weight-bold">
                                                                {{ initialSession.pole ? initialSession.pole.name : '-'
                                                                }}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="card my-1" style="!important; box-shadow: none !important;">
                                        <div class="p-2">
                                            <div class="d-flex flex-column">
                                                <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                                    Bait
                                                </small>
                                                <div class="w-100 row mx-0 d-flex justify-content-center">
                                                    <div v-for="(color, index) in fishColors.colors" :key="index"
                                                        class="col-lg-3 col-4">
                                                        <div class="d-flex flex-column align-items-center text-center">
                                                            <font-awesome-icon icon="shrimp"
                                                                :style="{ color: color.hex }" />
                                                            <small class="my-1">{{ color.name }}</small>
                                                            <small class="font-weight-bold">
                                                                {{ initialSession.baits.filter(bait => bait.id ===
                                                                    color.id).length
                                                                }}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template v-slot:bottom-bar>
            <div class="w-100 card-footer" style="border-radius: 26px 26px 0 0 !important;">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="d-flex align-items-center text-center mr-3">
                        <font-awesome-icon icon="fish" class="text-secondary" style="margin-top: 2.5px;" />
                    </div>
                    <div class="d-flex align-items-center text-center mr-3">
                        <small>Caught Fish</small>
                        <small class="mx-1">:</small>
                        <small id="fish" class="font-weight-bold">{{ initialSession.fishCount }}</small>
                    </div>
                    <div class="d-flex align-items-center text-center mr-3">
                        <small class="my-1">Total Gold</small>
                        <small class="mx-1">:</small>
                        <small id="fish" class="font-weight-bold">{{ initialSession.goldResult }}</small>
                    </div>
                    <div class="d-flex align-items-center text-center">
                        <button class="btn btn-sm btn-secondary" @click="fishList">Detail</button>
                    </div>
                </div>
            </div>
            <div class="w-100 d-flex flex-column card-footer" style="background-color: #9EA4A9;">
                <div class="row">
                    <div class="col-4 my-1">
                        <button class="btn btn-white w-100" @click="skipDay">Skip Day</button>
                    </div>
                    <div class="col-8 my-1">
                        <button class="btn btn-main w-100" @click="startNow">Fish Now</button>
                    </div>
                </div>
            </div>
        </template>

        <div v-if="isModalOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container modal-wide" ref="target">
                    <!-- <div class="modal-header">
                    </div> -->
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                Your Fish
                            </small>
                            <div v-for="(color, index) in fishColors.colors" :key="index"
                                class="w-100 row mx-0 mb-3 d-flex justify-content-center">
                                <div v-for="(size, index2) in fishSizes.sizes" :key="index2" class="col-4">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <font-awesome-icon icon="fish" :style="{ color: color.hex }" />
                                        <small class="my-1">{{ size.name }} {{ color.name }}</small>
                                        <small class="font-weight-bold">
                                            {{ fishCount(color.id, size.id) }}
                                            <span v-if="fishValue(color.id, size.id) > 0">
                                                ({{ fishValue(color.id, size.id) }} Gold)
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                    </div> -->
                </div>
            </div>
        </div>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from "../ContainerLayout.vue";
import screenSize from "@/plugins/screen-size";
import fishSizes from '@/assets/json/fishSizes.json';
import fishColors from '@/assets/json/fishColors.json';
// import fishPrizes from '@/assets/json/fishPrizes.json';
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
    name: "HomeIndex",
    components: {
        ContainerLayout,
    },
    computed: {
        //savedSessions is array of objects of initialSession
    },
    data() {
        return {
            loading: false,
            savedSessions: localStorage.getItem('savedSessions') ? JSON.parse(localStorage.getItem('savedSessions')) : null,
            fishSizes: fishSizes,
            fishColors: fishColors,
            // fishPrizes: fishPrizes,
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
                goldResult: 100, // gold + fishValue
                status: 'draft', // draw, win, lose, draft
                date: '',
            },
            leaderboard: [],
        };
    },
    setup() {
        const screen = () => {
            return screenSize.size;
        };

        const isModalOpen = ref(false);
        const openModal = () => isModalOpen.value = true;
        const closeModal = () => isModalOpen.value = false;

        const target = ref(null);
        onClickOutside(target, () => closeModal());

        return {
            screen,
            isModalOpen,
            target,
            openModal,
            closeModal,
        };
    },
    created() {
        this.generateRandomForecast();
        this.topFiveLeaderboard();

        if (this.savedSessions && this.savedSessions.length > 0) {
            let lastSession = this.savedSessions[this.savedSessions.length - 1];
            if (lastSession.status === 'draft') {
                this.initialSession = lastSession;
            }
        }
    },
    methods: {
        clearData() {
            this.$vueAlert.fire({
                title: null,
                text: 'Are you sure want to clear all data?',
                type: 'question',
                showConfirmButton: true,
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Clear Data',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#275D93',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-main',
                    cancelButton: 'btn btn-outline-main mr-2',
                },
            }).then((result) => {
                if (result.value) {
                    localStorage.removeItem('savedSessions');
                    this.savedSessions = null;
                    this.resetInitialSession();
                    this.topFiveLeaderboard();
                    this.$vueAlert.alert('Data cleared successfully', null, 'success');
                }
            });
        },

        fishList() {
            this.isModalOpen = true;
        },

        //inside initialSession.fish is array of {size_id: 'small', color_id: 'blue', prize: 5}
        //each fish has prize, so we need to sum all prize
        //create const with parameter color and size to filter initialSession.fish : fishCount(color, size)
        //create const with parameter color and size to sum all prize : fishValue(color, size)

        fishCount(color, size) {
            return this.initialSession.fish.filter(fish => fish.color_id === color.id && fish.size_id === size.id).length;
        },

        fishValue(color, size) {
            let fish = this.initialSession.fish.filter(fish => fish.color_id === color.id && fish.size_id === size.id);
            let total = 0;
            fish.forEach(f => {
                total += f.prize;
            });
            return total;
        },

        topFiveLeaderboard() {
            let winSessions = this.savedSessions ? this.savedSessions.filter(session => session.status === 'win') : [];
            let topFive = winSessions.sort((a, b) => b.gold - a.gold).slice(0, 5);
            let fillCount = 5 - topFive.length;
            for (let i = 0; i < fillCount; i++) {
                topFive.push({
                    name: '-',
                    gold: '-'
                });
            }

            this.leaderboard = topFive;
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
        },

        resetInitialSession() {
            this.initialSession = {
                id: '',
                name: '',
                gold: 100,
                pole: null,
                baits: [],
                baitsCount: 0,
                fish: [],
                fishCount: 0,
                fishValue: 0,
                goldResult: 100, // gold + fishValue
                status: 'draft', // draw, win, lose, draft
                date: '',
            };
        },

        saveSession() {
            if (this.savedSessions) {
                this.savedSessions.push(this.initialSession);
                localStorage.setItem('savedSessions', JSON.stringify(this.savedSessions));
            } else {
                localStorage.setItem('savedSessions', JSON.stringify([this.initialSession]));
            }

            this.savedSessions = JSON.parse(localStorage.getItem('savedSessions'));
            this.resetInitialSession();
            this.topFiveLeaderboard();
        },

        skipDay() {
            this.resetInitialSession();
            this.initialSession.status = 'win';
            this.initialSession.date = new Date().toISOString().slice(0, 10);
            this.saveSession();
            this.$vueAlert.alert('Day skipped successfully', null, 'success');
        },
    }
};
</script>

<style scoped>
/*  */
</style>