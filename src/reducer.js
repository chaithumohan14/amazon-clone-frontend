export const initialState = {
  searchTerm: "",
  user: {},
};

// export const URL = "http://localhost:5000";
export const URL = "https://polar-island-66350.herokuapp.com";

export const actions = {
  SET_SEARCH: "SET_SEARCH",
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",
  ADD_CART: "ADD_CART",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SEARCH:
      return { ...state, searchTerm: action.searchTerm };

    case actions.SET_USER:
      return { ...state, user: action.user };

    case actions.CLEAR_USER:
      return { ...state, user: {} };

    default:
      return state;
  }
};
