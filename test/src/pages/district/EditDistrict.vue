<template>
  <div>
       <form  @submit.prevent="handleEdit">
         <input type="text" name="" id=""  v-model="district.name">
         <button type="submit">Submit</button>
       </form>
  </div>
</template>

<script  setup>
import { useRoute, useRouter } from 'vue-router';
import { GET_DISTRICT, UPDATE_DISTRICT } from '../../graphql/district';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { reactive, watch } from 'vue';


let disId= useRoute().params.id;

let router= useRouter();

// form state
const district = reactive({
  id: "",
  name: ""
})

// GET role
const { result, loading, error } = useQuery(GET_DISTRICT, () => ({
  id: disId
}))

watch(result, (val) => {
  if (val?.district) {
    district.id = val.district.id
    district.name = val.district.name
  }

  console.log(district);
  
})


const { mutate: updateDistrict } = useMutation(UPDATE_DISTRICT)

async function handleEdit() {
  await updateDistrict({
    id: district.id,
    name: district.name
  })
  router.push("/district")
}

</script>

<style>

</style>