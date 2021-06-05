import { types } from "../types";
const initialState = {
  products: [],
  error: null,
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.Load_Products:
      return {
        ...state,
        loading: action.payload,
      };
    case types.Add_Products:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      case types.Products_Loader:
        return{
          ...state,
          loading:false,
          products: action.payload
        }
    default:
      return state;
  }
}
