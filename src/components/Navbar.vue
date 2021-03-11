<template>
  <div id="navbar">
    <div class="ohr-mobile-navbar">
      <div class="ohr-row ohr-v-center ohr-h-100">
        <div class="ohr-col-8 ohr-v-center ohr-no-gutter ">
          <div class="ohr-row ohr-v-center ohr-h-100 ohr-left ohr-no-gutter">
            <img alt="logo" class="ohr-logo" src="@/assets/logo.svg" />
            <img
              alt="menu"
              class="ohr-hamburger"
              src="@/assets/icons/ham-burger.svg"
            />
          </div>
        </div>
        <div class="ohr-col-4 ohr-v-center  ohr-right ohr-no-gutter">
          <div class="ohr-navbar-wallet-wrapper ohr-row ohr-v-center">
            <div
              class="ohr-col-6 ohr-h-100 ohr-h-center ohr-v-center ohr-no-gutter"
            >
              <img
                class="ohr-wallet-green-dot"
                alt="green-dot"
                src="@/assets/icons/green-dot.svg"
              />
            </div>
            <div
              class="ohr-col-6 ohr-h-100  ohr-h-center ohr-v-center ohr-no-gutter"
            >
              <img
                class="ohr-wallet-wallet-icon"
                alt="wallet-icon"
                src="@/assets/icons/wallet.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ohr-desktop-navbar">
      <div class="ohr-row ohr-v-center ohr-h-100">
        <div class="ohr-col-8 ohr-v-center ohr-no-gutter ">
          <div class="ohr-row ohr-v-center ohr-h-100 ohr-left ohr-no-gutter">
            <img
              alt="logo"
              class="ohr-logo-desktop"
              src="@/assets/logo-desktop.svg"
            />
          </div>
        </div>
        <div class="ohr-col-4 ohr-v-center ohr-right ohr-no-gutter">
          <div class="ohr-navbar-wallet-wrapper ohr-row ohr-v-center">
            <div
              class="ohr-col-6 ohr-h-100 ohr-h-center ohr-v-center ohr-no-gutter"
            >
              <img
                class="ohr-wallet-green-dot"
                alt="green-dot"
                src="@/assets/icons/green-dot.svg"
              />
            </div>
            <div
              class="ohr-col-6 ohr-h-100 ohr-h-center ohr-v-center ohr-no-gutter"
            >
              <img
                class="ohr-wallet-wallet-icon"
                alt="wallet-icon"
                src="@/assets/icons/wallet.svg"
              />
            </div>
          </div>
          <img
            alt="menu"
            class="ohr-hamburger"
            src="@/assets/icons/ham-burger.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
#navbar
    position: fixed
    left: 0
    top: 0
    background-color: #ffffff
    width: 100%

.ohr-mobile-navbar
    height: 125px
    width: 100%
    max-width: 1560px
    margin: auto
    padding: 8px 24px
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
