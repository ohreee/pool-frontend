<template>
  <div class="ohr-dapp-row">
    <div class="ohr-dapp-row-left">
      <div class="ohr-dapp-line-left"></div>

      <p>Layer 3</p>
      <div class="ohr-dapp-line"></div>
    </div>
    <div class="ohr-dapp-row-right">
      <div class="ohr-dapp-box">
        <p>Cooperatives</p>
      </div>
      <div class="ohr-dapp-box">
        <p>P2P Trading</p>
      </div>
      <div class="ohr-dapp-box">
        <p>NFT</p>
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
        flex-wrap: wrap
        .ohr-dapp-box
            border: 2px solid #707070
            background-color: #FEF9EF
            border-radius: 18px
            height: 60px
            width: 30%
            display: flex
            justify-content: center
            align-items: center
            p
                color: #252E65
                font-size: 24px
                font-family: 'Yanone Kaffeesatz' !important

.ohr-dapp-line-left
  display: none

@media only screen and (max-width: 786px)
  .ohr-dapp-row
    margin-bottom: 24px
    flex-wrap: wrap
    .ohr-dapp-row-left
      max-width: 100% !important
      flex: 100% !important
      p
        margin-bottom: 16px
      .ohr-dapp-line-left
        height: 2px
        background-color: #C8C8C8
        max-width: 80%
        flex: 0.8
        margin-right: 40px
        display: block !important
    .ohr-dapp-row-right
      max-width: 100% !important
      flex: 100% !important

@media only screen and (max-width: 620px)
  .ohr-dapp-box
    max-width: 100% !important
    flex: 100% !important
    margin-bottom: 16px
</style>
