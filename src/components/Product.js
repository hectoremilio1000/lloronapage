import React, { useState } from "react";
import * as mutations from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

function Product() {
  const [productName, setProductName] = useState("");
  const [productCategoria, setProductCategoria] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImagen, setProductImagen] = useState("");
  const [productDescripcion, setProductDescripcion] = useState("");

  const AddProduct = async () => {
    const productoNuevo = {
      title: productName,
      category: productCategoria,
      price: productPrice,
      img: productImagen,
      desc: productDescripcion,
    };

    const newProduct = await API.graphql({
      query: mutations.createProducto,
      variables: { input: productoNuevo },
      authMode: "API_KEY",
    });
    //   .then(setProductName(""))
    //   .catch(e => console.log("error", e));

    setProductName("");
    setProductCategoria("");
  };

  return (
    <div>
      <div>
        <label>
          {" "}
          Nombre del producto
          <input
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label>
          {" "}
          Nombre de la categoría
          <input
            type="text"
            value={productCategoria}
            onChange={e => setProductCategoria(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label>
          {" "}
          Precio del Producto
          <input
            type="number"
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label>
          {" "}
          Imagen del Producto
          <input
            type="text"
            value={productImagen}
            onChange={e => setProductImagen(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label>
          {" "}
          Descripción del Producto
          <input
            type="text"
            value={productDescripcion}
            onChange={e => setProductDescripcion(e.target.value)}
          ></input>
        </label>
      </div>
      <button onClick={AddProduct}>Agregar producto</button>
    </div>
  );
}

export default Product;
