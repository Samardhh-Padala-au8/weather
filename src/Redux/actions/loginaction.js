import {LOGIN_ACTION} from "../actiontype"

export const loginact = (todo) => {
    return {
        type : LOGIN_ACTION,
        payload:{
            name:todo.name,
            email:todo.email,
        }
    };
};