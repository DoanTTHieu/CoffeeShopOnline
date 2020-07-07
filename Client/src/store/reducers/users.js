import { CHANGE_USER } from "../actions/users";

const initialState = { username: "", cart: {} };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { username: action.username, cart: action.cart };
    default:
      return state;
  }
};

export default usersReducer;
