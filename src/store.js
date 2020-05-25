import { createStore } from 'vuex'
const state = {
	todoList: ['123']
}
const mutations = {
	addTodo(state, todo) {
		state.todoList.push(todo)
	}
}
export default createStore({
	state,
	mutations
})