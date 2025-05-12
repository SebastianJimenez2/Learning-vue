<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        "Finish the course and learn Vue.js",
        "Master Vue.js and build amazing Vue apps!",
      ],
    };
  },
};
</script>
