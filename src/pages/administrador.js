import React, { useEffect } from "react";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Product from "../components/Product";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { useState } from "react";
import ProductoUno from "../components/ProductoUno";

function Administrador() {
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState(false);

  const checkUsuario = async () => {
    const usuarioLogueado = await Auth.currentAuthenticatedUser();
    setUser(usuarioLogueado.attributes.email);
  };
  useEffect(() => {
    checkUsuario();
  }, []);

  if (user === "hectoremilio1000@gmail.com") {
    return (
      <>
        hola admin
        <AmplifySignOut />
      </>
    );
  }
  {
    return (
      <>
        no eres admin regresa al inicio por favor
        <AmplifySignOut />
      </>
    );
  }

  // return (
  //   <>
  //     {user === "hectoremilio1000@gmail.com" ? (
  //       <div>
  //         Hola, ingresa los productos a la base de datos
  //         <Product /> <ProductoUno /> <AmplifySignOut />
  //       </div>
  //     ) : (
  //       <div>
  //         <h2>Hola este sitio solo es para el administrador</h2>
  //         <AmplifySignOut />
  //       </div>
  //     )}
  //   </>
}

export default withAuthenticator(Administrador);
