import React from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction,getProductEdit } from "../../actions/productsActions";

const Product = ({ product }) => {
  //   console.log(product);
  const { name, id, price } = product;
const dispatch = useDispatch();
const history = useHistory();
const delteProduct = (id) => {
  dispatch(deleteProductAction(id));
};
const redirectEdition = (product) => {
  dispatch(getProductEdit(product))
  history.push(`/productos/editar/${product.id}`);
};
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="acciones">
        <button
       
            onClick={() => redirectEdition(product)}
    
               className="btn btn-primary mr-2"
        
        >
          Editar
        </button>
        <button
          onClick={() => delteProduct(id)}
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
