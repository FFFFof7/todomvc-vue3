import { createStore } from 'vuex'
const state = {
	todoList: [],
	filterMode: 'all'
}
const mutations = {
	addTodo(state, todo) {
		var todoItem = {
			isCompleted: false,
			value: todo
		}
		state.todoList.push(todoItem)
	},
	toggleTodo(state, index) {
		state.todoList[index].isCompleted = !state.todoList[index].isCompleted
	},
	delTodo(state, index) {
		state.todoList.splice(index, 1)
	},
	editTodo(state, { value, index }) {
		state.todoList[index] = Object.assign(state.todoList[index], { value })
	},
	checkOutFilterMode(state, mode) {
		state.filterMode = mode
	}
}
const getters = {
	todoNums(state) {
		return state.todoList.length
	}
}
export default createStore({
	state,
	mutations,
	getters
})