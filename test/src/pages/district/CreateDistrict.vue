<template>
  <div>
     <form @submit.prevent="createNewDistrict">
    <input v-model="name" placeholder="District name" />
    <button type="submit">
      Create
    </button>
</form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useMutation } from "@vue/apollo-composable"
import { CREATE_DISTRICT } from "../../graphql/district"
import { useRouter } from "vue-router"

let router= useRouter()
const name = ref("")

const { mutate: createDistrict } = useMutation(CREATE_DISTRICT)

async function createNewDistrict() {

  if (!name.value) return
   const res = await createDistrict({
    name: name.value
  })
  console.log("Created:", res?.data)

  name.value = ""

   router.push("/district")
}
</script>
