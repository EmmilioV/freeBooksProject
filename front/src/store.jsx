import React, { useReducer, createContext } from "react";
import { reducerActions } from "./reducerActions";

const initialState = {
  users: [],
  books: [],
};

const store = createContext(initialState);

function reducer(state, action) {
  console.log("dispatch => ", action.type);
  return reducerActions()[action.type]
    ? reducerActions()[action.type](state, action)
    : state;
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export default store;
