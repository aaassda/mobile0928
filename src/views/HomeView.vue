<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/images/img_02.png" alt="">
        <h3>{{mount}}</h3>
      </div>
    </div>
    <TabbarView></TabbarView>
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref} from 'vue';
  import TabbarView from "@/components/Tabbar/TabbarView.vue" 
  import {home_http} from "@/api/httpHome"
  let mount=ref("seec1")
  // export default defineComponent({
  //   name:"HomeView",
  //   components:{
  //     TabbarView
  //   },
  //   setup(){
  //     let mount =ref("hello")
  //     return{
  //       mount
  //     }
  //   }
  // })
  // let data=home_http
  // home_http().then((res: any)=>console.log("----------",res))
  async function gethome() {
    let {data}=await home_http()
    console.log("----------",data);
  }
</script>
<style lang="scss" scoped>
  .home{
    .nav{
      width: 750px;
      height: 120px;
      background-color: red;
      .pic{
        width: 750px;
        height: 296;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
