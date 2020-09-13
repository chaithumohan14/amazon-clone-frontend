export const initialState = {
  searchTerm: "",
};

export const actions = {
  SET_SEARCH: "SET_SEARCH",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SEARCH:
      return { ...state, searchTerm: action.searchTerm };

    default:
      return state;
  }
};
