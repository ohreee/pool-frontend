<template>
  <div class="ohr-dapp">
    <div class="ohr-dapp-wrapper">
      <h1>DApp Structure</h1>
      <div>
        <layer-3 />
        <layer-2 />
        <layer-1 />
        <layer-0 />
      </div>
    </div>
  </div>
</template>

<script>
import Layer0 from "./Layer0.vue";
import Layer1 from "./Layer1.vue";
import Layer2 from "./Layer2.vue";
import Layer3 from "./Layer3.vue";
export default {
  components: { Layer0, Layer3, Layer2, Layer1 },
};
</script>

<style lang="sass" scoped>
.ohr-dapp

    .ohr-dapp-wrapper
        max-width: 1560px
        margin: 0 auto
        padding: 160px 16px
        h1
            font-size: 40px
            color: #252E65
            margin-bottom: 60px
</style>
