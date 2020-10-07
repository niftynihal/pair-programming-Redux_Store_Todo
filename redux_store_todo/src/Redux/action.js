import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './actionTypes'
import {v4 as uuid} from "uuid";

export const addTodo = (payload) => ({
    type : ADD_TODO,
    payload : {
        id : uuid(),
        title : payload,
        status : false
    }
});

export const deleteTodo = (payload) => ({
    type : DELETE_TODO,
    payload
});

export const toggleTodo = (payload) => ({
    type : TOGGLE_TODO,
    payload
})