//Son los tipos de acciones
export const TYPE = {
  USER_CREATE: "user.USER_CREATE",
  USER_UPDATE: "user.UPDATE_CREATE",
  USER_FIND: "user.USER_FIND",
  BOOK_CREATE: "book.BOOK_CREATE",
  BOOK_UPDATE: "book.UPDATE_CREATE",
  BOOK_FIND: "book.BOOK_FIND",
  BOOK_DELETE: "book.BOOK_DELETE",
};

//Son las acciones que puede ejecutar el reducer
export default {
  findUser: (users) => ({
    type: TYPE.USER_FIND, users
  }),
  saveUser: (user) => ({
    type: TYPE.USER_CREATE, user
  }),
  updateUser: (id, user) => ({
    type: TYPE.USER_UPDATE, user, id
  }),
  findBook: (books) => ({
    type: TYPE.BOOK_FIND, books
  }),
  saveBook: (book) => ({
    type: TYPE.BOOK_CREATE, book
  }),
  deleteBook: (isbn) => ({
    type: TYPE.BOOK_DELETE, isbn
  }),
  updateBook: (isbn, book) => ({
    type: TYPE.BOOK_UPDATE, book, isbn
  })
  
};
