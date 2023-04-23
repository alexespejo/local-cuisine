<script setup>
const search = ref("");

const dynamicRoute = computed(() => {
 return `/gpt/${search.value.toLowerCase()}`;
});
</script>
<template>
 <nav class="flex justify-between px-10 pb-10 h-fit bg-white z-50 items-center">
  <NuxtLink to="/demo">
   <h1 class="text-4xl mt-5">
    Local<span class="text-red-500 font-bold">Cuisine</span>
   </h1>
  </NuxtLink>
  <div class="w-fit">
   <section class="flex">
    <input
     type="text"
     class="text-ghost h-fit p-3 pb-0 outline-none"
     placeholder="Search more here"
     v-model="search"
    />
    <a class="btn btn-ghost" :href="dynamicRoute">Search</a>
   </section>
   <div class="border-2 bg-grey-300 rounded"></div>
  </div>
  <img src="../assets/logo.png" class="object-cover w-24 h-24" alt="" />
  <!-- <h1 class="animate-pulse h-10 w-10 rounded-full bg-slate-500"></h1> -->
 </nav>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Inter:wght@500&family=Nunito:wght@600&family=Roboto:wght@900&family=Source+Code+Pro&display=swap");

body {
 font-family: "Nunito", sans-serif;
}
</style>
