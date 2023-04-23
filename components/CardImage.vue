<script setup>
const props = defineProps(["image_name", "description", "name"]);
const { pending, data: posts } = await useLazyFetch(`/api/dalle/${props.name}`);
console.log(pending);
</script>
<template>
 <div>
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">{{ props.name }}</h3>
    <p class="py-4">
     {{ props.description }}
    </p>
    <div class="modal-action">
     <label for="my-modal" class="btn">Return</label>
    </div>
   </div>
  </div>
  <div class="w-56 h-80 flex flex-col relative">
   <div class="h-2/3 w-full bg-blue-500 rounded-3xl">
    <img class="rounded-xl shadow-xl" :src="posts.res.url" alt="error" />
    <!-- <img src="../assets/default-foodimage.png" class="blur-sm" alt="" /> -->
   </div>

   <article class="p-2 h-1/3 relative">
    <h3 class="text-2xl font-bold">{{ props.name }}</h3>
    <!-- <p class="text-sm"></p> -->
    <label for="my-modal" class="btn btn-primary absolute bottom-0 right-0"
     >open modal</label
    >
   </article>
  </div>
 </div>
</template>
