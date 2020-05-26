<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        class="todo"
        :class="{completed: item.isCompleted, editing: item.editing}"
        v-for="(item, index) in filterData"
        :key="index"
      >
        <div class="view">
          <input class="toggle" type="checkbox" @change="toggleTodo(index)" />
          <label @dblclick="showIpt(item)">{{item.value}}</label>
          <button class="destroy" @click="delTodo(index)"></button>
        </div>
        <input
          class="edit"
          type="text"
          :ref="el => item.ipt = el"
          :value="item.value"
          @blur="doneEdit(item, index)"
        />
      </li>
    </ul>
  </section>
</template>
<script>
import { computed, ref, watch, nextTick } from "vue";
import { useStore } from "vuex";
const filters = {
  all: todoList => {
    return todoList.map(item => {
      return {
        editing: false,
        ipt: "",
        ...item
      };
    });
  }
};
export default {
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const filterData = ref([]);
    watch(
      todoList,
      todoList => {
        filterData.value = filters["all"](todoList);
      },
      {
        deep: true,
        immediate: true
      }
    );
    const toggleTodo = index => {
      store.commit("toggleTodo", index);
    };
    const delTodo = index => {
      store.commit("delTodo", index);
    };
    const showIpt = item => {
      item.editing = true;
      nextTick(() => item.ipt.focus());
    };
    const doneEdit = (item, index) => {
      item.editing = false;
      const value = item.ipt.value.trim();
      if (value) {
        store.commit("editTodo", { value, index });
      } else {
        store.commit("delTodo", index);
      }
    };
    return {
      filterData,
      toggleTodo,
      delTodo,
      doneEdit,
      showIpt
    };
  }
};
</script>