import { types } from "../types";
import clientAxios from "../config/axios";

export const addProduct = (product) => {
  clientAxios.post("/productos", product);
  return {
    type: types.Add_products,
    payload: product,
  };
};

export function loadProducts() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const resp = await clientAxios.get("/productos");
      dispatch(getProductsLoader(resp.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const getProducts = () => ({
  type: types.Load_Products,
  payload: true,
});
const getProductsLoader = (products) => ({
  type: types.Products_Loader,
  payload: products,
});
// const newPrductAdd = (product) => ({
//   type: types.Add_products,
//   payload: product,
// });
