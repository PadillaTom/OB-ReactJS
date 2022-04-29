// === Usamos RFCREDUX ===

import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../../store/actions/actions";
import TodoList from "../pure/TodoList";

//  =============================================================
// === No necesitamos "Pintar" nada ===
//  con este componenete, unicamente va a conectar
//  =============================================================
// export const TodoContainer = (props) => {
// 	return <div>TodoContainer</div>;
// };

//  ====================================================================================
//  === Conectaremos las Config de estos dos metodos con los props de "TODOLIST" ===
//  ====================================================================================

// Filter Todo List:
const filterTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_ACTIVE":
			return todos.filter((todo) => !todo.completed);
		case "SHOW_COMPLETED":
			return todos.filter((todo) => todo.completed);
		default:
			break;
	}
};

// Busca nuestro State y lo prepara para pasar como Props
const mapStateToProps = (state) => {
	return {
		todos: filterTodos(state.todosState, state.filterState),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		},
	};
};

// Conectamos nuestro STATE y DISPATCH a PROPS de TODOLIST
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodosContainer;
