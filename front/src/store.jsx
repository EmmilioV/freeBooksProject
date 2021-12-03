import React, { useReducer, createContext } from "react";
import reducerActions from "./reducerActions";

//Inicializa elementos de users y books
const initialState = {
  users: {
    elements:[]
  },
  books: {
    elements:[]
  },
};

const store = createContext(initialState);

//Devuelve el objeto reducer de la importación reducerActions
function reducer(state, action) {
  console.log("dispatch => ", action.type);
  return reducerActions()[action.type]
    ? reducerActions()[action.type](state, action)
    : state;
}

//Nos permite conectar los diferentes componentes indicandondole al reducer que realizar  
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export default store;
