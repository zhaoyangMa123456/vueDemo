<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <p class="tip_text">{{ alertText }}</p>
      <div class="confirm" @click="closeTip">确认</div>
    </section>
  </div>
</template>
<script>
  export default{
    data(){
        return{
            positionY:0,
            timer:null
        }
    },
    props:['alertText'],
    methods:{
        closeTip(){
              //this.$emit('closeTip')
          alert(1)
          this.$emit('doAlert')
        }
    }
  }
</script>

























