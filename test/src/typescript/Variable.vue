<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>


const username: string = "Rahim"
const age: number = 25
const isLoggedIn: boolean = true
let data: null = null
let value: undefined = undefined

let anything: any = 10
anything = "Hello"


let input: unknown = "text"
if (typeof input === "string") {
  console.log(input.toUpperCase())
}


function logMessage(): void {
  console.log("Hello")
}


function throwError(): never {
  throw new Error("Error!")
}



const numbers: number[] = [1,2,3]
const names: Array<string> = ["A","B"]

// tuple
const user: [string, number] = ["Karim", 30]


const product: { id:number; name:string } = {
  id:1,
  name:"Pen"
}

interface User {
  id: number
  name: string
}

interface Admin extends User {
  role: string
}


function add(a:number,b:number): number {
  return a + b
}

const multiply = (a:number,b:number): number => a*b

// union
let id: string | number
id = 10
id = "A12"

let status: "success" | "error"
status = "success"

// Generics (Easy Intro)

function identity<T>(value:T): T {
  return value
}

identity<string>("Hello")
identity<number>(5)


enum Role {
  Admin,
  User,
  Guest
}

const myRole: Role = Role.Admin

const input1 = document.getElementById("app") as HTMLDivElement





interface Props {
  title: string
  price: number
}

defineProps<Props>()

import { ref } from 'vue'

const count = ref<number>(0)

import { reactive } from 'vue'

interface Product {
  name:string
  price:number
}

const product1 = reactive<Product>({
  name:"Pen",
  price:10
})








</script>

<style>

</style>