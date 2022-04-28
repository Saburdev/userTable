import { CREATE_USER, DELETE_USER,DELETE_ALL } from "./types"

export const addUser = (user) => {
    return {
        type:CREATE_USER,
        payload:user
    }
}

export const delelteUser = (id) => {
    return {
        type:DELETE_USER,
        payload:id
    }
}
export const delelteAll = () => {
    return{
      type:DELETE_ALL,
    }
  }