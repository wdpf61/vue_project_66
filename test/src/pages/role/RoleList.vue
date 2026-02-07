<template>
  <div>
      Role List
  </div>
</template>

<script  setup>
import axios from 'axios';
import { onBeforeMount, onMounted } from 'vue';

 function  getRoles(){
      axios.get("http://localhost/wdpf-batch-66_class/Vue/vue_project/laravel_vue_api/public/api/roles")
      .then(res =>{
          console.log(res.data);
          
      })
      .catch(err =>{
         console.log(err);
      })
  }


  onMounted(()=>{
    getRoles()
    console.log(" on mount");
  });

  // onBeforeMount(()=>{
  //   console.log("before mount");
    
  //  })


</script>

<style>

</style>