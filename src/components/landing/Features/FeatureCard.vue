<template>
  <div class="ohr-feature-card">
    <div class="ohr-feature-card-header">
      <img :src="getImgUrl(img)" />
      <p>{{ title }}</p>
    </div>
    <div class="ohr-feature-card-body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: [String],
    body: [String],
    img: [String],
  },
  methods: {
    getImgUrl(pic) {
      return require("../../../assets/icons/" + pic);
    },
  },
};
</script>

<style lang="sass" scoped>
.ohr-feature-card

    .ohr-feature-card-header
        display: flex
        align-items: center
        p
            margin-left: 16px
            color: #BC202E
            font-size: 32px
            font-family: 'Yanone Kaffeesatz' !important
        img
            height: 60px
            width: 60px

    .ohr-feature-card-body
        margin-top: 32px
        p
            color: #252E65
            font-size: 24px
            font-family: 'Yanone Kaffeesatz' !important
</style>
