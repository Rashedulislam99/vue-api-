<template>
  <div>
    <p>{{ customer }}</p>
    <form @submit.prevent="handleUpdate">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="customer.name" />
        </div>
    
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="customer.email" />
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input type="text" id="phone" v-model="customer.phone" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="customer.address" />
        </div>
    
        <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';




let customerId= useRoute().params.id
let customer=ref({})
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const fetchCustomer=()=>{
    axios.get(`${baseUrl}/customers/${customerId}`)
    .then(res=>{
        console.log(res)
        customer.value=res.data.customer;
    })
    .catch(err=>{
        console.log(err);
    })
}

onMounted(()=>{
    fetchCustomer();
});

const handleUpdate =()=>{
    axios.put(`${baseUrl}/customers/${customerId}`,{
        name:customer.value.name,
        email:customer.value.email,
        phone:customer.value.phone,
        address:customer.value.address
        
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}


</script>

<style>

</style>