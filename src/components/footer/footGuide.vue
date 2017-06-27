<template>
  <div id="foot-guide">
    <section @click="go({path:'/'})" class="guide-item">
      首页
    </section>
    <section @click="go({path:'/goodsList'})" class="guide-item">
      外卖
    </section>
    <section @click="go({path:'/search'})" class="guide-item">
      搜索
    </section>
    <section @click="go({path:'/myCenter'})" class="guide-item">
      我的
    </section>
  </div>
</template>
<script>
export default{
    data(){
        return{}
    },
  methods:{
        go(path){
            this.$router.push(path)
        }
  }
}

</script>




















