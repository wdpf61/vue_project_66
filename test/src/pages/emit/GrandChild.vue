<template>
  <div>
    
  </div>
</template>

<script  setup>
import { inject } from 'vue';

let props= defineProps(["parntData"])
// console.log("fromGrandChild", props.parntData);

let pdata= inject("parentDaraFromProvide")

console.log("fromGrandChild", pdata);

</script>

<style>

</style>