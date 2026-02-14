<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Create customer</h2>
        <p>Add a new customer profile with contact and address details.</p>
      </div>
      <div class="page-actions">
        <RouterLink to="/customers" class="button-outline">Back</RouterLink>
        <button class="button" type="submit" form="create-customer-form">Save customer</button>
      </div>
    </div>

    <form id="create-customer-form" class="panel" @submit.prevent="handleCreate">
      <div class="form-grid">
        <label class="field">
          <span>Name</span>
          <input type="text" v-model="customer.name" placeholder="Customer name" required />
        </label>

        <label class="field">
          <span>Email</span>
          <input type="email" v-model="customer.email" placeholder="name@email.com" required />
        </label>

        <label class="field">
          <span>Phone</span>
          <input type="text" v-model="customer.phone" placeholder="+8801XXXXXXXXX" />
        </label>

        <label class="field">
          <span>Address</span>
          <input type="text" v-model="customer.address" placeholder="Street, City" />
        </label>

        <label class="field full">
          <span>Photo</span>
          <input type="file" @change="handlePhoto" accept="image/*" />
        </label>
      </div>
    </form>
  </section>
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
  photo: null,
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
    await axios.post(`${baseUrl}/customers`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    router.push("/customers");
  } catch (err) {
    console.error(err);
  }
}
</script>
