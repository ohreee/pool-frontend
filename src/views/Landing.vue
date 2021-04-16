<template> 
<div class="ohr-landing">
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
export default {
    components: {
        Hero,
        Intro,
        Features,
        Dapp,
        Faq
    }
};
</script>

<style lang="sass" scoped>
.ohr-landing
</style>
