<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setNewAge">Change age</button>
    <div>
      <input type="text" placeholder="FirstName" v-model="firstName" />
      <input type="text" placeholder="LastName" ref="lastNameInput" />
      <button @click="setLastName"> Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// reactive solo trabaja con objetos refs trabaja con cualquier tipo de dato
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null)
const uAge = ref(31);

const uName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

watch([uAge, uName], function (newValues, oldValues) {
  console.log('old age: ' + oldValues[0]);
  console.log('new age: ' + newValues[0]);
  console.log('old name: ' + oldValues[1]);
  console.log('new name: ' + newValues[1]);
});

function setNewAge() {
  uAge.value = 33;
}

function setLastName() {
  lastName.value = lastNameInput.value.value
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
