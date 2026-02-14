<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Edit customer</h2>
        <p>Update customer contact details and account information.</p>
      </div>
      <div class="page-actions">
        <RouterLink to="/customers" class="button-outline">Back</RouterLink>
        <button class="button" type="submit" form="edit-customer-form">Update customer</button>
      </div>
    </div>

    <form id="edit-customer-form" class="panel" @submit.prevent="handleUpdate">
      <div class="form-grid">
        <label class="field">
          <span>Name</span>
          <input type="text" id="name" v-model="customer.name" required />
        </label>

        <label class="field">
          <span>Email</span>
          <input type="email" id="email" v-model="customer.email" required />
        </label>

        <label class="field">
          <span>Phone</span>
          <input type="text" id="phone" v-model="customer.phone" />
        </label>

        <label class="field">
          <span>Address</span>
          <input type="text" id="address" v-model="customer.address" />
        </label>
      </div>
    </form>
  </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const customerId = route.params.id;
const customer = ref({});
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const fetchCustomer = () => {
  axios
    .get(`${baseUrl}/customers/${customerId}`)
    .then((res) => {
      customer.value = res.data.customer;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  fetchCustomer();
});

const handleUpdate = () => {
  axios
    .put(`${baseUrl}/customers/${customerId}`, {
      name: customer.value.name,
      email: customer.value.email,
      phone: customer.value.phone,
      address: customer.value.address,
    })
    .then(() => {
      router.push("/customers");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
