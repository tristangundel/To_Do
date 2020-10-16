import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

// variable to keep track of next todo item's id# 
let nextToDoID = 0;

// export action to add a new todo item to the list
export const addToDo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextToDoID,
        content
    }
});

// export action to toggle todo item between completed or uncompleted
export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// export action to determine todo list's filter
export const setFilter = filter => ({
    type: SET_FILTER, 
    payload: { filter }
});