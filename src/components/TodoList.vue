<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li class="todo completed editing">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>1111</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text" />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
	
}
</script>