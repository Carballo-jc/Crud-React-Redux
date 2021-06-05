import { types } from "../types";
const initialState = {
  products: [],
  error: null,
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.Agregar:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
