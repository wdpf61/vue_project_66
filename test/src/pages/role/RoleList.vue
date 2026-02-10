<template>
  <div>
      Role List
      
      <ol >
        <li v-for="role in roles" :key="role.id">{{ role.name }}</li>
      </ol>

  </div>
</template>

<script lang="ts"  setup>
import axios from 'axios';
import { onBeforeMount, onMounted, ref } from 'vue';
  let roles= ref([])
 function  getRoles(){
      axios.get("http://localhost/wdpf-batch-66_class/Vue/vue_project/laravel_vue_api/public/api/roles")
      .then(res =>{
          console.log(res.data);
          roles.value= res.data.roles;
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