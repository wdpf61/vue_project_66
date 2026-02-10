<template>
  <div>
        <h1>Tyepe Script</h1>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


let name:string = "Hasan";
name= "Masud";
name.toUpperCase()
let Number:number=100;
let isLogin:boolean= true;
let students:string[] = ["Masud", "Hasan", "Rashed"];
let students2:Array<string>= ["Masud", "Hasan", "Rashed"];
let resutls:number[] = [40,45,50];

let masud:(string|number)[] = ["masud", "Dhaka", 50];
masud.push("0188522455545");

// 
let Khalid:[string, number, string, boolean]= ["khalid", 20, "dhaka", true];

enum Color {
  Red,
  Green,
  Blue,
}

let mycolor:Color= Color.Green;

let abc:null= null;
let cdf:undefined;

let name3:any="Maksud";
name3=10;

let unknown:unknown= true;


// object 

 interface User{
    name: string;
    email: string;
    age?: number;
    readonly mobile:string

}



let user:User= reactive({
    name:"",
    email:"",
    mobile:"019123333"
  
})

user.name= "Masud";
user.email= "masud@gmail.colm";
user.age= 20;
// user.mobile="kjsdfkljsdklfjdkslfj"


interface Product {
  name: string;
  price: number;
  getDiscount(percentage: number): number;
}

let DeskTop:Product={
    name:"Hp",
    price:100000,
    getDiscount(per:number):number{
        return this.price * (per/ 1000) 
    }
}

console.log(DeskTop);

function add(a:number , b:number):number{
     return a+b;
}

</script>

<style>

</style>