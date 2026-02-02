<template>
  <div>
      <h1>Customer List</h1>
       <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
          </tr>
          <tr v-for="customer in customers" :key="customer.id">
              <td>{{ customer.id }}</td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td>
                 <button >Edit</button>
                 <button >Delete</button>
              </td>
          </tr>
       </table>
  </div>
</template>

<script  setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const baseUrl = import.meta.env.VITE_API_BASE_URL;
 const customers= ref([])
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


</script>

<style>

</style>