<template>
  <div class="ohr-landing-feature">
    <div class="ohr-landing-feature-wrapper">
      <h1>Features</h1>

      <div class="ohr-row ohr-landing-feature-row">
        <div class="ohr-col-2 ohr-col-md-6 ohr-col-sm-12 ohr-feat-card">
          <feature-card
            title="Co-operative"
            body="Users can pool funds with each other in a DAO to support a shared interest. Pooled funds will yield interest."
            img="coop.svg"
          />
        </div>
        <div class="ohr-col-2 ohr-col-md-6 ohr-col-sm-12 ohr-feat-card">
          <feature-card
            title="NFT Minter"
            body="Users can mint NFTs and control the scarcity of products sold increasing the value."
            img="nft.svg"
          />
        </div>
        <div class="ohr-col-2 ohr-col-md-6 ohr-col-sm-12 ohr-feat-card">
          <feature-card
            title="Marketplace"
            body="Users can buy fractional NFT from the marketplace. Ohreee governance token is issued."
            img="marketplace.svg"
          />
        </div>
        <div class="ohr-col-2 ohr-col-md-6 ohr-col-sm-12 ohr-feat-card">
          <feature-card
            title="P2P Trading"
            body="Trade cryptocurrency or fiat in a decentralized manner that is secure and easy to use. "
            img="p2p.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from "./FeatureCard.vue";
export default {
  components: { FeatureCard },
};
</script>

<style lang="sass" scoped>
.ohr-landing-feature
    z-index: 20
    min-height: 600px
    animation: gradient 15s ease infinite
    background-size: 400% 400%
    background-image: radial-gradient(circle at 40px 40px, #d4fff1 20%, #9ee6e6 80%)

    @keyframes gradient
      0%
        background-position: 0% 50%

      50%
        background-position: 100% 50%

      100%
        background-position: 0% 50%


    .ohr-landing-feature-wrapper
        max-width: 1560px
        margin: 0 auto
        padding: 160px 16px
        h1
            color: #252E65
            font-size: 40px

        .ohr-landing-feature-row
            margin-top: 60px
            justify-content: space-between

.ohr-feat-card
  margin-bottom: 48px


@media only screen and (max-width: 576px)
  .ohr-landing-feature-wrapper
    padding: 80px 16px !important
  h1
    text-align: center !important
</style>
