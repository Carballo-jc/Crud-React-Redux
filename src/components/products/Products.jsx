import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../actions/productsActions";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  // console.log(products);
  const loaderProducts = () => dispatch(loadProducts(products));
  useEffect(() =>  {
    loaderProducts();
  },[]);
  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="shadow table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
              
              <tr><td><h2 className='display-6'>'No hay Productos'</h2></td></tr>
            
          ) : (
            products.map((product, id) => (
              <Product key={id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
