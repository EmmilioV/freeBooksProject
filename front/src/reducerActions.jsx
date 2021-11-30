import { TYPE } from "./eventsActions";

export function reducerActions(state, action) {
  switch (action.type) {

    case TYPE.USER_CREATE:{
      const users = state.users.elements;
      users.push(action.user);
      return { ...state, users: { elements: users } };
    }
    case TYPE.USER_FIND:{
      return {...state, users:{elements: action.users}}       
    }
    case TYPE.USER_DELETE:{
      const users = state.users.elements.filter((element) => {
        return element.id !== action.idUser;
      });
      return { ...state, users: { elements: users } };       
    }
    case TYPE.USER_UPDATE:{
      const users = state.users.elements.map((element) => {
        if (element.id === action.user.id) {
          return { ...state, users: action.user };
        }
        return element;
      });
      return { ...state, users: { elements: users} };  
    }
    
    default:
      return state;
  }
}
