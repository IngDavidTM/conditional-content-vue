const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
});

app.mount('#user-goals');
