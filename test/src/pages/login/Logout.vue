<template>
<div class="container mt-5">
  <h2>Dashboard (Protected)</h2>

  <button class="btn btn-danger" @click="logout">
    Logout
  </button>
</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Auth from "../../services/auth";

const router = useRouter();

const logout = async ()=>{
  await Auth.logout();
  router.push("/login");
};
</script>
