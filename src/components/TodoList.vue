<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" @change="toggleAll" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        class="todo"
        :class="{completed: item.isCompleted, editing: item.editing}"
        v-for="(item, index) in filterTodo"
        :key="index"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.isCompleted"
            @change="toggleTodo(index)"
          />
          <label @dblclick="showIpt(item)">{{item.value}}</label>
          <button class="destroy" @click="delTodo(index)"></button>
        </div>
        <input
          class="edit"
          type="text"
          :ref="el => item.ipt = el"
          :value="item.value"
          @blur="doneEdit(item, index)"
          @keydown.enter="doneEdit(item, index)"
          @keydown.esc="editCancel(item, index)"
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
  },
  active: todoList => {
    const list = [];
    todoList.forEach(item => {
      // console.log(item)
      if (!item.isCompleted) {
        list.push({
          editing: false,
          ipt: "",
          ...item
        });
      }
    });
    return list;
  },
  completed: todoList => {
    const list = [];
    todoList.forEach(item => {
      if (item.isCompleted) {
        list.push({
          editing: false,
          ipt: "",
          ...item
        });
      }
    });
    return list;
  }
};
export default {
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const filterMode = computed(() => store.state.filterMode);
    const filterTodo = ref([]);
    watch(
      [todoList, filterMode],
      ([todoList, filterMode]) => {
        filterTodo.value = filters[filterMode](todoList);
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
    const editCancel = item => {
      item.ipt.value = item.value;
      item.editing = false;
    };
    const toggleAll = () => {
      const allChecked = filterTodo.value.every(item => item.isCompleted);
      store.commit("toggleAll", allChecked);
    };
    return {
      filterTodo,
      toggleTodo,
      delTodo,
      doneEdit,
      showIpt,
      editCancel,
      toggleAll
    };
  }
};
</script>