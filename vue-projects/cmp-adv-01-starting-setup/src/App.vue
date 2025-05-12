<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
