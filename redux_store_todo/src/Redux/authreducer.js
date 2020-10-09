import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "./actionTypes";


export const authState={
isauth : localStorage.getItem("isauth")||false

};

export default (state=authState,{type,payload}) => {
console.log(type,payload);
// let totalTodo = state.todo.length
// let completedTodo = state.todo.filter((item) => item.status === true).length
// let incompleteTodo = Number(totalTodo) - Number(completedTodo)
switch(type) {

        case LOGIN_SUCCESS : 
            localStorage.setItem("isauth",true)
            return({
                 ...state,
                 isauth : true
            }) 

        case LOGOUT_SUCCESS  :
            localStorage.setItem("isauth", false)
            return({
                ...state,
                isauth : false
            })

        default:
            return state
}
}