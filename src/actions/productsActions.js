import { types } from "../types";
import clientAxios from "../config/axios";

export function addProductAction(product) {
  clientAxios.post("/productos", product);
  return {
    type: types.Add_Products,
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

//eliminar productos

export function deleteProductAction(id){
return async(dispatch)=>{
  try {
    await clientAxios.delete(`/productos/${id}`);
    dispatch(getProductDelete(id));
   
  } catch (error) {
    console.log(error);
    console.log('No se puedo eliminar el producto')
  }
}
}
const getProductDelete = (id) =>({
  type:types.Product_Select,
  payload:id
});

export function getProductEdit(product){
  return(dispatch)=>{
    dispatch(getProductoActionEdit(product))
  }
}
const getProductoActionEdit= (product)=>({
  type:types.Producto_Edit,
  payload:product
});
export function editProductAction(product){
  return async(dispatch)=>{
    dispatch(editProduct());
    try {
      await clientAxios.put(`/productos/${product.id}`,product);
      dispatch(editionproductExito(product))
    } catch (error) {
      console.log(error)
      console.log('No se pudo Editar el producto');
    }
  }
};
const editProduct = () =>({
  type:types.Producto_Edit
});
const editionproductExito=(product) =>({
  type:types.Producto_Edited,
  payload:product
});