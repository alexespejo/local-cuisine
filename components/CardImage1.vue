<script setup>
const props = defineProps(["similar", "description", "name"]);
// const getRandomInt = () => {
//  const min = Math.ceil(1);
//  const max = Math.floor(4);
//  console.log();
//  return `../assets/foodImage${Math.floor(
//   Math.random() * (max - min) + min
//  )}.png`;
// };
// const { pending, data: posts } = await useLazyFetch(`/api/dalle/${props.name}`);
// console.log(pending);
</script>
<template>
 <div>
  <input type="checkbox" :id="props.name + '-modal'" class="modal-toggle" />
  <div class="modal">
   <div class="modal-box">
    <div class="flex h-inherit gap-2 w-full">
     <div
      class="h-56 w-1/2 border-red-500 border-2 bg-red-300 animate-pulse rounded-xl p-2 flex justify-center"
     >
      placeholder
      <!-- <img class="rounded-xl shadow-xl" :src="posts.res.url" alt="error" /> -->
      <!-- <img :src="getRandomInt" class="blur-sm" alt="" /> -->
     </div>

     <div class="py-4 w-1/2">
      {{ props.description }}
      <h3 class="font-bold text-lg">{{ props.name }}</h3>
      <h3 class="font-bold text-lg">
       <span class="text-error">Similar to: </span>{{ props.similar }}
      </h3>
     </div>
    </div>

    <div class="modal-action">
     <label :for="props.name + '-modal'" class="btn">Return</label>
    </div>
   </div>
  </div>
  <div class="w-56 h-90 flex flex-col relative">
   <!-- <div v-show="pending">pending</div> -->
   <div class="h-2/3 w-full rounded-3xl bg-red-200">
    <img src="../assets/foodImage1.png" class="blur-sm" alt="" />
    <span
     class="border-2 border-red-400 bg-red-300 text-red-400 rounded-xl absolute top-10 left-10"
    >
     placeholder
    </span>
   </div>
   <!-- <div class="h-2/3 w-full rounded-3xl bg-red-200" >
    <img :src="posts.data.url" class="rounded-xl shadow-xl blur-sm" alt="" />
   </div> -->
   <!-- <img src="../assets/foodImage2.png" class="blur-sm" alt="" /> -->

   <article class="p-2 h-1/3 flex flex-col items-center">
    <h3 class="text-2xl font-bold pt-3">{{ props.name }}</h3>
    <!-- <p class="text-sm"></p> -->

    <label
     :for="props.name + '-modal'"
     class="btn btn-error bottom-0 right-1 w-3/4"
     >Read More</label
    >
   </article>
  </div>
 </div>
</template>
