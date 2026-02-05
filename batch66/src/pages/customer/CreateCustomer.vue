<template>
  <div>
    <h1>Create Customer</h1>

    <form @submit.prevent="handleCreate">

      <div>
        <label>Name:</label>
        <input type="text" v-model="customer.name" />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" v-model="customer.email" />
      </div>

      <div>
        <label>Phone:</label>
        <input type="text" v-model="customer.phone" />
      </div>

      <div>
        <label>Address:</label>
        <input type="text" v-model="customer.address" />
      </div>

      <div>
        <label>Photo:</label>
        <input type="file" @change="handlePhoto" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const router = useRouter();

const customer = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
  photo: null
});

function handlePhoto(e) {
  customer.photo = e.target.files[0];
}

async function handleCreate() {
  const formData = new FormData();
  formData.append("name", customer.name);
  formData.append("email", customer.email);
  formData.append("phone", customer.phone);
  formData.append("address", customer.address);

  if (customer.photo) {
    formData.append("photo", customer.photo);
  }

  try {
    const res = await axios.post(`${baseUrl}/customers`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    console.log(res.data);
    router.push("/customers");
  } catch (err) {
    console.error(err);
  }
}
</script>
