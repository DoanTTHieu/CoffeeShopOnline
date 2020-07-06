import { CHANGE_USER } from "../actions/users";

const initialState = { username: "" };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { username: action.username };
    default:
      return state;
  }
};

export default usersReducer;
