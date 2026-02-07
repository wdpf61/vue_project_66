<template>
  <div class="container">
        <div class="row g-2">
           <div class="col-md-3 col-sm-6 mb-4"  v-for="product in products" :key="product.id" >
               <ProductCard :product="product" @product-emit="addToCart"/>
           </div>
                       
           
        </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ProductCard from './ProductCard.vue';
import axios from 'axios';
import { useCartSore } from '../../stores/CartStore';
 
let products= ref([]);

function fetchProducts(){
 axios.get(`https://dummyjson.com/products`)
 .then(res =>{
     console.log(res);
      products.value= res.data.products;
 })
 .catch(err=> {
    console.log(err);
   
 })

}

onMounted(()=>{
    fetchProducts()
})



    // let cart =ref([]);
   let cart= useCartSore()
function addToCart(product) {

    // console.log("Before:", [...cart.value])

    let item = {
        id: product.id,
        title: product.title,
        qty: 1,
        price: product.price
    }

       cart.addToCart(item)

      console.log(cart.cartTotal);
     
  
  }

</script>

<style>

</style>