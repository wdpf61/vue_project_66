<template>
   <div>
   <h1>Create Customer</h1>
   <p>{{ customer }}</p>
   <form @submit.prevent="handleCreate">
       <div>
        <label for="name">FullName</label>
        <input type="text" name="name" :value="fullName" >
       </div>
       <div>
        <label for="name">First Name</label>
        <input type="text" name="name" v-model="customer.firstName">
       </div>
       <div>
        <label for="name">Last Name</label>
        <input type="text" name="name" v-model="customer.lastName">
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
       <div> <button type="submit">Submit</button></div>
   </form>
 </div>
</template>

<script  setup>
import axios from 'axios';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const router= useRouter()
let customer= reactive({
   firstName:"",
   lastName:"",
   email:"",
   phone:"",
   address:""
})

const fullName= computed(()=>{
    return customer.firstName + " " + customer.lastName
})

function handleCreate(){
   axios.post(`${baseUrl}/customers`,{
     customer
   })
   .then(res=>{
     console.log(res);
     router.push("/customers")
     
   })
   .catch()
}

</script>

<style>

</style>