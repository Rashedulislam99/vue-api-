<template>
  <div class="">
    <div class="card" style="width: 18rem;">
    <img :src="props.product.thumbnail" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ props.product.title }}</h5>
    <p class="card-text">{{ props.product.description }}</p>
    <button @click="addToCart(product)"  class="btn btn-primary">Add To Cart</button>
  </div>
  </div>
  </div>
</template>

<script setup>



let props=defineProps(["product"])

let emit=defineEmits(["product-emit"]);

function addToCart(product){
  emit("product-emit",product)
}
</script>

<style>

</style>