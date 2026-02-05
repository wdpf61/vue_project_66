<template>
  <div>
       
      <Child    @child="handleClick"   :parentData="parent" ></Child>

  </div>
</template>

<script  setup>
import { provide } from 'vue';
import Child from './Child.vue';


  let parent={
     name:"Mahmud parent",
     address:"Daka"
  }
  provide("parentDaraFromProvide", parent)

  
  function handleClick(abc){
       console.log(abc);
       
  }
</script>

<style>

</style>