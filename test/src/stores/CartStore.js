import { defineStore } from 'pinia'

export const useCartSore= defineStore("cart", {
   state:()=>({
      items:[]
   }),

   getters:{
       cartTotal:(state)=>{
         return state.items.reduce((sum, item)=> item.qty + sum, 0)
       }, 
       priceTotal:(state)=>{
         return state.items.reduce((sum, item)=> item.qty * item.price + sum, 0)
       }
   }, 

    actions:{
         addToCart(item){
             this.items.æ(item)
         },

         removeCart(id){
            this.items.filter(item => item.id !== id)
         }


    }


});