import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleToDo } from './redux/actions';

const ToDo = ({ todo, toggleToDo }) => (
    <li className="todo-item" onClick={() => toggleToDo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span 
            className={cx("todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
            {todo.content}
        </span>
    </li>
);

export default connect(null, { toggleToDo })(ToDo);