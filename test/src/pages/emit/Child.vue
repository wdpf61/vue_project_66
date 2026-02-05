<template>
  <div>
        <GrandChild  :parntData="parentData"/>
         i am child
        <button @click="SendData" >Click</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GrandChild from './GrandChild.vue';


   let child=ref({
     name:"Sajid",
     address:"Gazipur ,Dhaka",
     occupation: "Student"
   })
 
 let emit= defineEmits(["child"])

 let props= defineProps({parentData:Object})

 function SendData() {
    emit("child", child);
 }

 console.log(props.parentData);
 

</script>

<style>

</style>