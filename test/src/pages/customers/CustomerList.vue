<template>
   <div>
     <input type="text" placeholder="Customer Search" v-model="search">

      <h1>Customer List</h1>
      
       <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
          </tr>
          <tr v-for="customer in searchCustomer" :key="customer.id">
              <td>{{ customer.id }}</td>
              <td> <img :src="`${imgUrl}/customer/${customer.photo}`" alt="" srcset="" width="50">   {{ customer.name }} </td>
              <td>{{ customer.email }}</td>
              <td>
                 <router-link :to="`/customers/edit/${customer.id}`"> Edit</router-link>
                 <button @click="cusotmerDelete(customer.id)" >Delete</button>
              </td>
          </tr>
       </table>
  </div>
</template>

<script  setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const imgUrl = import.meta.env.VITE_BASE_IMG_URL;
 const customers= ref([])

 let search=ref("");

 const searchCustomer=computed(()=>{
    let q = search.value.toLowerCase();
   if(!q) return customers.value;
   return  customers.value.filter( customer=>  {
       return customer.name.toLowerCase().includes(q) || customer.email.toLowerCase().includes(q)
   });
 });

 const fetchCustomers=()=>{
   axios.get(`${baseUrl}/customers`)
   .then(res=>{
      console.log(res.data.customers);
      customers.value= res.data.customers;
   })
   .catch()
 }

 onMounted(()=>{
    fetchCustomers();
 })

 function cusotmerDelete(id){
   

   axios.delete(`${baseUrl}/customers/${id}`)
   .then(res=>{
      console.log(res);
      fetchCustomers();
   })
   .catch(err=>{
        console.log(err);
   })

 }

</script>

<style>

</style>