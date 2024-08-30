const app = Vue.createApp({
  data() {
    return {
      todoTect: null,
      todoList: [],
    };
  },

  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
    },
  },
}).mount("#app");
