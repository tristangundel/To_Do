import { VISIBILITY_FILTERS } from "../constants";

export const getToDoState = store => store.todos;

export const getToDoList = store => getToDoState(store) ? getToDoState(store).allIDs : [];

export const getToDoByID = (store, id) => getToDoState(store) ? { ...getToDoState(store).byIDs[id], id} : {};

export const getToDos = store => getToDoList(store).map(id => getToDoByID(store, id));

export const getToDosByVisibilityFilter = (store, visibilityFilter) => {
    const allToDos = getToDos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allToDos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allToDos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
            return allToDos;
        default:
            return allToDos;
    }
};