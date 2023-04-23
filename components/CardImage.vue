<script setup>
const props = defineProps(["image_name"]);
const { pending, data: posts } = await useLazyFetch(
 `/api/dalle/${props.image_name}`
);
// console.log(pending);
</script>
<template>
 <div v-if="pending">Loading</div>
 <img class="" :src="posts.res.url ? posts.res.url : 0" alt="error" />
</template>
