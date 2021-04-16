<template>
  <div class="ohr-landing-hero">
    <div class="ohr-landing-hero-wrapper">
      <h1>
        The future of finance and ownership is yours to create
      </h1>
      <p>
        Ohreee helps users create groups, organize funds and achieve set goals
        through the decentralized autonomous organization (DAO) technology.
        Users can also secure the ownership of their digital assets and make
        sales on the Ohreee NFT marketplace.
      </p>
      <button class="ohr-landing-hero-cta">
        <p>Get Started</p>
        <img src="../../assets/icons/arrow-right.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.ohr-landing-hero
    width: 100%
    height: 88vh
    background-image: radial-gradient(#f7af8d, #ff7c5b, #ff552a)
    margin-top: 80px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    min-height: 600px

    .ohr-landing-hero-wrapper
      padding: 0 16px
      max-width: 1560px
      margin: 0 auto
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      h1
        color: #ffffff
        font-size: 90px
        text-align: center
      p
        margin: 0 auto
        margin-top: 80px
        color: #252E65
        font-size: 41px
        text-align: center
        max-width: 70%
        font-family: 'Yanone Kaffeesatz' !important
      .ohr-landing-hero-cta:hover
          transform: scale(1.05)
      .ohr-landing-hero-cta
        background-color: #252E65
        outline: none
        border: none
        border-radius: 18px
        height: 60px
        width: 200px
        margin-top: 80px
        display: flex
        justify-content: space-evenly
        align-items: center
        cursor: pointer
        transition: .3s
        padding-top: 8px
        img
          margin-bottom: 5px
        p
          font-size: 30px !important
          color: white
          margin: 0 !important
          max-width: 100% !important
          line-height: 47px
          margin-top: 10px

@media only screen and (max-width: 942px)
  .ohr-landing-hero-wrapper
    h1
      font-size: 60px !important
    p
      font-size: 32px !important
      max-width: 100% !important


@media only screen and (max-width: 476px)
  .ohr-landing-hero
    min-height: 800px !important
  .ohr-landing-hero-wrapper
    h1
      font-size: 48px !important
    p
      font-size: 32px !important
      max-width: 100% !important

@media only screen and (max-width: 370px)
  .ohr-landing-hero
    min-height: 1000px !important
</style>
