<template>
  <section class="home">
    <img class="home-bg" :src="image"  alt="">
    <Container>
      <div class="home-inner">
        <HomeInnerInfo/>
        <Slider/>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "../../Container.vue";
import Button from "../../UI/Button.vue";
import Slider from "../../UI/slider/Slider.vue"
import HomeInnerInfo from "./HomeInnerInfo.vue";
import image from "../../../../../public/storage/image/img_5.png";
export default {
    data() {
      return {
          image
      }
    },
    name: "HomeSection",
  components: {HomeInnerInfo, Slider, Button, Container}
}
</script>

<!-- todo: доделелать фон -->

<!-- todo: слайдер над зеленым треугольником -->

<style>
  .home {
    padding: 60px 0;
    position: relative;
  }

  .home-bg {
    position: absolute;
    z-index: -999;
    height: 100%;
    width: 100%;
    top: 0;
    margin-top: -1px;
  }

  .home-inner {
    display: flex;
    justify-content: space-between;
  }
</style>
