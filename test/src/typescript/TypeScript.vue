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

interface laptop extends Product{
  color:string
}

let mac:laptop={
  name: "mac5555",
  price: 120,
  getDiscount(percentage: 5): number{
     return this.price * (percentage/ 1000) 
  },
  color:"red"
}



// console.log(DeskTop);

function add(a:number , b:number):number{
     return a+b;
}

type admin={
  id:number,
  name:string,
  isActive:boolean
}

let kashem:admin={
  id:1,
  name:"kashem",
  isActive:true
}

enum Color2 {
  Red=2,
  Green,
  Blue,
}

// let color:Color2= Color2.Green;
// console.log(color);


enum ResponseStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

// let status1:ResponseStatus= ResponseStatus.Pending;
// console.log(status1);


// Union types (OR)
type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to: ${status}`);
}

setStatus("approved");
// setStatus("completed"); // Error!

// intersection

type color2 = {
   color:string
}
type size = {
   size:number
}


let Monitor:size & color2= {
    color:"black",
    size:24
}


// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");

let output2 = identity<number>(100);


interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  assignedTo: string;
}


// Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updateTodo: PartialTodo = {
  completed: true,
};

// Required - makes all properties required
type RequiredTodo = Required<Todo>;


// Readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>;


let myTodo: ReadonlyTodo = {
  title: "Learn TypeScript",
  description: "Complete tutorial",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Masud",
};
// myTodo.completed = true; // Error!
  //  myTodo.assignedTo="Khalid"

// Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed" | "assignedTo">;
let preview: TodoPreview = {
  title: "My Todo",
  completed: false,
  assignedTo:"Masud"
};

// Omit - omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">;


// Record - construct object type with specific keys and value type
type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";

let pages: Record<Pages, PageInfo> = {
  home:{title:"home", url:"abc.com/home"},
  about:{title:"home", url:"abc.com/about"},
  contact:{title:"home", url:"abc.com/contact"},
};






</script>

<style>

</style>