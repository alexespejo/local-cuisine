<script setup>
import { useObj } from "../composabels/store.ts";

const lbcObj = useObj();
const lbc = ref({});

onMounted(() => {
 lbc.value = JSON.parse(lbcObj.value);
 console.log(JSON.stringify(lbc.value));
});
</script>

<template></template>

<style>
div {
 @apply text-3xl;
}
</style>
