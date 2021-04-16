<template>
  <div class="ohr-dapp-row">
    <div class="ohr-dapp-row-left">
      <p>Layer 0</p>
      <div class="ohr-dapp-line"></div>
    </div>
    <div class="ohr-dapp-row-right">
      <div class="ohr-dapp-box">
        <img src="../../../assets/images/compound.svg" />
      </div>
      <div class="ohr-dapp-box">
        <img src="../../../assets/images/aave.svg" />
      </div>
      <div class="ohr-dapp-box">
        <img src="../../../assets/images/opensea.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.ohr-dapp-row
    display: flex
    align-items: center
    justify-content: space-between
    margin: 23px 0px

    .ohr-dapp-row-left
        max-width: 30%
        display: flex
        flex: 0.3
        align-items: center
        p
            color: #C8C8C8
            font-size: 32px
            font-family: 'Yanone Kaffeesatz' !important

        .ohr-dapp-line
            height: 2px
            background-color: #C8C8C8
            max-width: 80%
            flex: 0.8
            margin-left: 40px
    .ohr-dapp-row-right
        max-width: 70%
        flex: 0.7
        display: flex
        align-items: center
        justify-content: space-between
        .ohr-dapp-box
            border: 2px solid #707070
            // background-color: #FEF9EF
            border-radius: 18px
            height: 60px
            width: 30%
            display: flex
            justify-content: center
            align-items: center
            img
                height: 70%
                max-width: 90%
</style>
