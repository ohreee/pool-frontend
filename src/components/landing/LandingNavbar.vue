<template>
  <div id="landingNavbar">
    <div class="ohr-desktop-navbar">
      <div class="ohr-row ohr-landing-nav-row ohr-h-100">
        <div class="ohr-col-4 ohr-v-center">
          <img class="logo" src="@/assets/logo-desktop.svg" />
        </div>
        <div class="ohr-col-8 ohr-right ohr-v-center">
          <button class="launch-app-btn">
            <p>Launch App</p>
            <img src="@/assets/icons/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="ohr-mobile-navbar">
      <div class="ohr-row ohr-landing-nav-row ohr-h-100">
        <div class="ohr-col-4 ohr-v-center">
          <img class="logo" src="@/assets/logo-desktop.svg" />
        </div>
        <div class="ohr-col-8 ohr-right ohr-v-center">
          <button class="launch-app-btn">
            <p>Launch App</p>
            <img src="@/assets/icons/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
#landingNavbar
    position: fixed
    left: 0
    top: 0
    background-color: #ffffff
    width: 100%
    z-index: 110

.launch-app-btn
    height: 40px
    width: 140px
    border: none
    outline: none
    display: flex
    justify-content: space-evenly
    align-items: center
    border-radius: 16px
    cursor: pointer
    background-image: linear-gradient(90deg, #AFDBD7, #FF8865)

    p
        font-family: 'Yanone Kaffeesatz'
        color: #fff
        font-size: 16px
        font-weight: bold

.logo
    max-height: 80%

.ohr-landing-nav-row
    justify-content: space-between !important

.ohr-mobile-navbar
    height: 80px
    width: 100%
    max-width: 1560px
    margin: auto
    padding: 8px 16px
    display: none
    .ohr-logo
        height: 51.77px
        width: 51.77px
        cursor: pointer
    .ohr-hamburger
        margin-left: 16px
        cursor: pointer
    .ohr-wallet-wallet-icon
        height: 28px
        width: 28px
    .ohr-wallet-green-dot
        height: 17px
        width: 17px
    .ohr-navbar-wallet-wrapper
        border: 1.5px solid #CBCBCB
        border-radius: 9px
        width: 74px
        height: 41px
        cursor: pointer
.ohr-desktop-navbar
    height: 125px
    width: 100%
    padding: 8px 24px
    background-color: #ffffff
    max-width: 1560px
    margin: auto
    .ohr-logo-desktop
        height: 73px
        width: 186px
        cursor: pointer
    .ohr-hamburger
        margin-left: 16px
        cursor: pointer
    .ohr-wallet-wallet-icon
        height: 28px
        width: 28px
    .ohr-wallet-green-dot
        height: 17px
        width: 17px
    .ohr-navbar-wallet-wrapper
        border: 1.5px solid #CBCBCB
        border-radius: 9px
        width: 74px
        height: 41px
        cursor: pointer

@media only screen and (max-width: 576px)
    .ohr-mobile-navbar
        display: block !important
    .ohr-desktop-navbar
        display: none !important
</style>
