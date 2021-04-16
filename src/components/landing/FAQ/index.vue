<template>
  <div class="ohr-faq">
    <div class="ohr-faq-wrapper">
      <h1>FAQS</h1>

      <div class="ohr-faq-row ohr-row">
        <div class="ohr-col-5 ohr-col-md-12">
          <FAQElement
            ques="What is Ohreee?"
            ans="Ohreee is a social platform that allows businesses to come together, share information and
support each other via a network of pools and other tools to enable developing startups
to recieve funds and helpful info from larger more established companies."
          />
        </div>
        <div class="ohr-col-1"></div>
        <div class="ohr-col-5 ohr-col-md-12">
          <FAQElement ques="What is a Liquidity Pool?" ans="A liquidty pool in relation to crypto allows owners of crpytocurrency such as etheruem
to earn cumulitavly over time via depositing ether in exchange for a liquity token which
represents interest earned over time.
" />
        </div>
      </div>

      <div class="ohr-faq-row ohr-row">
        <div class="ohr-col-5 ohr-col-md-12">
          <FAQElement ques="Our Mission" ans="Our mission is to create a place where people and businesses can come together and support
each other while reaping the rewards of investing in communities. We want
the future of interaction between businesses to be governend by trust worthy smart
contracts making the process automated and completely seamless. 

The token’s economics must not have locking, minting or other patterns that would significantly disadvantage passive holders.

" />
        </div>
        <div class="ohr-col-1"></div>
        <div class="ohr-col-5 ohr-col-md-12">
          <FAQElement ques="Is the Voting System Fair?" ans="Voting within cooperatives allow for assets to be fairly allocated to members within the pool
as no business can be allocated funds with out the approval of all members. This process
will be executed via smart contracts disabling any other options if all votes are not
in favour." />
        </div>
      </div>

      <div class="ohr-faq-row ohr-row">
        <div class="ohr-col-5 ohr-col-md-12">
          <FAQElement
            ques="What is a Cooperative?"
            ans="Cooperatives are a step up from liquidity pools, these pools allow companies to manage 
and allocate funds to each other based on the dao governence model which enables voting 
decisions cincerning a release in equity to other members of the pool is validated by 
smart contracts. This enables companies to support each others ventures, build trust
and great a comunity full of useful information to increase activity within
their industry."
          />
        </div>
        <div class="ohr-col-1"></div>
      </div>
    </div>

    <div class="ohr-faq-footer"></div>
  </div>
</template>

<script>
import FAQElement from "./FAQElement.vue";
export default {
  components: { FAQElement },
};
</script>

<style lang="sass" scoped>
.ohr-faq
    min-height: 600px
    background-image: radial-gradient(circle at 40px 40px, #d4fff1 20%, #9ee6e6 80%)
    position: relative
    .ohr-faq-wrapper
        max-width: 1560px
        margin: 0 auto
        padding: 80px 16px
        h1
            color: #252E65
            font-size: 40px
            margin-bottom: 60px

        .ohr-faq-row
            margin-top: 8px
            justify-content: flex-start

    .ohr-faq-footer
        height: 80px
        background-color: #FFC043
        width: 100%
        position: absolute
        bottom: 0
        left: 0

@media only screen and (max-width: 576px)
  h1
    text-align: center !important
</style>
