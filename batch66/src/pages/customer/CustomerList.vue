<template>
  <section class="page">
    <div class="page-head">
      <div>
        <h2>Customer center</h2>
        <p>Monitor priority accounts, contacts, and current status.</p>
      </div>
      <div class="page-actions">
        <button class="button-outline" type="button">Import</button>
        <button class="button" type="button">Add customer</button>
      </div>
    </div>

    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>

            <td>{{ customer.name }}</td>

            <td>{{ customer.email }}</td>

            <td>{{ customer.address }}</td>

            <td>
              <img
                v-if="customer.photo"
                :src="`${imgUrl}  /${customer.photo}`"
                alt="Customer photo"
                width="50"
              />
            </td>

            <td>
              <div class="table-actions">
                <router-link :to="`/customers/edit/${customer.id}`">
                  Edit
                </router-link>
                <button @click="customerDelete(customer.id)">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr v-if="customers.length === 0">
            <td colspan="6">No customers found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const imgUrl = import.meta.env.VITE_IMAGE_BASE_URL;

const customers = ref([]);

const fetchCustomers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/customers`);
    customers.value = res.data.customer;
  } catch (err) {
    console.error(err);
  }
};

const customerDelete = async (id) => {
  if (!confirm("Are you sure you want to delete this customer?")) return;

  try {
    await axios.delete(`${baseUrl}/customers/${id}`);
    fetchCustomers();
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchCustomers();
});
</script>
