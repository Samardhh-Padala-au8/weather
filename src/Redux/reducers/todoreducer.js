import {CREATE_TODO, DELETE_TODO, UPDATE_TODO,LOCAL_TODO,SEARCH_TODO} from "../actiontype"

const initialState = {
    todos : [],
    res:" "
} 

const todoreducer = (state = initialState, action)=>{
    const type = action.type
    switch(type){
        case CREATE_TODO: 
                 return {...state,todos:[...state.todos,action.payload]}
        case LOCAL_TODO:
            return {...state,todos:action.payload}
        case DELETE_TODO:
            console.log(action.payload)
            console.log(state)
              return{todos:[...state.todos.filter(todo=>(todo.blogtitle!==action.payload))]}
        case SEARCH_TODO:
            let a = state.todos.filter(todo=>(todo.blogtitle===action.payload))
            if(a.length>0){
                state.res=a[0].blogpara
            }
            else{
                state.res="Sorry no such blogs existed"
            }
            return state
        case UPDATE_TODO:
            let newconst = prompt("Enter the content")
            return {todos:[...state.todos.map(todo=>{
                if(action.payload===todo.blogtitle)
                {
                    todo.blogpara = newconst
    
            }
        
                return todo
            })]}
        default: 
        return state
    }   

}
 
 
export default todoreducer