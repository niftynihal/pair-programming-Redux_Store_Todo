import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";


export const initState={
todo:[],
total:0,
completed: 0,
incomplete:0,

};

export default (state=initState,{type,payload}) => {
console.log(type,payload);
let totalTodo = state.todo.length
let completedTodo = state.todo.filter((item) => item.status === true).length
let incompleteTodo = Number(totalTodo) - Number(completedTodo)
switch(type) {
    
    case ADD_TODO:
        return{
            ...state,
            todo:[...state.todo ,payload],
            total: totalTodo +1,
            incomplete:incompleteTodo +1
        };

    case DELETE_TODO:
        let deleteTodo = state.todo.find( item => item.id === payload)
        if(state.total === 0){
            return {
                ...state,
                completed:0,
                incomplete:0
            }
        }

        if(deleteTodo.status){
            return {
                ...state,
                todo:state.todo.filter((item) => item.id !== payload),
                total:totalTodo-1,
                completed: completedTodo-1,
                incomplete:incompleteTodo

            }
        }
        else{
            return{
                ...state,
                todo:state.todo.filter((item) => item.id !== payload),
                total: totalTodo-1,
                completed:completedTodo,
                incomplete: incompleteTodo-1
            }
        }

    case TOGGLE_TODO:
        let newTodo = state.todo.find(item => item.id === payload)
        newTodo.status = !newTodo.status
        if(newTodo.status){
            return {
                ...state,
                todo:[...state.todo],
                completed: completedTodo+1,
                incomplete: incompleteTodo -1
            }
        }
        else{
            return {
                ...state,
                todo: [...state.todo],
                completed: completedTodo-1,
                incomplete: incompleteTodo+1

            }
        }

        default:
            return state
}
}