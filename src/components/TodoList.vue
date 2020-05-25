<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- editing completed -->
      <li
        class="todo"
        :class="{completed: item.isCompleted}"
        v-for="(item, index) in todoList"
        :key="index"
      >
        <div class="view">
          <input class="toggle" type="checkbox" @change="toggleTodo(index)" />
          <label>{{item.value}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text" />
      </li>
    </ul>
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const toggleTodo = index => {
      store.commit("toggleTodo", index);
    };
    return {
      todoList,
      toggleTodo
    };
  }
};
</script>