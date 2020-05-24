import { createStore } from 'vuex'
const state = {
	todoList: []
}
const mutations = {
	addTodo(state, todo) {
		console.log(23)
		state.todoList.push(todo)
	}
}
export default createStore({
	state,
	mutations
})