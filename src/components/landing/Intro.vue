<template>
  <div class="ohr-landing-intro">
    <div class="ohr-landing-intro-wrapper ohr-row">
      <div class="ohr-col-5 ohr-col-lg-12 ohr-landing-intro-text">
        <h1>What is Ohreee?</h1>
        <p>
          Ohreee is a DeFi platform that offers high yield savings, investments
          and a marketplace for digital and physical goods.
        </p>
        <p>
          Market vendors can create co-operatives to fund themselves and grow
          their business.
        </p>
      </div>
      <div class="ohr-col-7 ohr-col-lg-12 ohr-img-col">
        <img class="intro-img-1" src="../../assets/images/intro1.png" />
        <img class="intro-img-2" src="../../assets/images/intro2.png" />
        <img class="intro-img-3" src="../../assets/images/intro3.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.ohr-landing-intro

    .ohr-landing-intro-wrapper
        max-width: 1560px
        margin: 0 auto
        padding: 50px 16px
        min-height: 700px
        height: min-content
        .ohr-img-col
          position: relative
          min-height: 650px
        .ohr-landing-intro-text
            height: 100%
            min-height: 600px
            display: flex
            flex-direction: column
            justify-content: center

        h1
            font-size: 40px
            color: #252E65
        p
            margin-top: 40px
            color: #252E65
            font-size: 30px

.intro-img-1
    position: absolute
    top: -80px
    right: 150px
    height: 880px
    z-index: 12
.intro-img-2
    position: absolute
    bottom: -200px
    right: 450px
    height: 400px
    z-index: 12
.intro-img-3
    position: absolute
    top: 200px
    right: 0
    height: 400px
    z-index: 10

@media only screen and (max-width: 786px)
  .ohr-img-col
    order: 1 !important

    .intro-img-1
      height: 600px !important
      bottom: 0 !important
      top: 24px
    .intro-img-2
      height: 300px !important
      bottom: 0 !important
      right: 300px !important
    .intro-img-3
      height: 300px !important
      bottom: 0 !important

  .ohr-landing-intro-text
    order: 2 !important
    margin-top: 10px
    min-height: 400px !important
    h1
      font-size: 32px !important
    p
      font-size: 24px !important

@media only screen and (max-width: 576px)
  .ohr-img-col
    order: 1 !important

    .intro-img-1
      height: 600px !important
      bottom: 0 !important
      right: 0
      top: 24px
    .intro-img-2
      height: 300px !important
      bottom: 0 !important
      right: 200px !important
    .intro-img-3
      height: 300px !important
      bottom: 0 !important
      right: -100px !important

  h1
    text-align: center !important


</style>
