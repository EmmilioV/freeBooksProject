import { TYPE } from "./eventsActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const action = {};

  action[TYPE.USER_FIND] = (state, action) => {
    return { ...state, users: { elements: action.users } };
  };
  action[TYPE.USER_FIND_BY_ID] = (state, action) => {
    const users = state.users.elements.filter((element) => {
      return element.id === action.id;
    });
    return { ...state, users: { elements: users } };
  };
  action[TYPE.USER_CREATE] = (state, action) => {
    const users = state.users.elements;
    users.push(action.user);
    return { ...state, users: { elements: users } };
  };
  action[TYPE.USER_DELETE] = (state, action) => {
    const users = state.users.elements.filter((element) => {
      return element.id !== action.idUser;
    });
    return { ...state, users: { elements: users } };
  };
  action[TYPE.USER_UPDATE] = (state, action) => {
    const users = state.users.elements.map((element) => {
      if (element.id === action.user.id) {
        return { ...state, users: action.user };
      }
      return element;
    });
    return { ...state, users: { elements: users } };
  };

  return action;
};
