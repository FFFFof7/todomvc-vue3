<template>
  <div id="app">
    <section class="todoapp">
      <todo-header></todo-header>
      <todo-list></todo-list>
      <todo-fifters></todo-fifters>
    </section>
  </div>
</template>

<script>
import "../node_modules/todomvc-common/base.css";
import "../node_modules/todomvc-app-css/index.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFifters from './components/TodoFifters'
export default {
  name: "todomvc",
  components: {
    TodoHeader,
    TodoList,
    TodoFifters
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
