export const CHANGE_USER = "CHANGE_USER";

export const changeUser = (username) => {
  return { type: CHANGE_USER, username: username };
};
