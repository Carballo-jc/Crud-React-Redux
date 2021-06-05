import { types } from "../types";
import clientAxios from "../config/axios";

export const addProduct = (product) => {
  clientAxios.post("/productos", product);
  return {
    type: types.Agregar,
    payload: product,
  };
};
// const newPrductAdd = (product) => ({
//   type: types.Agregar,
//   payload: product,
// });
