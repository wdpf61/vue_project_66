
<script setup>
import { ref } from 'vue';
   let Name= "Masud Hasan"; 
   let Address= "Segun bagicha, Dhaka"
   let html= "<span>Hello Bangladesh</span>"
   let active=ref(true);
   const  changeNme = ()=>{
      active.value = !active.value;
   }
  let Students= ["khaled", "Masud", "Pilot", "Bulbul", "Asif"];
  let count = ref(0);
  function increase(){ 
    count.value++;
   }
</script>


<template>
     <button @click="increase">{{ count }}</button>
      <h1>Name:{{ Name }}</h1>
      <p>Address: {{ Address }}</p>
      <h1>Hello  <span v-text="Name"></span> !</h1>
      <h2 v-html="html"></h2>
      <h3 v-if="active">Hasan Mahmud</h3>
      <h3 v-else>Masud</h3>
      <button v-on:click="changeNme">ChangeName</button>

     <ol>
         <li v-for="(student , i) in Students" :key="i">{{ student }}</li>
     </ol>

    
</template>



<style scoped>


</style>