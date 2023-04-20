<template>
    <div class="slider-container">
        <div class="slider">
            <div v-for="(slide, index) in slides" :key="index" class="slide"
                :style="`transform: translateX(${(index - activeIndex) * 100}%)`">
                <img :src="slide.src" :alt="slide.title" />
                <h3>{{ slide.title }}</h3>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeIndex: 0, // afficher les 3 premières images par défaut
            slides: [
                { title: 'Slide 1', src: 'src/assets/images/slider1.png' },
                { title: 'Slide 2', src: 'src/assets/images/slider2.png' },
                { title: 'Slide 3', src: 'src/assets/images/slider3.png' },
                { title: 'Slide 4', src: 'src/assets/images/slider1.png' },
                { title: 'Slide 5', src: 'src/assets/images/slider2.png' },
                { title: 'Slide 6', src: 'src/assets/images/slider3.png' },
            ],
        };
    },
    created() {
        // afficher les 3 premières images par défaut
        if (this.slides.length > 2) {
            this.activeIndex = 0;
        }
    },
};
</script>
  
<style lang="scss" scoped>
.slider-container {
    width: 100%;
    height: 446px;
    overflow: hidden;
    position: relative;
}

.slider {
    width: calc(100% + 260px); // ajoute de la largeur pour masquer la scrollbar
    height: 446px;
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none; // supprime la scrollbar
    -ms-overflow-style: none; // supprime la scrollbar pour IE/Edge
    position: relative;
    padding: 0 130px;
}

.slider::-webkit-scrollbar {
    display: none; // supprime la scrollbar pour Chrome/Safari
}

.slide {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
    position: relative;
    margin-right: 130px;

    &:last-child {
        margin-right: 0;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        margin: 0;
        font-size: 18px;
    }
}
</style>
