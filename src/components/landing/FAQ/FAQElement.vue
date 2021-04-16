<template>
  <div @click="handleToggle" class="ohr-faq-element">
    <div class="ohr-faq-min">
      <p>{{ ques }}</p>
      <img ref="faqArrow" src="../../../assets/icons/faqarrow.svg" />
    </div>
    <div v-if="isOpened" class="ohr-faq-max">
      <p>{{ ans }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ques: [String],
    ans: [String],
  },

  data() {
    return {
      isOpened: false,
    };
  },

  methods: {
    handleToggle() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        this.$refs.faqArrow.style.transform = "rotate(90deg)";
      } else {
        this.$refs.faqArrow.style.transform = "rotate(0deg)";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.ohr-faq-element
    min-height: 50px
    border-radius: 18px
    background-color: #fff
    padding: 16px
    cursor: pointer
    transition: .3s

    .ohr-faq-min
        display: flex
        justify-content: space-between
        align-items: center

        p
            color: #252E65
            font-family: 'Yanone Kaffeesatz' !important
            font-size: 24px

    .ohr-faq-max
        margin-top: 24px
</style>
