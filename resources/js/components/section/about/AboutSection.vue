<template>
    <section class="about">
        <div class="leaves"></div>
        <div class="leaves"></div>
        <div class="leaves"></div>
        <div class="leaves"></div>
        <div class="leaves"></div>
        <div class="leaves"></div>
        <div class="leaves"></div>
        <Container>
            <TitleSection title="О нас"/>
            <div class="about-inner">
                <AboutInnerInfo/>
            </div>
            <img class="about-img" :src="getUrlImage('about-img.png')" alt="">
        </Container>
    </section>
</template>

<script>
import Container from "../../Container.vue";
import TitleSection from "@/components/UI/TitleSection.vue";
import AboutInnerInfo from "@/components/section/about/AboutInnerInfo.vue";


export default {
    name: "AboutSection",
    components: {AboutInnerInfo, TitleSection, Container },
    methods: {
        getUrlImage: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
};
</script>

<style>
.about {
    padding: 70px 0;
    position: relative;
}

.about-inner {
}

.about-img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 850px;
    transform: scale(-1, 1);
}

.leaves {
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: -1;
}

.leaves::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #006060;
    opacity: 0.8;
    overflow: hidden;
}

.leaves:nth-child(2)::before {
    margin-left: 20%;
    animation: fall 3s infinite linear;
}

.leaves:nth-child(1)::before {
    margin-left: 0;
    animation: fall 2s infinite linear;
}

.leaves:nth-child(3)::before {
    margin-left: 40%;
    animation-delay: 2s;
    animation: fall 4s infinite linear;
}

.leaves:nth-child(4)::before {
    margin-left: 60%;
    animation: fall 6s infinite linear;
}

.leaves:nth-child(5)::before {
    margin-left: 80%;
    animation: fall 4s infinite linear;
}

.leaves:nth-child(6)::before {
    margin-top: 10%;
    animation: fall 8s infinite linear;
}

.leaves:nth-child(7)::before {
    margin-top: 15%;
    animation: fall 9s infinite linear;
}


@keyframes fall {
    0% {
        opacity: .5;
        transform: translate(0, 0) rotate(0deg);
    }
    100% {
        opacity: 0;
        transform: translate(1000px, 1000px) rotate(360deg);
    }
}

</style>
