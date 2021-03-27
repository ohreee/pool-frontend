<template>
  <div class="ohr-wrapper">
    <div class="ohr-create-co-container">
      <h1>Create a Cooperative</h1>
      <div class="ohr-row">
        <div class="ohr-col-4 ohr-col-lg-6 ohr-col-md-12 ohr-col-custom">
          <ohr-input type="text" @onChange="(e)=>name=e" label="Name" />
          <ohr-input type="number" @onChange="(e)=>numberOfMembers = e" label="Number Of members" />
          <ohr-input type="number" @onChange="(e)=>targetPool = e" label="Target Pool" />
        </div>
        <div class="ohr-col-4 ohr-col-lg-6 ohr-col-md-12">
          <ohr-input type="date" @onChange="(e)=>dueDate = e" label="Due Date" />
        </div>
      </div>
      <div class="ohr-row ohr-create-co-actions">
        <div class="ohr-col-12">
        <ohr-blue-button @onClick="handleClick" text="Save"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OhrBlueButton from '../components/common/OhrBlueButton.vue';
import OhrInput from "../components/common/OhrInput.vue";
export default {
  components: { OhrInput, OhrBlueButton },
  data(){
    return{
      name: '',
      numberOfMembers: 0,
      targetPool: 0,
      dueDate: ''
    }
  },
  methods: {
    handleClick(){
      console.log("Button clicked");
      console.log(this.name)
    }
  }
};
</script>

<style lang="sass" scoped>
h1
  margin-bottom: 100px
  font-size: 49px
  font-weight: bold !important
  color: #252E65
.ohr-create-co-container
  max-width: 1560px
  margin: auto
  padding: 60px 24px
  display: flex
  flex-direction: column
  justify-content: flex-start
  height: 100%
.ohr-col-custom
  margin-right: 80px
.ohr-col-custom-alt
  margin-top: 24px

.ohr-create-co-actions
  margin-top: 30px

@media screen and (max-width: 992px)
  .ohr-col-custom
    margin-right: 0px !important
  .ohr-create-co-actions
    margin-top: 30px
    justify-content: flex-end !important
    div
      display: flex
      justify-content: flex-end !important
  h1
    font-size: 21px !important
    text-align: center
    margin-bottom: 41px !important
</style>
