<template>
  <section class="about">
      <Container>
          <div class="about-inner">
              <TitleSection title="Немного о нас"/>

              <AboutSliderInnerInfo/>

          </div>
      </Container>
  </section>
</template>

<script>
import Container from "../../Container.vue";
import TitleSection from "../../UI/TitleSection.vue";
import AboutSliderInnerInfo from "./AboutSliderInnerInfo.vue";

export default {
    name: "AboutSection",
    components: {AboutSliderInnerInfo, TitleSection, Container}
}
</script>

<style>

  .about {
      padding: 70px 0;
  }

</style>
