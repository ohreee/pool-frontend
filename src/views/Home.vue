<template>
  <div class="ohr-wrapper">
    <div class="ohr-container-home">
      <h1>Cooperatives</h1>
      <div class="ohr-home-desktop-list">
        <newcard />
        <card
          title="Uhuru Community
                  Project"
          :joined="true"
          :membersCount="25"
          image="https://cdn.discordapp.com/attachments/818922919715536909/819624761196806214/img1.png"
        />
        <card
          title="Samira, Saidu
            and Friends"
          :joined="false"
          :membersCount="100"
          image="https://cdn.discordapp.com/attachments/818922919715536909/819624768385843220/img2.png"
        />
        <card
          title="Samira, Saidu
                and Friends "
          :joined="true"
          :membersCount="90"
          image="https://cdn.discordapp.com/attachments/818922919715536909/819624761196806214/img1.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/home/card.vue";
import Newcard from "../components/home/newcard.vue";
export default {
  components: {
    Card,
    Newcard,
  },
};
</script>

<style lang="sass" scoped>
h1
  font-size: 40px
  font-weight: 500
  margin-bottom: 54px
.ohr-container-home
  max-width: 1560px
  margin: auto
  padding: 70px 24px
  display: flex
  flex-direction: column
  justify-content: flex-start
  height: 100%
  .ohr-home-desktop-list
    display: flex
    justify-content: flex-start
    flex-wrap: nowrap
</style>
