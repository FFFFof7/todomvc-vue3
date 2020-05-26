<template>
  <footer class="footer" v-show="todoNums > 0">
    <span class="todo-count">
      <strong>{{todoNums}}</strong>
      item{{todoNums > 1 ? 's' : ''}} left
    </span>
    <ul class="filters">
      <li v-for="(key, index) in filtersKey" :key="index">
        <a
          :href="'#/' + key"
          :class="{selected: key === filterMode}"
          @click="checkoutMode(key)"
        >{{key}}</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todoNums = computed(() => store.getters.todoNums);
    const filterMode = computed(() => store.state.filterMode);
    const filtersKey = ["all", "active", "completed"];
    const checkoutMode = key => {
      store.commit("checkOutFilterMode", key);
    };
    return {
      todoNums,
      filtersKey,
      filterMode,
      checkoutMode
    };
  }
};
</script>