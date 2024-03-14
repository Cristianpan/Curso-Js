<script setup>
import { computed, ref, watch } from "vue";
import { calculateTotalToPay, formatMoney } from "./helpers";

import Header from "./components/Header.vue";
import Button from "./components/Button.vue";

const MIN_VALUE = 0;
const MAX_VALUE = 20000;
const STEP = 100;
const amount = ref(10000);
const months = ref(6);
const total = ref(0);
const payToMonth = computed(()=> {
  return total.value / months.value; 
})

function handleClickDecrease() {
  const value = amount.value - STEP;

  if (value >= 0) {
    amount.value = value;
  }
}

watch(
  [amount, months],
  () => {
    total.value = calculateTotalToPay(amount.value, months.value);
  },
  { immediate: true }
);

function handleClickIncrease() {
  const value = amount.value + STEP;
  if (value <= 20000) {
    amount.value = value;
  }
}
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow-md p-10">
    <Header />

    <div class="flex justify-between mt-10">
      <Button :operator="'-'" :handleClick="handleClickDecrease" />
      <Button :operator="'+'" :handleClick="handleClickIncrease" />
    </div>

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN_VALUE"
        :max="MAX_VALUE"
        :step="STEP"
        v-model.number="amount"
      />

      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {{ formatMoney(amount) }}
      </p>
    </div>

    <h2 className="text-2xl font-extrabold text-gray-500 text-center">
      Elige un <span className="text-indigo-600">Plazo</span> a pagar
    </h2>

    <select
      className="mt-5 w-full p-2 bg-white border 
    border-gray-300 rounded-lg text-center
     text-xl font-bold text-gray-500"
      :value="months"
      v-model.number="months"
    >
      <option value="6">6 Meses</option>
      <option value="12">12 Meses</option>
      <option value="24">24 Meses</option>
    </select>

    <div className="my-5 space-y-3 bg-gray-50 p-5">
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span className="text-indigo-600">de pagos</span>
      </h2>

      <p className="text-xl text-gray-500 text-center font-bold">
        {{ months }} Meses
      </p>
      <p className="text-xl text-gray-500 text-center font-bold">
        Total a pagar {{ formatMoney(total) }}
      </p>
      <p className="text-xl text-gray-500 text-center font-bold">
        Mensuales {{formatMoney(payToMonth)}}
      </p>
    </div>
  </div>
</template>
