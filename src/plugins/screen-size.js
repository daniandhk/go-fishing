import { reactive, readonly, computed } from 'vue';

const state = reactive({
    width: window.innerWidth
});

const size = computed(() => {
    if (state.width <= 576) return 'sm';
    if (state.width > 576 && state.width <= 768) return 'md';
    if (state.width > 768 && state.width <= 992) return 'lg';
    return 'xl';
});

const updateSize = () => {
    state.width = window.innerWidth;
};

window.addEventListener('resize', updateSize);

export default readonly({
    get width() {
        return state.width;
    },
    get size() {
        return size.value;
    }
});