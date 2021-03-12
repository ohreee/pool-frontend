<template>
  <div class="ohr-footer-wrapper">
    <div class="ohr-footer-desktop">
      <div class="ohr-row ohr-v-center ohr-h-100">
        <div class="ohr-col-2 ohr-v-center ohr-row ohr-copyright">
          © 2021 Ohreee Ltd.
        </div>
        <div class="ohr-col-6 ohr-v-center ohr-right ohr-menu-links">
          <ul>
            <li>About</li>
            <li>Docs</li>
            <li>Donate</li>
            <li>Language</li>
          </ul>
        </div>
        <div class="ohr-col-4 ohr-row ohr-social-links ohr-right ohr-v-center">
            <img src="@/assets/icons/medium.svg"/>
            <img src="@/assets/icons/twitter.svg"/>
            <img src="@/assets/icons/instagram.svg"/>
            <img src="@/assets/icons/discord.svg"/>
            <img src="@/assets/icons/telegram.svg"/>
            <img src="@/assets/icons/github.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.ohr-footer-wrapper
    background-color: #ffffff
    width: 100%
    height: 158px

    .ohr-footer-desktop
        width: 100%
        height: 100%
        max-width: 1560px
        margin: auto
        padding: 8px 24px

    .ohr-copyright
        color: #252E65
        font-size: 21px
    li
        display: inline
        font-size: 21px
        color: #252E65
        margin: 0 32px
        cursor: pointer
    .ohr-social-links
        img
            margin: 0 12px

@media only screen and (max-width: 1300px)
    .ohr-footer-desktop, .ohr-footer-wrapper
        height: 100px !important
    .ohr-copyright
        flex: 50% !important
        max-width: 50% !important
        justify-content: flex-start
    .ohr-menu-links
        flex: 50% !important
        max-width: 50% !important
        justify-content: flex-end
    .ohr-social-links
        flex: 100% !important
        max-width: 100% !important
        justify-content: center !important
</style>
