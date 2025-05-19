<template>
  <h2>{{ uName }}</h2>
  <h3>{{ props.age }}</h3>
</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
  firstName: String,
  lastName: String,
  age: Number,
});

const uName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>
