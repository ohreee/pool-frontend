<template> 
<div class="ohr-landing">
    <landing-navbar/>
    <Hero/>
    <Intro/>
    <Features/>
    <Dapp/>
    <Faq/>
</div>
</template>

<script>
import Hero from '../components/landing/Hero.vue';
import Intro from '../components/landing/Intro.vue';
import Features from '../components/landing/Features'
import Dapp from '../components/landing/Dapp/index';
import Faq from '../components/landing/FAQ'
import LandingNavbar from '../components/landing/LandingNavbar.vue';
export default {
    components: {
        Hero,
        Intro,
        Features,
        Dapp,
        Faq,
        LandingNavbar
    }
};
</script>

<style lang="sass" scoped>
.ohr-landing
    overflow-x: hidden
</style>
