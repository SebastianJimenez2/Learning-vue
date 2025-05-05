const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello!");
    },
    registerName(event) {
      this.name = event.target.value;
    },
    confirmedRegisterName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#assignment");
