<template>
  <div class="container mt-4">

    <div class="d-flex justify-content-between mb-3">
      <h3>District List</h3>

      <button
        class="btn btn-success"
        @click="openCreateModal"
      >
        Create District
      </button>
    </div>

    <!-- Table -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Division ID</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="d in districts" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.name }}</td>
          <td>{{ d.division_id }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Component -->
    <CreateDistrict
      ref="createModal"
      @districtCreated="addDistrict"
    />

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import CreateDistrict from "./CreateDistrict.vue";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const districts = ref([])
const createModal = ref(null)

const loadDistricts = async () => {
  const res = await axios.get(`${baseUrl}/districts`)
   console.log(res.data);
  districts.value = res.data.districts
}

const openCreateModal = () => {
  createModal.value.openModal()
}

const addDistrict = (newDistrict) => {
  districts.value.unshift(newDistrict)
}

onMounted(() => {
  loadDistricts()
})
</script>
