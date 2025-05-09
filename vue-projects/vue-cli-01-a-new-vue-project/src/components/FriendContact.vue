<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddres }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddres: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: [
    "toggle-favorite",
    "delete",
  ],

  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete", this.id);
    }
  },
};
</script>
