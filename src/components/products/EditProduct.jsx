import React,{useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {  useHistory } from "react-router-dom";

import { editProductAction } from "../../actions/productsActions";

const EditProduct = () => {
  const [editionProduct,setEditionProduct]= useState({
    name:'',
    price:''
  });
const productEdit = useSelector((store) => store.products.productEdit);
 const dispatch = useDispatch();
 const history = useHistory();

useEffect(() =>{
  setEditionProduct(productEdit)
},[productEdit])

const onChagenProduct =e =>{
  setEditionProduct({
    ...editionProduct,
    [e.target.name] : e.target.value
  })
}


const {name,price}=editionProduct;

const saveProductEdit=(e)=>{
        e.preventDefault();
        dispatch(editProductAction(editionProduct))
        history.push('/productos')
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form 
            onSubmit={saveProductEdit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="name"
                  value={name}
                  onChange={onChagenProduct}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto"
                  name="price"
                  value={Number(price)}
                  onChange={onChagenProduct}
                />
              </div>
            
              <button
            
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
