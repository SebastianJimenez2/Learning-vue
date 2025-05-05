const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submited!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    }
  },
});

app.mount("#events");
