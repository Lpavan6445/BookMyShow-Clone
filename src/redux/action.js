import { ADD_LOACTION, ADD_TOTAL } from "./actionType"

export const addtotal = (data) => {
    return ({type:ADD_TOTAL,payload:data})
}

export const addlocation = (data) => {
    return ({type:ADD_LOACTION,payload:data})
}