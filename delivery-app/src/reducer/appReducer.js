export const initialState = {
  data: [],
  filter: "",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return {
        ...state,
        data: action.payload,
      };

    case "ADD_ITEM":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case "TOGGLE_STATUS":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, status: !item.status }
            : item
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
