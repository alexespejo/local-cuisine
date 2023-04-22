<script setup>
import { useObj } from "../composabels/store";
const { chat } = useChatgpt();
const lbcObj = useObj();
const data = ref("");
const message = ref("");

async function sendMessage() {
 const response = await chat(message.value);
 data.value = response;
}
onMounted(() => {
 let jsonObject = JSON.parse(lbcObj.value);
 console.log(jsonObject);
});
</script>
<template>
 <div class="flex items-center flex-col">
  <input v-model="message" class="bg-white" />
  <button @click="sendMessage" v-text="'Send'" />
  <div>{{ data }}</div>
 </div>
</template>
