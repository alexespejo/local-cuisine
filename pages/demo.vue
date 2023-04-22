<script setup>
import { useObj } from "../composabels/store.ts";
const lbcObj = useObj();
const lbc = ref({});

onMounted(() => {
 lbc.value = JSON.parse(lbcObj.value);
 console.log(JSON.stringify(lbc.value));
});
</script>
<template>
 <div class="h-screen w-screen relative">
  <h1 class="text-7xl absolute bottom-10 left-5">Welcome {{ lbc.name }}</h1>
 </div>
 <div class="divider"></div>
 <div>
  <h1 class="text-5xl">General:</h1>
  <div v-for="i in lbc.general" :key="i">{{ i }}</div>
 </div>
 <div class="divider"></div>
 <div>
  <h1 class="text-5xl">Fun Facts</h1>
  <div v-for="i in lbc.fun_facts" :key="i">{{ i }}</div>
 </div>
 <div class="divider"></div>
 <div>
  <h1 class="text-5xl">Safety Info</h1>
  <div v-for="i in lbc.safety_info" :key="i">{{ i }}</div>
 </div>
 <div class="divider"></div>
 <div>
  <h1 class="text-5xl">Destinations</h1>
  <div class="flex gap-2">
   <div v-for="i in lbc.destinations" :key="i">
    <div class="card w-96 bg-base-100 shadow-xl">
     <figure>
      <img
       src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
       alt="Image "
      />
     </figure>
     <div class="card-body">
      <h2 class="card-title text-3xl">{{ i.name }}</h2>
      <p class="text-2xl">{{ i.description }}</p>
     </div>
    </div>
   </div>
  </div>
 </div>
 <div class="divider"></div>
</template>

<style>
div {
 @apply text-3xl;
}
</style>
