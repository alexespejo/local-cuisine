<script setup>
import { useObj } from "../composabels/store";
const { chat } = useChatgpt();
const lbcObj = useObj();
const destination_obj = ref({});
const data = ref("");
const message = ref("");

async function sendMessage() {
 const response = await chat(message.value);
 data.value = response;
}
onMounted(() => {
 let jsonObject = JSON.parse(lbcObj.value);
 destination_obj.value = jsonObject;
 console.log(jsonObject);
});
</script>
<template>
 <div>
  <input v-model="message" />
  <button @click="sendMessage" v-text="'Send'" />
  <div>{{ data }}</div>
 </div>
</template>
<!-- <template>
 <main class="">
  <Navbar />

  <div
   v-if="Object.keys(destination_obj).length !== 0"
   class="flex flex-col p-5 px-28"
  >
   <h1 class="text-5xl py-10 self-center">{{ destination_obj.name }}</h1>
   <section class="flex flex-col">
    <h2 class="text-3xl">Destinations</h2>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.destinations"
      :key="index"
     >
      <div
       class="bg-grey-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       image
      </div>
      <span class="text-lg font-bold py-5">
       {{ i.name }}
      </span>
      <div class="text-md indent-5">{{ i.description }}</div>
     </div>
    </div>
   </section>
   <section>
    <h2 class="text-3xl">Local Cuisine</h2>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.local_cuisine.common"
      :key="index"
     >
      <div
       class="bg-orange-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       <CardImage :image_name="i.name" />
      </div>
      <span class="text-lg font-bold">
       {{ i.name }}
      </span>
      <div class="text-md">{{ i.description }}</div>
     </div>
    </div>
    <div class="flex gap-5">
     <div
      class="rounded-lg p-3 w-1/4 h-full"
      v-for="(i, index) in destination_obj.local_cuisine.unique"
      :key="index"
     >
      <div
       class="bg-gray-500 w-full h-52 rounded-lg flex items-center justify-center"
      >
       <CardImage :image_name="i.name" />
      </div>
      <span class="text-lg font-bold">
       {{ i.name }}
      </span>
      <div class="text-md">{{ i.description }}</div>
     </div>
    </div>
   </section>
  </div>
  <div v-else>Loading</div>
 </main>
</template> -->
