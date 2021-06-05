import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import EditProduct from "./components/products/EditProduct";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/productos" component={Products} />
            <Route exact path="/productos/nuevo" component={NewProduct} />
            <Route exact path="/productos/editar/:id" component={EditProduct} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
