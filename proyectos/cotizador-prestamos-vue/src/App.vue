<script setup>

import {ref, computed} from 'vue'; 

import Header from "./components/Header.vue";

const MIN_VALUE = 0; 
const MAX_VALUE = 20000; 
const STEP = 100; 
const amount = ref(10000); 

const getAmountWhitFormat = computed(() => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD'
  }); 

  return formatter.format(amount.value); 
})
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow-md p-10">
    <Header />

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN_VALUE"
        :max="MAX_VALUE"
        :step="STEP"
        v-model.number="amount"
      />

      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{getAmountWhitFormat}}</p>
    </div>
  </div>
</template>
