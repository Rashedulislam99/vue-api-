<template>
  <div class="container">
        <div class="row g-2">
           <div class="col-md-3 col-sm-6 mb-4"  v-for="product in products" :key="product.id" >
               <ProductCard :product="product"/>
           </div>
                       
           
        </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ProductCard from './ProductsCard.vue';
import axios from 'axios';
 
let products= ref([]);

function fetchProducts(){
 axios.get(`https://dummyjson.com/products`)
 .then(res =>{
     console.log(res);
      products.value= res.data.products;
 })
 .catch(err=> {
    console.log(err);
   
 })

}

onMounted(()=>{
    fetchProducts()
})



</script>

<style>

</style>