const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.log(this.message = this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmount() {
    console.log('unmount()');
  }
});

app.mount("#app");

// ... no reactivity en JS

/* let message = "Hello!";
let longMessage = message + " World!";
console.log(longMessage);

console.log('-------');

message = "Hello!!!!";
console.log(longMessage); */

// ... reactividad de Vue por detrás
/* const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message'){
      target.longMessage = value + 'World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);
proxy.message = 'Hello!!!'
console.log(proxy.longMessage); */