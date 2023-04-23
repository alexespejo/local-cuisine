<script setup>
import "animate.css";
import { useDestinationsStore } from "~/composabels/store";
const query = ref("");

const queryChecker = computed(() => {
 return query.value;
});
</script>
<template>
 <div
  class="h-screen animate__animated animate__fadeInDownBig flex flex-col items-center mt-20"
 >
  <!-- <img :src="destination.westwood.local_cuisine.popularDishes[2].img" alt="" /> -->
  <main class="flex flex-col items-center w-3/4">
   <h1 class="text-5xl mt-5 flex items-center vert-move">
    Local<span class="text-red-500 font-bold">Cuisine</span>
    <img src="../assets/logo.png" class="object-cover w-24 h-24" alt="" />
   </h1>
   <h1
    class="italic text-3xl justify-center mb-10 animate__animated animate__animated animate__fadeInDown vert-move"
   >
    Explore the flavors of the world!
   </h1>
   <input
    placeholder="Search Location"
    type="text"
    class="w-full h-10 rounded outline-none text-xl text-slate-400 font-sans tracking-wide"
    v-model="query"
   />
   <div class="w-full h-1 bg-slate-300 rounded"></div>

   <a
    v-show="queryChecker.length > 0"
    :href="`/gpt/${query.toLowerCase()}`"
    class="btn btn-accent self-end my-3"
    >Search</a
   >
  </main>
 </div>
</template>

<style>
.vert-move {
 -webkit-animation: mover 1s infinite alternate;
 animation: mover 1s infinite alternate;
}
.vert-move {
 -webkit-animation: mover 1s infinite alternate;
 animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
 0% {
  transform: translateY(0);
 }
 100% {
  transform: translateY(-10px);
 }
}
@keyframes mover {
 0% {
  transform: translateY(0);
 }
 100% {
  transform: translateY(-10px);
 }
}
</style>
