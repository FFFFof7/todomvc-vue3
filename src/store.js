import { createStore } from 'vuex'
const state = {
	todoList: []
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
	}
}
export default createStore({
	state,
	mutations
})