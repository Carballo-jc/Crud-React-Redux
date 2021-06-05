import { types } from "../types";
const initialState = {
  products: [],
  error: null,
  loading: false,
  productEdit: null,
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
        };
        case types.Product_Select:
          return {
            ...state,
            products: state.products.filter(
              (product) => product.id !== action.payload
            ),
          };
          case types.Producto_Edit:
            return {
              ...state,
              productEdit: action.payload,
            };
            case types.Producto_Edited:
              return {
                ...state,
                productEdit: null,
                products: state.products.map( product =>
                  product.id === action.payload.id ? product = action.payload : product)
              };
    default:
      return state;
  }
}
