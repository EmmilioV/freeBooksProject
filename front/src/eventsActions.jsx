export const TYPE = {
  USER_CREATE: "user.USER_CREATE",
  USER_UPDATE: "user.UPDATE_CREATE",
  USER_FIND: "user.USER_FIND",
  USER_DELETE: "user.USER_DELETE",
  BOOK_CREATE: "book.USER_DELETE",
  BOOK_UPDATE: "book.UPDATE_CREATE",
  BOOK_FIND: "book.USER_FIND",
  BOOK_DELETE: "book.USER_DELETE",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findUser: (users) => ({
    type: TYPE.USER_FIND, users
  }),
  saveUser: (user) => ({
    type: TYPE.USER_CREATE, user
  }),
  deleteUser: (id) => ({
    type: TYPE.USER_DELETE, id
  }),
  updateUser: (id, user) => ({
    type: TYPE.USER_UPDATE, id, user
  })
  
};
