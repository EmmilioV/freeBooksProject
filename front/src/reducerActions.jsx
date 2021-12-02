import { TYPE } from "./eventsActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const action = {};

  action[TYPE.USER_FIND] = (state, action) => {
    return { ...state, users: { elements: action.users } };
  };
  action[TYPE.USER_CREATE] = (state, action) => {
    const users = state.users.elements;
    users.push(action.user);
    return { ...state, users: { elements: users } };
  };
  action[TYPE.USER_DELETE] = (state, action) => {
    const users = state.users.elements.filter((element) => {
      return element.id !== action.id;
    });
    return { ...state, users: { elements: users } };
  };
  action[TYPE.USER_UPDATE] = (state, action) => {
    const users = state.users.elements.map((element) => {
      if (element.id === action.user.id) {
        return { ...action.book, users: action };
      }
      return element;
    });
    return { ...state, users: { elements: users } };
  };
  action[TYPE.BOOK_FIND] = (state, action) => {
    return { ...state, books: { elements: action.books } };
  };
  action[TYPE.BOOK_CREATE] = (state, action) => {
    const books = state.books.elements;
    books.push(action.book);
    return { ...state, books: { elements: books } };
  };
  action[TYPE.BOOK_DELETE] = (state, action) => {
    const books = state.books.elements.filter((element) => {
      return element.isbn !== action.isbn;
    });
    return { ...state, books: { elements: books } };
  };
  action[TYPE.BOOK_UPDATE] = (state, action) => {
    const books = state.books.elements.map((element) => {
      if (element.isbn === action.book.isbn) {
        return { ...action.book, books: action };
      }
      return element;
    });
    return { ...state, books: { elements: books } };
  };
  

  return action;
};
