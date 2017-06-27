<template>
  <div id="home" class="testDiv">
    <Alert v-if="ifAlert" :alertText=' alertText ' @doAlert="doAlert"></Alert>
    aaaaaaaaaaa
    <div id="aaa" @click="alert">
      dianwodianwo
    </div>
    <FooterGuide></FooterGuide>
  </div>
</template>
<style lang="less">
  @import url('../../assets/css/main.less');
</style>
<script>
  import Alert from '../../components/common/alert.vue'
  import FooterGuide from '../../components/footer/footGuide.vue'
export default{
  name:'home',
  components:{
      Alert,
    FooterGuide
  },
  data(){
      return{
        ifAlert:false,
        alertText:'弹出弹出'
      }
  },
  methods:{
        alert(){
          this.ifAlert=true;
        },
        doAlert(){
          this.ifAlert=false;
        }
  }
}

</script>
