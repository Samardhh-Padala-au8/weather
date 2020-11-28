import {CREATE_TODO} from "../actiontype";
import {DELETE_TODO,UPDATE_TODO,LOCAL_TODO,SEARCH_TODO} from "../actiontype"

export const createTodo = (todo) => {
    return {
        type : CREATE_TODO,
        payload: todo
    };
};

export const searchtodo=(todo)=>{
    return {
        type : SEARCH_TODO,
        payload: todo
    };
}

export const localtodo=(todo)=>{
    return{
        type:LOCAL_TODO,
        payload:todo
    }
}

export const deleteTodo = todoId => {

 return {
     type: DELETE_TODO,
     payload : todoId
 }

}

export const updateTodo = todo => {

    return {
        type: UPDATE_TODO,
        payload : todo
    }
   
   }
   

export const getTodos = () => {
    return {
        type: "GET_TODOS"
    }
}