<template>
    <ContainerLayout :loading="loading">
        <div class="content">
            <div id="overlay">
                <div class="d-flex h-100">
                    <div class="m-auto rounded-circle p-1">
                        <img style="max-height: 250px;" src="@/assets/images/fishing.gif" />
                    </div>
                </div>
            </div>
            <div class="row mx-0">
                <div class="col-lg-4">
                    <div class="card m-1" style="background-color: #F7F7F7; !important;">
                        <div class="py-2 px-1">
                            <div class="row mx-0">
                                <div class="col-12">
                                    <div class="card my-1" style="box-shadow: none !important;">
                                        <div class="p-2">
                                            <div class="d-flex flex-column">
                                                <div class="w-100 row mx-0">
                                                    <div class="col-12">
                                                        <div class="d-flex flex-column">
                                                            <small class="my-1">Dani Andhika Permana</small>
                                                            <small class="my-1">daniandhika03@gmail.com</small>
                                                            <small class="my-1">
                                                                <a href="https://www.linkedin.com/in/daniandhika"
                                                                    target="_blank">
                                                                    https://www.linkedin.com/in/daniandhika
                                                                </a>
                                                            </small>
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
                                                            <th class="text-center">Gold Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(session, index) in topFiveLeaderboard" :key="index">
                                                            <td class="text-center">{{ index + 1 }}.</td>
                                                            <td class="text-center">{{ session.name ?? '-' }}</td>
                                                            <td class="text-center">{{ session.goldResult }}</td>
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
                                            <button class="btn btn-sm btn-secondary" @click="openModalLeaderboard">
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
                    <div id="card-fishing" class="card m-1"
                        style="background-color: #517F68; !important; border: 6px solid #3A3E4C !important;">
                        <div class="attention-text-container" @click="notClicked = false" v-if="notClicked">
                            <div class="attention-text" style="cursor: pointer;">
                                Click Here & Choose a Pond to Start Fishing!
                            </div>
                        </div>
                        <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                            <div class="w-100 pb-4 d-flex flex-column justify-content-center align-items-center">
                                <div tooltip="Choose me to try catching fish!" @click="selectPond"
                                    style="margin-left: -50px; cursor: pointer;">
                                    <img style="max-height: 170px;" src="@/assets/images/pond1.gif" />
                                </div>
                            </div>
                            <div class="w-100 pt-4 d-flex flex-column justify-content-center align-items-center">
                                <div tooltip="Choose me to try catching fish!" @click="selectPond"
                                    style="margin-left: 50px; cursor: pointer;">
                                    <img style="max-height: 170px; transform: scaleX(-1);"
                                        src="@/assets/images/pond1.gif" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="card-gear" class="row mx-0">
                <div class="col-lg-4">
                    <div class="card m-1">
                        <div class=" p-2">
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                    Gear
                                </small>
                                <div class="w-100 row mx-0">
                                    <div class="col-6">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <font-awesome-icon icon="coins" class="text-dark" />
                                            <small class="my-1">Starting Gold</small>
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
                <div class="col-lg-8">
                    <div class="card m-1">
                        <div class=" p-2">
                            <div class="d-flex flex-column">
                                <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                    Bait
                                </small>
                                <div class="w-100 row mx-0 d-flex justify-content-center">
                                    <div v-for="(color, index) in fishColors.colors" :key="index" class="col-lg-3 col-4">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <font-awesome-icon icon="shrimp" :style="{ color: color.hex }" />
                                            <small class="my-1">{{ color.name }} Bait</small>
                                            <small class="font-weight-bold">
                                                {{ baitCount(color) }}
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
        <template v-slot:bottom-bar>
            <div class="w-100 card-footer" style="border-radius: 26px 26px 0 0 !important;">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="d-flex align-items-center text-center mr-3">
                        <font-awesome-icon icon="fish" class="text-secondary" style="margin-top: 2.5px;" />
                    </div>
                    <div class="d-flex align-items-center text-center mr-3">
                        <small>Fish Caught</small>
                        <small class="mx-1">:</small>
                        <small id="fish" class="font-weight-bold">{{ initialSession.fishCount }}</small>
                    </div>
                    <div class="d-flex align-items-center text-center mr-3">
                        <small class="my-1">Gold Total</small>
                        <small class="mx-1">:</small>
                        <small id="fish" class="font-weight-bold">{{ initialSession.goldResult }}</small>
                    </div>
                    <div class="d-flex align-items-center text-center">
                        <button class="btn btn-sm btn-secondary" @click="openModalDetail">Detail</button>
                    </div>
                </div>
            </div>
            <div class="w-100 d-flex flex-column card-footer" style="background-color: #9EA4A9;">
                <div v-if="this.initialSession.status != 'calculating'" class="row">
                    <div class="col-md-4 my-1">
                        <button v-if="this.initialSession.status == 'draft'" class="btn btn-white w-100"
                            @click="skipDay">Skip Day</button>
                    </div>
                    <div class="col-md-8 my-1">
                        <button
                            v-if="this.initialSession.status == 'draft' && (this.initialSession.date == null || this.initialSession.pole == null || this.unused_baits == 0 || this.initialSession.baits.length == 0)"
                            class="btn btn-main w-100" @click="startNow">
                            Start Fishing
                        </button>
                        <div v-else-if="this.initialSession.status == 'draft'" class="d-flex justify-content-end">
                            <button class="btn btn-main" @click="autoFish">
                                Auto Fishing (Until Bait Runs Out)
                            </button>
                            <button class="btn btn-main ml-1" @click="selectPond">
                                Randomize Pond
                            </button>
                        </div>
                        <button v-else class="btn btn-white w-100" @click="nextDay">
                            Go To Next Day
                        </button>
                    </div>
                </div>
                <div v-else class="row">
                    <div class="col-md-12 my-1">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-secondary">
                                Loading...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div v-if="isModalDetailOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="targetModalDetail"
                    :style="{ width: screen() === 'xs' || screen() === 'sm' || screen() === 'md' ? '95vw' : '50vw' }">
                    <div class="modal-header">
                        <small class="d-flex justify-content-center font-weight-bold">
                            Your Fish
                        </small>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <div v-for="(color, index) in fishColors.colors" :key="index"
                                class="w-100 row mx-0 mb-3 d-flex justify-content-center">
                                <div v-for="(size, index2) in fishSizes.sizes" :key="index2" class="col-4">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <font-awesome-icon icon="fish" :style="{ color: color.hex }" />
                                        <small class="my-1">
                                            {{ size.name }} {{ color.name }}
                                        </small>
                                        <small class="font-weight-bold">
                                            {{ fishCount(color, size) }}
                                            <span v-if="fishValue(color, size) > 0">
                                                ({{ fishValue(color, size) }} Gold)
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

        <div v-if="isModalLeaderboardOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="targetModalLeaderboard"
                    :style="{ width: screen() === 'xs' || screen() === 'sm' || screen() === 'md' ? '95vw' : '50vw' }">
                    <div class="modal-header">
                        <small class="d-flex justify-content-center font-weight-bold">
                            This Browser's History
                        </small>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th class="text-center">Name</th>
                                        <th class="text-center">Gold Total</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Date</th>
                                    </tr>
                                </thead>
                                <tbody v-if="savedSessions && savedSessions.length > 0">
                                    <tr v-for="(session, index) in savedSessions" :key="index">
                                        <td class="text-center">{{ index + 1 }}.</td>
                                        <td class="text-center">{{ session.name ?? '-' }}</td>
                                        <td class="text-center">{{ session.goldResult }}</td>
                                        <td class="text-center">{{ session.status }}</td>
                                        <td class="text-center">{{ session.date }}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td colspan="5" class="text-center">No data available</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                    </div> -->
                </div>
            </div>
        </div>

        <div v-if="isModalForecastOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="targetModalForecast"
                    :style="{ width: screen() === 'xs' || screen() === 'sm' || screen() === 'md' ? '95vw' : '50vw' }">
                    <div class="modal-header">
                        <small class="d-flex justify-content-center font-weight-bold">
                            Today's Forecast
                        </small>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <div class="w-100 row mx-0">
                                <div class="col-12">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <small class="my-1">{{ forecastString }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex">
                            <small>
                                Remaining Gold: <span class="font-weight-bold">
                                    {{ initialSession.gold }}
                                </span>
                            </small>
                            <div class="ml-auto">
                                <button class="btn btn-sm btn-outline-main mr-2" @click="cancelChoosing">
                                    Cancel
                                </button>
                                <button class="btn btn-sm btn-main" @click="choosePole">
                                    Next <font-awesome-icon icon="arrow-right" class="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isModalPoleOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="targetModalPole"
                    :style="{ width: screen() === 'xs' || screen() === 'sm' || screen() === 'md' ? '95vw' : '50vw' }">
                    <!-- <div class="modal-header">
                    </div> -->
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                Choose Your Fishing Pole
                            </small>
                            <div class="row mx-0 d-flex justify-content-center">
                                <div v-for="(size, index) in  fishSizes.sizes " :key="index" class="col-lg-3 col-md-4">
                                    <div class="card m-2" @click="selectPole(size)" style="cursor: pointer;"
                                        :style="initialSession.pole && initialSession.pole.id === size.id ? 'border: 2px solid #275D93 !important;' : ''">
                                        <div class="p-4">
                                            <div class="d-flex flex-column align-items-center text-center">
                                                <img src="@/assets/images/logo-fishing-pol.png"
                                                    style="height: 120px; width: auto;" />
                                                <small class="mt-4">
                                                    {{ size.name }} Fish
                                                </small>
                                                <small class="mb-1">
                                                    Fishing Pole
                                                </small>
                                                <small class="font-weight-bold">
                                                    {{ size.pole_price }} Gold
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex">
                            <small>
                                Remaining Gold: <span class="font-weight-bold">
                                    {{ initialSession.gold }}
                                </span>
                            </small>
                            <div class="ml-auto">
                                <button class="btn btn-sm btn-outline-main mr-2" @click="showForecast">
                                    Back
                                </button>
                                <button class="btn btn-sm btn-main" @click="chooseBaits">
                                    Next <font-awesome-icon icon="arrow-right" class="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isModalBaitsOpen" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="targetModalBaits"
                    :style="{ width: screen() === 'xs' || screen() === 'sm' || screen() === 'md' ? '95vw' : '50vw' }">
                    <!-- <div class="modal-header">
                    </div> -->
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <small class="mb-3 d-flex justify-content-center font-weight-bold">
                                Choose Your Baits
                            </small>
                            <div class="row mx-0 d-flex justify-content-center">
                                <div v-for="(color, index) in  fishColors.colors " :key="index" class="col-lg-3 col-md-4">
                                    <div class="card m-2">
                                        <div class="p-4">
                                            <div class="d-flex flex-column align-items-center text-center">
                                                <font-awesome-icon icon="shrimp" style="height: 120px;"
                                                    :style="{ color: color.hex }" />
                                                <small class="mt-4 mb-1">
                                                    {{ color.name }} Bait
                                                </small>
                                                <small class="font-weight-bold">
                                                    {{ color.bait_price }} Gold
                                                </small>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex justify-content-center">
                                                <button class="btn btn-sm btn-outline-main mr-2" @click="baitRemove(color)">
                                                    <font-awesome-icon icon="minus" />
                                                </button>
                                                <small class="btn btn-sm btn-outline-dark font-weight-bold">
                                                    {{ baitCount(color) }}
                                                </small>
                                                <button class="btn btn-sm btn-outline-main ml-2" @click="baitAdd(color)">
                                                    <font-awesome-icon icon="plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex">
                            <small>
                                Remaining Gold: <span class="font-weight-bold">
                                    {{ initialSession.gold }}
                                </span>
                            </small>
                            <div class="ml-auto">
                                <button class="btn btn-sm btn-outline-main mr-2" @click="choosePole">
                                    Back
                                </button>
                                <button class="btn btn-sm btn-main" @click="finishChoosing">
                                    Start Fishing <font-awesome-icon icon="arrow-right" class="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
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
import fishPrizes from '@/assets/json/fishPrizes.json';
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
    name: "HomeIndex",
    components: {
        ContainerLayout,
    },
    computed: {
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

            return topFive;
        },

        showButton() {
            return this.initialSession.fishCount > 0;
        },

        unused_baits() {
            return this.initialSession.baits.filter(bait => bait.bait_used === 0).length;
        },
    },
    mounted() {
        this.resizePage();

        window.addEventListener('resize', () => {
            this.resizePage();
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', () => {
            this.resizePage();
        })
    },
    data() {
        return {
            loading: false,
            notClicked: false,
            savedSessions: localStorage.getItem('savedSessions') ? JSON.parse(localStorage.getItem('savedSessions')) : null,
            fishSizes: fishSizes,
            fishColors: fishColors,
            fishPrizes: fishPrizes,
            forecastData: {
                sizes: {},
                colors: {}
            },
            forecastString: '',
            initialSession: {
                id: null,
                name: null,
                gold: 100,
                pole: null,
                baits: [],
                baitsCount: 0,
                fish: [],
                fishCount: 0,
                fishValue: 0,
                goldResult: 100, // gold + fishValue
                status: 'draft', // tie, win, lose, draft
                date: null,
            },
        };
    },
    setup() {
        const screen = () => {
            return screenSize.size;
        };

        const isModalDetailOpen = ref(false);
        const targetModalDetail = ref(null);
        const openModalDetail = () => isModalDetailOpen.value = true;
        const closeModalDetail = () => isModalDetailOpen.value = false;
        onClickOutside(targetModalDetail, () => closeModalDetail());

        const isModalLeaderboardOpen = ref(false);
        const targetModalLeaderboard = ref(null);
        const openModalLeaderboard = () => isModalLeaderboardOpen.value = true;
        const closeModalLeaderboard = () => isModalLeaderboardOpen.value = false;
        onClickOutside(targetModalLeaderboard, () => closeModalLeaderboard());

        //const forecast
        const isModalForecastOpen = ref(false);
        const targetModalForecast = ref(null);
        const openModalForecast = () => isModalForecastOpen.value = true;
        const closeModalForecast = () => isModalForecastOpen.value = false;

        const isModalPoleOpen = ref(false);
        const targetModalPole = ref(null);
        const openModalPole = () => isModalPoleOpen.value = true;
        const closeModalPole = () => isModalPoleOpen.value = false;

        //Baits
        const isModalBaitsOpen = ref(false);
        const targetModalBaits = ref(null);
        const openModalBaits = () => isModalBaitsOpen.value = true;
        const closeModalBaits = () => isModalBaitsOpen.value = false;

        return {
            screen,
            isModalDetailOpen,
            targetModalDetail,
            openModalDetail,
            closeModalDetail,
            isModalLeaderboardOpen,
            targetModalLeaderboard,
            openModalLeaderboard,
            closeModalLeaderboard,
            isModalForecastOpen,
            targetModalForecast,
            openModalForecast,
            closeModalForecast,
            isModalPoleOpen,
            targetModalPole,
            openModalPole,
            closeModalPole,
            isModalBaitsOpen,
            targetModalBaits,
            openModalBaits,
            closeModalBaits,
        };
    },
    created() {
        this.generateRandomForecast();

        if (this.savedSessions && this.savedSessions.length > 0) {
            let lastSession = this.savedSessions[this.savedSessions.length - 1];
            if (lastSession.status === 'draft') {
                this.initialSession = lastSession;
            }
        }

    },
    watch: {
        initialSession: {
            handler: function (val) {
                //calculate gold with pole.pole_price and array baits attribute bait_price
                if (val.pole) {
                    val.gold = 100 - val.pole.pole_price;
                } else {
                    val.gold = 100;
                }

                if (val.baits && val.baits.length > 0) {
                    val.baitsCount = val.baits.length;
                    val.baits.forEach(bait => {
                        val.gold -= bait.bait_price;
                    });
                } else {
                    val.baitsCount = 0;
                }

                if (val.fish && val.fish.length > 0) {
                    val.fishCount = val.fish.length;
                    val.fishValue = val.fish.reduce((total, fish) => total + fish.prize, 0);
                } else {
                    val.fishCount = 0;
                    val.fishValue = 0;
                }

                if (val.fishCount > 0) {
                    val.goldResult = val.gold + val.fishValue;
                } else {
                    val.goldResult = val.gold;
                }

                if (val.pole && this.unused_baits > 0 && val.status === 'draft') {
                    this.notClicked = true;
                }
            },
            deep: true,
        },
    },
    methods: {
        resizePage() {
            if (document.getElementsByClassName('scrollable-container')[0] && document.getElementById('card-gear')) {
                let scrollableContainerHeight = document.getElementsByClassName('scrollable-container')[0].offsetHeight;
                let gearHeight = this.screen() === 'xs' || this.screen() === 'sm' || this.screen() === 'md' || this.screen() === 'lg' ? 0 : document.getElementById('card-gear').offsetHeight;
                document.getElementById('card-fishing').style.height = (scrollableContainerHeight - gearHeight - 20) + 'px';
            }

            for (let i = 0; i < document.getElementsByClassName('modal-container').length; i++) {
                if (this.screen() === 'xs' || this.screen() === 'sm' || this.screen() === 'md') {
                    document.getElementsByClassName('modal-container')[i].style.width = '95vw';
                } else {
                    document.getElementsByClassName('modal-container')[i].style.width = '50vw';
                }
            }
        },

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
                    this.$vueAlert.alert('Data cleared successfully', null, 'success');
                }
            });
        },

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

        baitCount(color) {
            return this.initialSession.baits.filter(bait => bait.id === color.id && bait.bait_used === 0).length;
        },

        baitPrice(color) {
            return this.initialSession.baits.filter(bait => bait.id === color.id).length * color.bait_price;
        },

        baitRemove(color) {
            let baitIndex = this.initialSession.baits.findIndex(bait => bait.id === color.id);
            if (baitIndex > -1) {
                this.initialSession.baits.splice(baitIndex, 1);
            }
        },

        baitAdd(color) {
            if (this.initialSession.gold >= color.bait_price) {
                let data = {
                    id: color.id,
                    name: color.name,
                    bait_price: color.bait_price,
                    bait_used: 0,
                    hex: color.hex,
                };
                this.initialSession.baits.push(data);
            }
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
            let isReset = false;
            if (this.savedSessions) {
                let lastSession = this.savedSessions[this.savedSessions.length - 1];
                if (lastSession.status === 'draft') {
                    this.savedSessions[this.savedSessions.length - 1] = this.initialSession;
                } else {
                    isReset = true;
                }
            } else {
                isReset = true;
            }

            if (isReset) {
                this.initialSession = {
                    id: null,
                    name: null,
                    gold: 100,
                    pole: null,
                    baits: [],
                    baitsCount: 0,
                    fish: [],
                    fishCount: 0,
                    fishValue: 0,
                    goldResult: 100, // gold + fishValue
                    status: 'draft', // tie, win, lose, draft
                    date: null,
                };
            }

            this.forecastData = {
                sizes: {},
                colors: {}
            };
            this.generateRandomForecast();

            this.notClicked = false;
        },

        saveSession() {
            if (this.savedSessions) {
                //if last session is draft, replace it
                let lastSession = this.savedSessions[this.savedSessions.length - 1];
                if (lastSession.status === 'draft') {
                    this.savedSessions[this.savedSessions.length - 1] = this.initialSession;
                } else {
                    this.savedSessions.push(this.initialSession);
                }
                localStorage.setItem('savedSessions', JSON.stringify(this.savedSessions));
            } else {
                localStorage.setItem('savedSessions', JSON.stringify([this.initialSession]));
            }

            this.savedSessions = JSON.parse(localStorage.getItem('savedSessions'));
        },

        skipDay() {
            this.resetInitialSession();
            this.initialSession.status = 'tie';
            this.initialSession.date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
            this.saveSession();
            this.resetInitialSession();

            this.$vueAlert.alert('Day skipped and forecast has been updated!', null, 'success');
        },

        startNow() {
            if (this.initialSession.status == 'draft' && (this.initialSession.pole == null || this.unused_baits == 0 || this.initialSession.baits.length == 0)) {
                this.showForecast();
            }
        },

        selectPole(size) {
            if (this.initialSession.pole && this.initialSession.pole.id === size.id) {
                this.initialSession.pole = null;
            } else {
                this.initialSession.pole = size;
            }
        },

        showForecast() {
            this.closeModalPole();
            this.closeModalBaits();
            this.openModalForecast();
        },

        choosePole() {
            this.closeModalForecast();
            this.closeModalBaits();
            this.openModalPole();
        },

        chooseBaits() {
            this.closeModalForecast();
            this.closeModalPole();
            this.openModalBaits();
        },

        cancelChoosing() {
            this.resetInitialSession();
            this.closeModalForecast();
            this.closeModalPole();
            this.closeModalBaits();
        },

        finishChoosing() {
            if (this.initialSession.pole == null) {
                this.$vueAlert.alert('Please choose your fishing pole', null, 'warning');
            } else if (this.unused_baits == 0 || this.initialSession.baits.length === 0) {
                this.$vueAlert.alert('Please choose your baits', null, 'warning');
            } else {
                //if there is still gold left, ask are you sure
                if (this.initialSession.gold > 0) {
                    this.$vueAlert.fire({
                        title: null,
                        text: 'You still have gold left, are you sure want to start fishing?',
                        type: 'question',
                        showConfirmButton: true,
                        showCancelButton: true,
                        reverseButtons: true,
                        confirmButtonText: 'Start Fishing',
                        cancelButtonText: 'Cancel',
                        confirmButtonColor: '#275D93',
                        buttonsStyling: false,
                        customClass: {
                            confirmButton: 'btn btn-main',
                            cancelButton: 'btn btn-outline-main mr-2',
                        },
                    }).then((result) => {
                        if (result.value) {
                            this.startFishing();
                        }
                    });
                } else {
                    this.startFishing();
                }
            }
        },

        startFishing() {
            this.closeModalForecast();
            this.closeModalPole();
            this.closeModalBaits();
            this.initialSession.date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
            this.initialSession.status = 'draft';
            this.saveSession();
            this.notClicked = true;
            this.$vueAlert.alert('Choose a pond to start fishing!', null, 'success');
        },

        selectPond(showModal = true) {
            if (this.initialSession.status == 'draft' && (this.initialSession.pole == null || this.unused_baits == 0 || this.initialSession.baits.length == 0)) {
                this.showForecast();
            } else {
                let time = 0;
                if (showModal) {
                    time = 2000;
                    document.getElementById('overlay').style.display = 'block';
                }

                setTimeout(() => {
                    document.getElementById('overlay').style.display = 'none';

                    if (this.unused_baits === 0) {
                        this.$vueAlert.alert('You have no more baits left!', null, 'warning');
                        return;
                    }

                    const baitUsed = this.initialSession.baits.find(bait => bait.bait_used === 0);
                    baitUsed.bait_used = 1;
                    this.saveSession();

                    let showFinished = false;
                    if (this.unused_baits === 0) {
                        showFinished = true;
                    }

                    const catchProbability = this.forecastData.colors[baitUsed.id];
                    if (Math.random() * 100 < catchProbability) {
                        const fishSize = this.initialSession.pole.id;
                        this.catchFish(fishSize, baitUsed.id, showModal);
                    } else {
                        if (showModal) {
                            this.initialSession.status = 'calculating';
                            this.$vueAlert.alert(`No fish caught using ${baitUsed.name} Bait!`, null, null, {
                                imageUrl: "https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png",
                                imageHeight: 88,
                                imageAlt: "Failed"
                            }).then(() => {
                                if (showFinished) {
                                    this.finishToday();
                                } else {
                                    this.initialSession.status = 'draft';
                                }
                            });
                        } else {
                            if (showFinished) {
                                this.finishToday();
                            }
                        }
                    }
                }, time);
            }
        },

        catchFish(sizeId, colorId, showModal = true) {
            const fishPrize = this.calculatePrizeForFish(sizeId, colorId);

            const caughtFish = {
                size_id: sizeId,
                color_id: colorId,
                prize: fishPrize
            };
            this.initialSession.fish.push(caughtFish);
            this.saveSession();

            let showFinished = false;
            if (this.unused_baits === 0) {
                showFinished = true;
            }

            if (showModal) {
                this.initialSession.status = 'calculating';
                this.$vueAlert.alert(`Caught a ${colorId} ${sizeId} fish worth ${fishPrize} gold.`, null, 'success').then(() => {
                    if (showFinished) {
                        this.finishToday();
                    } else {
                        this.initialSession.status = 'draft';
                    }
                });
            } else {
                if (showFinished) {
                    this.finishToday();
                }
            }
        },

        calculatePrizeForFish(sizeId, colorId) {
            const prizeEntry = this.fishPrizes.prizes.find(prize =>
                prize.size_id === sizeId && prize.color_id === colorId);

            if (prizeEntry) {
                if (prizeEntry.min_prize === prizeEntry.max_prize) {
                    return prizeEntry.min_prize;
                } else {
                    return Math.floor(Math.random() * (prizeEntry.max_prize - prizeEntry.min_prize + 1)) + prizeEntry.min_prize;
                }
            }

            return 0;
        },

        nextDay() {
            this.resetInitialSession();
            this.$vueAlert.alert('The forecast has been updated!', null, 'success');
        },

        autoFish() {
            this.initialSession.status = 'calculating';
            this.$vueAlert.fire({
                title: null,
                text: 'Are you sure want to auto fishing until bait runs out?',
                type: 'question',
                showConfirmButton: true,
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Auto Fishing',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#275D93',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-main',
                    cancelButton: 'btn btn-outline-main mr-2',
                },
            }).then((result) => {
                if (result.value) {
                    document.getElementById('overlay').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('overlay').style.display = 'none';
                        for (let i = 0; i < this.initialSession.baits.length; i++) {
                            if (this.initialSession.baits[i].bait_used === 0) {
                                this.selectPond(false);
                            }
                        }
                    }, 2000);
                } else {
                    this.initialSession.status = 'draft';
                }
            });
        },

        finishToday() {
            let text = this.initialSession.goldResult > 100 ? 'You win' : 'You lose';
            text += ' with ' + this.initialSession.fishCount + ' fish caught and ' + this.initialSession.goldResult + ' gold in total.';
            let icon = this.initialSession.goldResult > 100 ? 'success' : 'error';

            if (this.initialSession.goldResult > 100) {
                this.$vueAlert.alert(text, null, icon).then(() => {
                    this.$vueAlert.fire({
                        title: null,
                        text: 'Please enter your name',
                        input: 'text',
                        inputPlaceholder: 'Your name',
                        showCancelButton: false,
                        confirmButtonText: 'Submit',
                        confirmButtonColor: '#275D93',
                        buttonsStyling: false,
                        customClass: {
                            confirmButton: 'btn btn-main',
                        },
                        allowOutsideClick: false,
                        inputValidator: (value) => {
                            if (!value) {
                                return 'You need to write your name!';
                            }
                        }
                    }).then((result) => {
                        if (result.value) {
                            this.initialSession.name = result.value;
                        }

                        this.initialSession.status = 'win';
                        this.saveSession();
                        this.openModalDetail();
                    });
                });
            }
            else {
                this.$vueAlert.alert(text, null, icon).then(() => {
                    this.initialSession.status = 'lose';
                    this.saveSession();
                    this.openModalDetail();
                });
            }
        }
    }
};
</script>

<style scoped>
/*  */
</style>