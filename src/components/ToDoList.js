import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";
import { getToDosByVisibilityFilter } from "../redux/selectors";
import VisibilityFilters from "./VisibilityFilters";
import AddToDo from "./AddToDo";

const ToDoList = ({ todos }) => (
    <div>
        <AddToDo />
        <VisibilityFilters />
        <ul className="todo-list">
            {todos && todos.length ? todos.map((todo, index) => {
                return <ToDo key={`todo-${todo.id}`} todo={todo} />
            }) : "No To-Dos! :)"}
        </ul>
    </div>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getToDosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

export default connect(mapStateToProps)(ToDoList);