import {LOGIN_ACTION} from "../actiontype"

const initialState={
    name:null,
    email:null,
}

const reducer = (state = initialState, action)=>{
    const type = action.type
    switch(type){
        case LOGIN_ACTION: 
                 return {...state,name:action.payload.name,email:action.payload.email}
        default: 
        return state
    }   

}
 
 
export default reducer