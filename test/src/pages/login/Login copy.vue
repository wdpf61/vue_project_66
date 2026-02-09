<template>
<div class="container mt-5">
  <div class="card p-4 col-md-4 mx-auto">
    <h3>Login</h3>

    <form @submit.prevent="submit">
      <input
        v-model="form.email"
        type="email"
        class="form-control mb-2"
        placeholder="Email"
      />

      <input
        v-model="form.password"
        type="password"
        class="form-control mb-2"
        placeholder="Password"
      />

      <button class="btn btn-primary w-100">
        Login
      </button>

      <p class="text-danger mt-2">{{ error }}</p>
    </form>

  </div>
</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Auth from "../../services/auth";


const router = useRouter();

const form = reactive({
  email:"",
  password:""
});

const error = ref("");

const submit = async () => {
  try{
    await Auth.login(form);
    router.push("/");
  }
  catch(e){
    error.value = "Login Failed";
  }
};
</script>
