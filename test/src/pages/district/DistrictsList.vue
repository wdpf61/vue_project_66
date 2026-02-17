<template>
  <div>
      <ul>
         <li v-if="loading">Loading</li>
         <li v-for="dis in districts" :key="dis.id">{{ dis.name }}

            <router-link class="btn btn-info" :to="`/district/edit/${dis.id}`">Edit</router-link>

            <button @click="handleDelete(dis.id)" >Delete</button>

         </li>
      </ul>
  </div>
</template>

<script  setup>
import { useMutation, useQuery } from '@vue/apollo-composable';
import { DELETE_DISTRICT, GET_DISTRICTS } from '../../graphql/district';
import { computed } from 'vue';

let {result, refetch, loading, error}= useQuery(GET_DISTRICTS)
let districts = computed( () => result.value?.districts ?? [])

console.log(districts);

const { mutate: deleteDistrict } = useMutation(DELETE_DISTRICT)

function handleDelete(id){
     deleteDistrict({ id }).then(() => refetch())
}

</script>

<style>

</style>