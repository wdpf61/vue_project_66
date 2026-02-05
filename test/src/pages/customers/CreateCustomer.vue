<template>
   <div>
   <h1>Create Customer</h1>
   <p>{{ customer }}</p>
   <form @submit.prevent="handleCreate">
       <div>
        <label for="name">Name</label>
        <input type="text" name="name" v-model="customer.name">
       </div>
       <div>
        <label for="email">Email</label>
        <input type="text" name="email"  v-model="customer.email">
       </div>
       <div>
        <label for="phone">Phone</label>
        <input type="text" name="phone"  v-model="customer.phone">
       </div>
       <div>
        <label for="address">Address</label>
        <input type="text" name="address"  v-model="customer.address">
       </div>
       <div>
        <label for="Photo">Photo</label>
        <input type="file" name="photo"  @change="handlePhoto">
       </div>
       <div> <button type="submit">Submit</button></div>
   </form>
 </div>
</template>

<script  setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const router= useRouter()
let customer= reactive({
   name:"",
   email:"",
   phone:"",
   address:"",
   photo:null
})

function handlePhoto(e){
   customer.photo= e.target.files[0];
}

function handleCreate(){

    let formData= new FormData();
    formData.append("name", customer.name);
    formData.append("email", customer.email);
    formData.append("phone", customer.phone);
    formData.append("address", customer.address);
    formData.append("photo", customer.photo);

   axios.post(`${baseUrl}/customers`,formData)
   .then(res=>{
     console.log(res);
     router.push("/customers")
     
   })
   .catch()
}

</script>

<style>

</style>