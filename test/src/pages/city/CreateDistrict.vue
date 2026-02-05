<template>
  <div
    class="modal fade"
    id="createDistrictModal"
    tabindex="-1"
    ref="modalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Create District</h5>
          <button class="btn-close" @click="closeModal"></button>
        </div>

        <div class="modal-body">

          <form @submit.prevent="submitForm">

            <!-- District Name -->
            <div class="mb-3">
              <label class="form-label">District Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                required
              />
            </div>

            <!-- Division Dropdown -->
            <div class="mb-3">
              <label class="form-label">Division</label>
              <select
                class="form-select"
                v-model="form.division_id"
                required
              >
                <option value="">Select Division</option>
                <option
                  v-for="d in divisions"
                  :key="d.id"
                  :value="d.id"
                >
                  {{ d.name }}
                </option>
              </select>
            </div>

            <button class="btn btn-primary w-100">
              Save District
            </button>

          </form>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { Modal } from "bootstrap"
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const emit = defineEmits(["districtCreated"])

const modalRef = ref(null)
let modalInstance = null

const divisions = ref([])

const form = ref({
  name: "",
  division_id: ""
})

const openModal = () => {
  modalInstance.show()
}

const closeModal = () => {
  modalInstance.hide()
}

const loadDivisions = async () => {
  const res = await axios.get(`${baseUrl}/divisions`)
  divisions.value = res.data.divisions

}

const submitForm = async () => {
  const res = await axios.post(`${baseUrl}/districts`, form.value)
  emit("districtCreated", res.data)
  form.value = { name: "", division_id: "" }
   closeModal()
}

onMounted(() => {
  modalInstance = new Modal(modalRef.value)
  loadDivisions()
})

defineExpose({ openModal })
</script>
