<template>
    <div id="main-container" class="px-0">
        <div class="scrollable-container" style="background-color: white;">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContainerLayout',
    data() {
        return {
            //
        };
    },
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        padding: {
            type: Boolean,
            default: true
        }
    },
    components: {
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.resizePage();
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', () => {
            this.resizePage();
        })
    },
    methods: {
        resizePage() {
            if (document.getElementById('main-container')) {
                let deviceWidth = window.matchMedia("(max-width: 1024px)");
                if (deviceWidth.matches) {
                    document.getElementById('main-container').style.height = window.innerHeight + 'px';
                } else {
                    document.getElementById('main-container').style.height = '100vh';
                }

                if (document.getElementsByClassName('scrollable-container')[0]) {
                    let mainContainerHeight = document.getElementById('main-container').offsetHeight;
                    document.getElementsByClassName('scrollable-container')[0].style.height = mainContainerHeight + 'px';
                }
            }
        }
    }
};
</script>