<template>
  <div class="ohr-wrapper">
    <div class="ohr-details-header">
      <div class="ohr-details-header-container">
        <div class="ohr-row ohr-v-center ohr-h-100">
          <div class="ohr-col-8 ohr-details-header-text">
            <h1>Uhuru Community Project</h1>
            <div class="ohr-row ohr-no-gutter ohr-details-sub-list">
              <div class="ohr-col-1">
                <p class="ohr-active">
                  MEMBER
                </p>
              </div>
              <div class="ohr-header-divider ohr-col-1 ohr-h-center">
                <div></div>
              </div>
              <div class="ohr-col-4">
                <p>
                  SET RULES
                </p>
              </div>
            </div>
          </div>
          <div class="ohr-col-4 ohr-right ohr-v-center ohr-details-image">
            <img alt="event-image" src="@/assets/images/details.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="ohr-details-container">
      <div class="ohr-row">
        <div class="ohr-col-4 ohr-details-summary">
          <div class="ohr-row ohr-no-gutter ohr-summary-section">
            <div class="ohr-col-6">
              <p class="ohr-details-summary-data">ETH <span>50</span></p>
              <p class="ohr-details-summary-info">TARGET</p>
            </div>
            <div class="ohr-col-6">
              <p class="ohr-details-summary-data">20/07/21</p>
              <p class="ohr-details-summary-info">DUE<br />DATE</p>
            </div>
          </div>
          <div class="ohr-row ohr-no-gutter ohr-summary-section">
            <div class="ohr-col-6">
              <p class="ohr-details-summary-data">ETH <span>15</span></p>
              <p class="ohr-details-summary-info-blue">TOTAL<br />POOLED</p>
            </div>
            <div class="ohr-col-6">
              <p class="ohr-details-summary-data"><span>15</span></p>
              <p class="ohr-details-summary-info-blue">MEMBERS<br />POOLED</p>
            </div>
          </div>
          <div class="ohr-row">
            <div class="ohr-col-4">
              <ohr-blue-button text="Deposit" />
            </div>
            <div class="ohr-col-1"></div>
            <div class="ohr-col-4">
              <ohr-gray-button text="Withdraw" />
            </div>
          </div>
        </div>
        <div class="ohr-col-4 ohr-feed-container">
          <div class="ohr-row ohr-no-gutter ohr-feed-head ohr-v-center">
            <p>Feed</p>
            <span class="ohr-hor-line"></span>
          </div>
          <feed-item
            username="@mechaadi"
            eth="0.50 ETH"
            data="deposited by"
            date="19/02/2021 9:44am"
          />
          <feed-item
            username="@mechaadi"
            eth="0.50 ETH"
            data="deposited by"
            date="19/02/2021 9:44am"
          />
          <feed-item
            username="@mechaadi"
            eth="0.50 ETH"
            data="deposited by"
            date="19/02/2021 9:44am"
          />
        </div>
        <div class="ohr-col-4 ohr-members-container">
          <div class="ohr-row ohr-no-gutter ohr-v-center">
              <p>Members</p>
            <div class="ohr-col-9 ohr-no-gutter ohr-v-center ohr-h-center">
              <span class="ohr-members-count"> 100 </span>
              <div class="ohr-hor-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OhrBlueButton from "../components/common/OhrBlueButton.vue";
import OhrGrayButton from "../components/common/OhrGrayButton.vue";
import FeedItem from "../components/feed/FeedItem.vue";
export default {
  components: { OhrBlueButton, OhrGrayButton, FeedItem },
};
</script>

<style lang="sass" scoped>
.ohr-details-header
    background-color: #252E65
    height: 205px
    width: 100%
    border-bottom-left-radius: 20px
    border-bottom-right-radius: 20px
    .ohr-details-header-container
        max-width: 1560px
        margin: auto
        height: 100%
    .ohr-details-image
        height: 145px
        width: 145px
    .ohr-header-divider
        div
            width: 1px
            background-color: #D8D8D8
            height: 30px
    .ohr-details-header-text
        display: flex
        flex-direction: column
        justify-content: center
        h1
            color: #FFFFFF
            font-size: 49px
        p
            color: #ffffff
            font-size: 22px
        .ohr-active
            color: #FFC043
    .ohr-details-sub-list
        margin-top: 35px
.ohr-details-container
    max-width: 1560px
    margin: auto
    padding: 30px 24px
    display: flex
    flex-direction: column
    justify-content: flex-start
    height: 100%

    .ohr-feed-container
        padding: 20px 40px
        border-right: 1px solid #707070
        height: 500px
        .ohr-feed-head
            margin-bottom: 50px
        .ohr-hor-line
            height: 1px
            background-color: #D8D8D8
            width: 80%
            margin-left: 8px
    .ohr-members-container
        padding: 20px 20px
        height: 500px
        .ohr-hor-line
            height: 1px
            background-color: #D8D8D8
            width: 100%
            margin-left: 8px
        .ohr-members-count
            height: 22px
            padding: 8px
            border: 1px solid #707070
            border-radius: 8px
            width: 50px
            font-size: 10px
            display: flex
            justify-content: center
            align-items: center
            margin-left: 4px
    .ohr-details-summary
        border-right: 1px solid #707070
        height: 500px

        .ohr-summary-section
            align-items: baseline !important
            margin: 45px 0px
        .ohr-details-summary-data
            color: #252E65
            font-size: 23px
            font-family: 'Lato' !important
            span
                font-size: 39px
        .ohr-details-summary-info-blue
            color: #252E65
            font-size: 15px
        .ohr-details-summary-info
            color: #BC202E
            font-size: 15px
</style>
