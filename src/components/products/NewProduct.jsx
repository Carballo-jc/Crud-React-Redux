import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/productsActions";

const NewProduct = () => {
  const dispatch = useDispatch();

  const [formValues, handleImputChange] = useForm({
    name: "",
    price: 200,
  });
  const { name, price } = formValues;
  // const addNewProduct = (product) => dispatch(addProduct(product));
  const saveProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(formValues));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={saveProduct}>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="name"
                  value={name}
                  onChange={handleImputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto"
                  name="price"
                  value={Number(price)}
                  onChange={handleImputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
