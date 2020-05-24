<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      @keydown.enter="addTodo"
      v-model="todo"
      autocomplete="off"
      placeholder="What needs to be done?"
    />
  </header>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const todo = ref("");
    const store = useStore();
    const addTodo = () => {
      let value = todo.value.trim();
      if (!value) return;
      store.dispatch("addTodo", value);
      console.log(store)
    };
    return {
      todo,
      addTodo
    };
  }
};
</script>