import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer';
import Form from './Form';

export const Context = createContext();
function Login() {
  const initial = {
    username: "",
    password: "",
    err: "",
    login: false
  }
  const [states, dispatch] = useReducer(reducer, initial)
  return(
   <Context.Provider value={{states,dispatch}}>
   
    <Form/>
   </Context.Provider>
  )

}

export default Login