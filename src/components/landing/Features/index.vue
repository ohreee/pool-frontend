<template>
  <div class="ohr-landing-feature">
    <div class="ohr-landing-feature-wrapper">
      <h1>Features</h1>

      <div class="ohr-row ohr-landing-feature-row">
        <div class="ohr-col-2">
          <feature-card
            title="Co-operative"
            body="Users can pool funds with each other in a DAO to support a shared interest. Pooled funds will yield interest."
            img="coop.svg"
          />
        </div>
        <div class="ohr-col-2">
          <feature-card
            title="NFT Minter"
            body="Users can mint NFTs and control the scarcity of products sold increasing the value."
            img="nft.svg"
          />
        </div>
        <div class="ohr-col-2">
          <feature-card
            title="Marketplace"
            body="Users can buy fractional NFT from the marketplace. Ohreee governance token is issued."
            img="marketplace.svg"
          />
        </div>
        <div class="ohr-col-2">
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
    background-image: radial-gradient(circle at 40px 40px, #d4fff1 20%, #9ee6e6 80%)

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
</style>
