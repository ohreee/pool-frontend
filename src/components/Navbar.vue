<template>
  <div class="ohr-mobile-navbar">
    <div class="ohr-row ohr-v-center ohr-h-100">
      <div class="ohr-col-8 ohr-v-center ohr-no-gutter ">
        <div class="ohr-row ohr-v-center ohr-h-100 ohr-left ohr-no-gutter">
          <img alt="logo" class="ohr-logo" src="@/assets/logo.svg" />
          <img alt="menu" class="ohr-hamburger" src="@/assets/icons/ham-burger.svg" />
        </div>
      </div>
      <div class="ohr-col-4 ohr-v-center  ohr-right ohr-no-gutter">
        <div class="ohr-navbar-wallet-wrapper ohr-row ohr-v-center">
          <div class="ohr-col-6 ohr-h-100 ohr-h-center ohr-v-center ohr-no-gutter">
            <img class="ohr-wallet-green-dot" alt="green-dot" src="@/assets/icons/green-dot.svg" />
          </div>
          <div class="ohr-col-6 ohr-h-100  ohr-h-center ohr-v-center ohr-no-gutter">
            <img class="ohr-wallet-wallet-icon" alt="wallet-icon" src="@/assets/icons/wallet.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.ohr-mobile-navbar
    height: 125px
    width: 100%
    position: fixed
    left: 0
    top: 0
    padding: 8px 24px
    background-color: #ffffff
    .ohr-logo
        height: 51.77px
        width: 51.77px
    .ohr-hamburger
        margin-left: 16px
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
</style>
