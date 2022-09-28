<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="onChange_fn">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/fx">分销</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart">购物</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts" setup>
  import { useRouter } from "vue-router";
    import {ref} from "vue" 
    let router=useRouter()
    let active:any=ref(0)
    let a:string="222"
    let onChange_fn:(index?:number | string)=>void=function(index?:number | string) {
      console.log(index)
      active.value=index
      // switch(index){
      //   case 0:router.push("/");break;
      //   case 1:router.push("/fx");break;
      //   case 2:router.push("/cart");break;
      //   case 3:router.push("/my");break;
      // }
    }
    // export default{
    //     setup(){
           
    //         return{
    //             active,
    //         }
    //     },
        
    // }
    
</script>
<style lang="scss" scoped></style>